import { ApiRequest } from './../ApiRequest';


const postObj = (url: string, body: object) => {
    return {
        method: "post",
        url: url,
        params: body
    }
};

export const postLogin = async ( body: any) => {
        const url = "/login";
        const obj = postObj(url, body);
        return await ApiRequest(obj) ;
}

export type LoginResponse = typeof postLogin;