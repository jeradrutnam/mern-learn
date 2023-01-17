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
import ReactDOM from "react-dom/client";
import { AuthProvider } from "@asgardeo/auth-react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import deploymentConfig from "./deployment.config.json";

import App from "./app";
import "./index.css";

import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
const postsUrl = deploymentConfig.API_ENDPOINT || "http://localhost:5000/posts";

root.render(
    <AuthProvider
        config={ {
            signInRedirectURL: deploymentConfig.ASGARDEO_BASE_URL,
            signOutRedirectURL: deploymentConfig.ASGARDEO_BASE_URL,
            clientID: deploymentConfig.CLIENT_ID,
            baseUrl: deploymentConfig.ASGARDEO_BASE_URL,
            resourceServerURLs: [ postsUrl ],
            scope: [ "openid","profile" ]
        } }
    >
        <Provider store={ store }>
            <App />
        </Provider>
    </AuthProvider>
);
