import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

import * as Styles from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export default function Button({children, ...rest}: ButtonProps) {
    return(
        <Styles.Button {...rest}>
            {children}
            <HiOutlineArrowNarrowRight className="icon"/>
        </Styles.Button>
        
    )
}