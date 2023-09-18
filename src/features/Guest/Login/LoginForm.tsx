import { forwardRef, useImperativeHandle, useRef } from "react";
import InputField from "@/ui/components/input/InputField"
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorOption, useForm } from "react-hook-form";
import { LoginValidationSchema } from "./validation";
import { t } from "i18next";

export interface LoginFormProps {
    onSubmit : (data : Record<string,any>) => void
}

export interface LoginFormRef {
    setError: (name:string,data : ErrorOption) => void
}

export const LoginForm = forwardRef<LoginFormRef,LoginFormProps>((props, ref) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors,isSubmitting }
      } = useForm({
        resolver: zodResolver(LoginValidationSchema)
      });

      const setErrorRef = useRef(setError);
      setErrorRef.current = setError;
      useImperativeHandle(ref,() => {
            return {
                setError: (name,data) => {
                    setErrorRef.current(name,data)
                }
            }
        },
        []
      )

    return (
        <form action="">
        <div className="bg-soft rounded-lg flex flex-col px-12 py-10 w-[90vw] max-w-[450px]">

        {
          errors.serverErrors && <div className="text-red-500 text-center">
            <span>{errors.serverErrors.message as string} </span>
          </div>
        }

        <InputField errors={errors.email !} type="text"  label="email"   inputFieldProps={
          {
            register,
            register_name: "email",
            placeholder: "Enter your email",

          }
        }/>

        <InputField errors={errors.password !} label="Password" type="password" inputFieldProps={
          {
            register,
            register_name: "password",
            placeholder: "Enter your password",
          }
        } />

        <button type="submit" className="btn btn-primary mt-4" onClick={handleSubmit(props.onSubmit)}>
          
          {isSubmitting ? t('loading') : t('login')}
          
          </button>
        </div>
      </form>
    )
})