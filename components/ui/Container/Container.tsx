/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from 'classnames'
import React, { FC } from 'react'

interface ContainerProps {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
}

const Container: FC<ContainerProps> = ({ children, className, el = 'div', clean }) => {
  const rootClassName = cn(className, {
    'mx-auto max-w-7_5xl sm:px-4': !clean,
  })

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
