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
import moment from "moment";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts";
import { classes, StyleWrapper } from "./style";

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <StyleWrapper>
            <Card className={ classes.card }>
                <CardMedia className={ classes.media } image={ post.selectedFile } title={ post.title } />
                <div className={ classes.overlay }>
                    <Typography variant="h6">{ post.creator }</Typography>
                    <Typography variant="body2">{ moment(post.createdAt).fromNow() }</Typography>
                </div>
                <div className={ classes.overlay2 }>
                    <Button style={ {color: "white"} } size="small" onClick={ () => setCurrentId(post._id) }>
                        <MoreHorizIcon fontSize="medium" />
                    </Button>
                </div>
                <div className={ classes.details }>
                    <Typography variant="body2" color="textSecondary">{ post.tags.map((tag) => `#${tag} `) }</Typography>
                </div>
                <Typography className={ classes.title } variant="h5" gutterBottom>{ post.title }</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{ post.message }</Typography>
                </CardContent>
                <CardActions className={ classes.cardActions }>
                    <Button size="small" color="primary" onClick={ () => dispatch(likePost(post._id)) }>
                        <ThumbUpAltIcon fontSize="small" />
                        &nbsp;Like { post.likeCount }
                    </Button>
                    <Button size="small" color="primary" onClick={ () => dispatch(deletePost(post._id)) }>
                        <DeleteIcon fontSize="small" />
                    </Button>
                </CardActions>
            </Card>
        </StyleWrapper>
    )
};

export default Post;
