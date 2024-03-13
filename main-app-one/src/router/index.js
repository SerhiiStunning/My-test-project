import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export const publicRoutes = [
    {path: '/Login', component: <Login/>}
]

export const privateRoutes = [
    {path: '/Event', component: <Event/>}
]