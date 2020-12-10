// @flow
import React, { createRef, useState } from 'react'

// Constants
import keycodes from '../../constants/keycodes'

type Props = {
  type: string,
  defaultValue: string,
  placeholder: string,
  innerRef: Object,
  keyDown: number,
  handleOnKeyDown: Function,
  className: string
}

const Input = (props: Props) => {
  const {
    type,
    defaultValue,
    placeholder,
    innerRef,
    keyDown,
    handleOnKeyDown,
    className
  } = props

  const [valueInput, setValueInput] = useState(defaultValue)

  // handle event on enter
  const handleKeyDown = event => {
    const { keyCode, target } = event
    const valueFromKeyDown = target.value

    if (keyCode === keyDown) {
      handleOnKeyDown(valueFromKeyDown)
    }
  }

  return (
    <input
      type={type}
      className={`input ${className}`}
      value={valueInput}
      placeholder={placeholder}
      onChange={event => setValueInput(event.target.value)}
      onKeyDown={handleKeyDown}
      ref={innerRef}
    />
  )
}

Input.defaultProps = {
  type: 'text',
  defaultValue: '',
  placeholder: '',
  innerRef: createRef(),
  keyDown: keycodes.KEY_ENTER,
  handleOnKeyDown: () => {},
  className: ''
}

export default Input
