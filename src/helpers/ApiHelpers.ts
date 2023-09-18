import { AxiosError } from 'axios';

export const AxiosErrorModify = function (response: any , callback : (message? : string) => void) {
    const errorResponse = response! as unknown as AxiosError;
    if (errorResponse.response ) {
        if(errorResponse.response.status === 500){
            console.log('callback with 500')
            callback("Server Error");
        }
        else{
            callback();

        }
    } 
}