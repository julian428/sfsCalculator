import "./Input.css";

const Input = (props) => {
  const label = props.label == null ? "Input field" : props.label;
  const placeholder = props.placeholder == null ? "" : props.placeholder;
  const getVal = (event) => {
    props.setFunction(parseFloat(event.target.value));
  };
  return (
    <div className="input_wrapper">
      <label htmlFor="input" className="input_label">
        {label}
      </label>
      <input
        type="number"
        name="input"
        id="input"
        className="input"
        placeholder={placeholder}
        onChange={getVal}
      />
    </div>
  );
};

export default Input;
