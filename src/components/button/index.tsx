import './style.css'

interface ButtonProps extends React.ButtonHTMLAttributes < HTMLButtonElement > {
    className?: string 
}
const Button = (props: ButtonProps ): JSX.Element => {
  return (
    <button {...props} className={'button' + props.className}>button</button>
  )
}

export default Button