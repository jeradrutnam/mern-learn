/**
 * MIT License
 *
 * Copyright (c) 2022 Jerad Rutnam (jeradrutnam.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 **/

import fetch from "node-fetch";
import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

const introspect = async(asgardeoAccessToken) => {
        const requestOptions = {
                credentials: "include",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    accept: "application/json",
                    Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)
                        .toString("base64")}`
        },
        method: "POST",
    };

    const tokenExchangeResponse = await fetch(
        `${process.env.ASGARDEO_BASE_URL}/oauth2/introspect?token=${asgardeoAccessToken}`, requestOptions);

    if (!tokenExchangeResponse.ok) {
        throw new Error("Failed introspecting token");
    }

    const responseBody = await tokenExchangeResponse.json();

    if (!(responseBody)?.active) {
        // Client should try refreshing the token
        return false;
    }

    return true;
};

const extractAccessToken = (req) => {
    if ((!req?.headers?.authorization) || !req.headers.authorization.split(" ")[1]) {
        return null;
    }

    const bearerToken = req.headers.authorization.split(" ");
    const asgardeoAccessToken = bearerToken.length > 1 ? bearerToken[1] : bearerToken[0];

    if (asgardeoAccessToken) {
        return asgardeoAccessToken;
    } else {
        return null;
    }
};

const isValidAccessToken = async (req, res) => {
    const validAccessToken = await introspect(extractAccessToken(req));

    if (validAccessToken) {
        return;
    } else {
        res.status(401).send("Invalid Access Token");
    }
};

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {

    await isValidAccessToken(req, res);

    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {

    await isValidAccessToken(req, res);

    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id.");

    const updatePost = await PostMessage.findByIdAndUpdate(_id, {...post, _id }, { new: true });

    res.status(201).json(updatePost);
};

export const deletePost = async(req, res) => {

    await isValidAccessToken(req, res);

    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id.");

    await PostMessage.findByIdAndRemove(_id);

    res.status(201).json({ message: "Post deleted successfully." });
};

export const likePost = async(req, res) => {

    await isValidAccessToken(req, res);

    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id.");

    const post = await PostMessage.findById(_id);
    const updatePost = await PostMessage.findByIdAndUpdate(
        _id, { likeCount: post.likeCount + 1 }, { new: true }
    );

    res.status(201).json(updatePost);
};