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

import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Post from "./post/post";
import useStyles from "./style";

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={ classes.mainContainer } container alignItems="stretch" spacing={3}>
                { posts.map((post) => (
                    <Grid item key={ post._id } xs={12} sm={6}>
                        <Post post={post} setCurrentId={ setCurrentId } />
                    </Grid>
                )) }
            </Grid>
        )
    )
};

export default Posts;
