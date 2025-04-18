function Button(props) {
  const {title, onClick} = props;
  return <button onClick={onClick} className={"btn btn-primary"}>{title || "button"}</button>
}

export default Button