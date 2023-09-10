import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routesCollection as rc } from "./route";
import Auth from "@/guards/Auth";
import Login from "@/features/Guest/Login/Login";
import Guest from "@/guards/Guest";
import Test from "@/features/Test/Test";

type GuardValidType = "Auth" | "Guest";

const RoutesComponent = (): JSX.Element => {

    const elementByGuard = (Mid: GuardValidType, Component: JSX.Element) => {
        if (Mid === "Auth") {
            return <Auth>{Component}</Auth>;
        } else if (Mid === "Guest") {
            return <Guest>{Component}</Guest>;
        }
        throw new Error("Mid is not valid");
    };

    return (
        <Suspense fallback={<h3>loading..</h3>}>
            <Routes>
                <Route path={rc.login.path} element={
                    elementByGuard("Guest", <Login />)
                } />
                <Route path={rc.test.path} element={
                    elementByGuard("Auth", <Test />)
                } />

                <Route path="*" element={<h1>
                    route not found
                    Pls go to Login page
                    <a className='text-blue-500 underline mx-3' href="/">Login</a>
                </h1>} />
            </Routes>


        </Suspense>
    );
}

export default RoutesComponent;
