import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarLayout from "./layouts/SidebarLayout/Sidebar";
import { RouteObject } from "react-router";
import SuspenseLoader from "./components/SuspenseLoader";
import BaseLayout from "./layouts/BaseLayout";
import Signup from "./pages/signup";

// const Loader = (Component)=>(props)=>
// (
//   <Suspense fallback={<SuspenseLoader/>}>
//     <Component {...props} />

//   </Suspense>
// )

const Dashboard = (lazy(()=>import("./pages/dashboard")))
export const routes: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout/>,
    children: [
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: '/home',
        element: <div>Homepage</div>
      },
    ],
  },
  {
    path: "",
    element: <SidebarLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: '/home',
        element: <div>Homepage</div>
      },
    ],
  },

];