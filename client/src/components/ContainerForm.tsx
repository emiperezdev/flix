import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export const ContainerForm = ({ children }: Props) => {
  return (
    <div className="max-w-md sm:w-auto p-5 sm:p-7 rounded-lg border">
      {children}
    </div>
  )
}
