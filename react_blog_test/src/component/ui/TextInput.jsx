function TextInput(props) {
  const {height, value, onChange} = props;

  return <input className={"w-100 border border-2 rounded-2 p-3"} height={height} value={value} onChange={onChange}></input>
}

export default TextInput