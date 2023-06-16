function Button({onClick, value, children}) {
return (
  <button value={value} onClick={onClick} >{children}</button>
)
}

export default Button