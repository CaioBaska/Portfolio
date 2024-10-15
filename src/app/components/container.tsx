import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className=" bg-white relative flex h-fit w-screen max-w-7xl flex-col sm:mx-auto">{children}</div>
}