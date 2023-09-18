
import { postLogin } from "@/api/Auth/AuthApi";
import { AxiosError } from "axios";
import { LoginForm, LoginFormRef } from "./LoginForm";
import { useCallback, useRef } from "react";
import { AxiosErrorModify } from "@/helpers/ApiHelpers";

const Login = () => {
  const loginRef = useRef<LoginFormRef>(null);

  const onSubmit = useCallback( async (data : any) => {
        const response = await postLogin(data) !;
        console.log('called')
        if (response!.status === 200) {
          console.log(response);
        } else {
          const errorResponse = response! as unknown as AxiosError;
          AxiosErrorModify(errorResponse,( defaultMessage ) => {
            if(errorResponse.response)
            {
              const { message  } = errorResponse.response.data as { message: string };
              loginRef.current?.setError('serverErrors', {
                type: 'custom',
                message: defaultMessage !== "" ? defaultMessage : message ,
              });
            }
          })
        }
    
  },
    []
  )


  return (
    <div className="w-full h-full flex justify-center items-center">
       <LoginForm ref={loginRef} onSubmit={onSubmit} />
    </div>
  )
}

export default Login