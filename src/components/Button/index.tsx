import * as Styles from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export default function Button({children}: ButtonProps) {
    return(
        <Styles.Button>
            {children}
        </Styles.Button>
        
    )
}