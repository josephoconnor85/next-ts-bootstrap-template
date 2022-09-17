import Button from 'react-bootstrap/Button'

interface Props {
    variant: string
    size?: 'sm' | 'lg' | undefined
    disabled?: boolean
    handleClick?: () => void
    text: string
}

const Tbutton = ({ variant, size, disabled, handleClick, text }: Props) => {
    return (
        <Button
            variant={variant}
            size={size}
            disabled={disabled}
            onClick={handleClick}
        >
            {text}
        </Button>
    )
}

export default Tbutton
