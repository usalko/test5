import * as React from "react"
import { Image } from '@chakra-ui/react'
import {ReactComponent as SvgLogo} from './logo.svg'


export interface LogoProps {
  className?: string
  boxSize?: string
}


export const Logo: React.FC<LogoProps> = ({ className, boxSize }) => {
  return (
    // <Image className={className} boxSize={boxSize} objectFit='cover' src={logo} alt='logo' />
    <SvgLogo />
  )
}