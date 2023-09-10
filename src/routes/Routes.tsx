import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routesCollection as rc } from "./route";
import { GuardValidType as gvt } from "@/guards/types";

import Auth from "@/guards/Auth";
import Guest from "@/guards/Guest";
import Login from "@/features/Guest/Login/Login";
import Test from "@/features/Test/Test";

const elementByGuard = (Mid: gvt, Component: JSX.Element) => {
    if (Mid === gvt.GUEST) {
        return <Guest>{Component}</Guest>;
    } else if (Mid === gvt.AUTH) {
        return <Auth>{Component}</Auth>;
    }
    throw new Error("Mid is not valid");
};

const RoutesComponent = (): JSX.Element => {
    return (
        <Suspense fallback={<h3>loading..</h3>}>
            <Routes>
                <Route path={rc.login.path} element={elementByGuard(gvt.GUEST, <Login />)} />
                <Route path={rc.test.path} element={elementByGuard(gvt.AUTH, <Test />)} />
                <Route path="*" element={<h1>
                    route not found
                    Please go to Login page
                    <a className='text-blue-500 underline mx-3' href="/">Login</a>
                </h1>} />
            </Routes>
        </Suspense>
    );
}

export default RoutesComponent;
