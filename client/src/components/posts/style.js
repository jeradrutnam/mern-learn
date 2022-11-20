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

import { styled } from '@mui/material/styles';

const PREFIX = 'custom';

export const classes = {
    mainContainer: `${PREFIX}-main-container`,
    mainContainerItem: `${PREFIX}-main-container-item`,
    smMargin: `${PREFIX}-sm-margin`,
    actionDiv: `${PREFIX}-action-div`
}

export const StyleWrapper = styled('div')(({ theme }) => ({
    [`& .${classes.mainContainer}`]: {
        display: 'flex',
        alignItems: 'center',
        [`& .${classes.mainContainerItem}`]: {
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
        }
    },
    [`& .${classes.smMargin}`]: {
        margin: theme.spacing(1)
    },
    [`& .${classes.actionDiv}`]: {
        textAlign: 'center'
    }
}));