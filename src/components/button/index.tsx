import './style.scss'

interface ButtonProps extends React.ButtonHTMLAttributes < HTMLButtonElement > {
    className?: string 
    children: React.ReactNode
}
const Button = (props: ButtonProps ): JSX.Element => {
  return (
      <button {...props} className={'button' + props.className}>{props.children}</button>
  )
}

export default Button