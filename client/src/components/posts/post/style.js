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
    media: `${PREFIX}-media`,
    border: `${PREFIX}-border`,
    fullHeightCard: `${PREFIX}-full-height-card`,
    card: `${PREFIX}-card`,
    overlay: `${PREFIX}-overlay`,
    overlay2: `${PREFIX}-overlay2`,
    grid: `${PREFIX}-grid`,
    details: `${PREFIX}-details`,
    title: `${PREFIX}-title`,
    cardActions: `${PREFIX}-card-actions`
}

export const StyleWrapper = styled('div')(({ theme }) => ({
    [`&`]: {
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    [`& .${classes.media}`]: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken'
    },
    [`& .${classes.border}`]: {
        border: 'solid'
    },
    [`& .${classes.fullHeightCard}`]: {
        height: '100%'
    },
    [`& .${classes.card}`]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative'
    },
    [`& .${classes.overlay}`]: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white'
    },
    [`& .${classes.overlay2}`]: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white'
    },
    [`& .${classes.grid}`]: {
        display: 'flex'
    },
    [`& .${classes.details}`]: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
    },
    [`& .${classes.title}`]: {
        padding: '0 16px'
    },
    [`& .${classes.cardActions}`]: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between'
    }
}));