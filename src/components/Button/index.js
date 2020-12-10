// @flow
import React from 'react'

type Props = {
  label: string,
  handleOnclick: Function,
  className: string,
  disabled: boolean
}

const Button = (props: Props) => {
  const { label, className, handleOnclick, disabled } = props

  return (
    <button
      className={`button ${className}`}
      onClick={handleOnclick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

Button.defaultProps = {
  label: '',
  handleOnclick: () => {},
  className: '',
  disabled: false
}

export default Button
