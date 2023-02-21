import * as React from "react"
import { ReactComponent as StaticLogo } from './logo.svg'


export interface LogoProps {
  className?: string
}


export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <StaticLogo height='24px' width='24px' className={className} />
  )
}