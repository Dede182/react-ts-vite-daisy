import { ReactNode } from "react";

export interface AuthProps extends RouteGuard  {
}

export interface GuardProps extends RouteGuard {
}

interface RouteGuard {
    children : ReactNode;
}

export const enum GuardValidType {
  AUTH = "Auth",
  GUEST = "Guest",
}


export type GuardInterface = ({children }  : {children : JSX.Element}) => JSX.Element
