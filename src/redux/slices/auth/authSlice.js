// src/redux/slices/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, token, remember } = action.payload;
            state.user = user;
            state.token = token;

            if (typeof window !== "undefined") {
                // clear both storages first
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("user");

                if (remember) {
                    localStorage.setItem("token", token);
                    localStorage.setItem("user", JSON.stringify(user));
                } else {
                    sessionStorage.setItem("token", token);
                    sessionStorage.setItem("user", JSON.stringify(user));
                }
            }
        },

        logout: (state) => {
            state.user = null;
            state.token = null;

            if (typeof window !== "undefined") {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("user");
            }
        },

        setUser: (state, action) => {
            state.user = action.payload;
            if (typeof window !== "undefined") {
                if (localStorage.getItem("token")) {
                    localStorage.setItem("user", JSON.stringify(action.payload));
                } else if (sessionStorage.getItem("token")) {
                    sessionStorage.setItem("user", JSON.stringify(action.payload));
                }
            }
        },

        restoreSession: (state) => {
            if (typeof window !== "undefined") {
                const token =
                    localStorage.getItem("token") || sessionStorage.getItem("token");
                const user =
                    JSON.parse(localStorage.getItem("user")) ||
                    JSON.parse(sessionStorage.getItem("user"));

                if (token) {
                    state.token = token;
                    state.user = user;
                }
            }
        },
    },
});

export default slice.reducer;
export const actions = slice.actions;

// selectors
export const getUser = (state) => state.auth.user;
export const getToken = (state) => state.auth.token;
export const isAuthenticated = (state) => {
    if (state.auth.token) return true;

    if (typeof window !== "undefined") {
        return !!(
            localStorage.getItem("token") || sessionStorage.getItem("token")
        );
    }

    return false;
};

