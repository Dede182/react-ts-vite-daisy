import { ReactNode } from "react";

export interface AuthProps extends RouteGuard  {
}

export interface GuardProps extends RouteGuard {
}

interface RouteGuard {
    children : ReactNode;
}



export type GuardInterface = ({children }  : {children : JSX.Element}) => JSX.Element
