import { Component } from "react";

class CustomTextarea extends Component {
  render() {
    const {
      name,
      onChange,
      state,
      label,
      rows,
      counter,
      placeholder,
      zero,
      dashThird,
      onBlur,
        onKeyUp
    } = this.props;
    return (
      <>
        <label className="textareaLabel">{label}</label>
        <textarea
          rows={rows}
          value={state[name]}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          className="textareaItem"
        ></textarea>
        <span className="counter">
          {zero}
          {dashThird}
          {counter}
        </span>
      </>
    );
  }
}

export default CustomTextarea;