import React, { ButtonHTMLAttributes, FC } from 'react'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
  return (
    <button className="p-4 border" {...rest}>
      {children}
    </button>
  )
}

export default Button
