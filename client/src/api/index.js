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

import axios from "axios";
import { AsgardeoSPAClient } from "@asgardeo/auth-react";
import deploymentConfig from "../deployment.config.json";

const url = deploymentConfig.API_ENDPOINT || "http://localhost:5000/posts";

const spaClient = AsgardeoSPAClient.getInstance();

const doHTTPRequest = (requestConfig) => {
    return spaClient.httpRequest(requestConfig)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => {
    const requestConfig = {
        method: "POST",
        url: url,
        data: newPost
    };

    return doHTTPRequest(requestConfig);
};

export const updatePost = (id, updatedPost) => {
    const requestConfig = {
        method: "PATCH",
        url: `${url}/${id}`,
        data: updatedPost
    };

    return doHTTPRequest(requestConfig);
};

export const deletePost = (id) => {
    const requestConfig = {
        method: "DELETE",
        url: `${url}/${id}`
    };

    return doHTTPRequest(requestConfig);
};

export const likePost = (id) => {
    const requestConfig = {
        method: "PATCH",
        url: `${url}/${id}/like`
    };

    return doHTTPRequest(requestConfig);
};