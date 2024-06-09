import { useFormState } from 'react-hook-form'
import { Button, type ButtonProps } from '../Button'

type SubmitButtonProps = ButtonProps

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  disabled,
  ...props
}) => {
  const { isSubmitting } = useFormState()
  return <Button disabled={disabled || isSubmitting} {...props} />
}
