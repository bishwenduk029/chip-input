import React from "react";

const chipStyle = {
  display: "flex",
  flexDirection: "column"
};

const labelStyle = {
  marginBottom: 10
};

const chipInputStyle = {
  outline: "none",
  border: "none",
  borderBottom: "1px solid #000"
};

class ChipInput extends React.Component {
  render() {
    return (
      <div style={chipStyle}>
        <label for="chip-input" style={labelStyle}>
          Email Address:
        </label>
        <input id="chip-input" type="email" style={chipInputStyle} />
      </div>
    );
  }
}

export default ChipInput;
