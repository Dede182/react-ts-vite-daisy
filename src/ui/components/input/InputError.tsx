import { t } from 'i18next'
import { FieldValues } from 'react-hook-form'

const InputError = ({errors} : {errors  : FieldValues}) => {
  return (
    <div className="invalid-feedback">{errors ? t(errors.message) : ''}</div>
  )
}

export default InputError