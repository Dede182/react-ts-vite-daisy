import { t } from 'i18next'
import {  FieldValues, UseFormRegister } from 'react-hook-form'
import InputError from './InputError'

interface InputProps {
    register: UseFormRegister<any>,
    register_name: any,
    placeholder?: string,
    disabled ? : boolean,
    initialValue ? : string | number,
    form? : string,
    styleClass? : string
}

interface InputFieldProps {
  label?: string,
  inputFieldProps : InputProps,
  errors : FieldValues,
  type : "text" | "password" | "email" | "number"  
}



const InputField = (props : InputFieldProps) => {

  const inputProps = props.inputFieldProps;

  return (
    <div className="form-control w-full ">
    {
      props.label !== "" && <label className="label ">
      <span className="label-text  sm:text-lg capitalize ">{props.label}</span>
    </label>
    }
    <input type={props.type}
    {...inputProps.register(inputProps.register_name)} disabled={inputProps.disabled}
    value={inputProps.initialValue}
    form={inputProps.form}
    placeholder={t(inputProps.placeholder !)} className={`input input-md xl:input-lg input-bordered w-full ${inputProps.styleClass}`} />
    <InputError errors={props.errors} />

  </div>
  )
}

export default InputField