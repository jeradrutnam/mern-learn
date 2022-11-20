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
    root: `${PREFIX}-root`,
    paper: `${PREFIX}-paper`,
    form: `${PREFIX}-form`,
    fileInput: `${PREFIX}-file-input`,
    buttonSubmit: `${PREFIX}-button-submit`,
    buttonClear: `${PREFIX}-button-clear`
}

export const StyleWrapper = styled('div')(({ theme }) => ({
    [`& .${classes.root} .MuiTextField-root`]: {
        margin: theme.spacing(1)
    },
    [`& .${classes.paper}`]: {
        padding: theme.spacing(2)
    },
    [`& .${classes.form}`]: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    [`& .${classes.fileInput}`]: {
        width: '97%',
        margin: '10px 0'
    },
    [`& .${classes.buttonSubmit}`]: {
        margin: 8
    },
    [`& .${classes.buttonClear}`]: {
        margin: 8,
        marginTop: 0
    }
}));