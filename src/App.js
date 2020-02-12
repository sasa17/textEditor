import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

class App extends Component {
  state = {
    color: null,
    bold: null,
    italic: null,
    underline: null
  };

  changeColor = color => this.setState({ color: color });
  selectStyle = style => this.setState({ [style]: style });
  unselectStyle = style => this.setState({ [style]: null });

  render() {
    const stylingBoxes = stylings.map(style => (
      <button
        onClick={() => {
          this.state[style]
            ? this.unselectStyle(style)
            : this.selectStyle(style);
        }}
        className="btn btn-light"
        style={styles[style]}
        key={style}
      >
        {style}
      </button>
    ));

    const colorBoxes = colors.map(color => (
      <button
        onClick={() => this.changeColor(color)}
        style={{ backgroundColor: color, height: 30, width: 30 }}
        key={color}
      />
    ));

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: `${this.state.color}`,
            fontWeight: this.state.bold,
            fontStyle: this.state.italic,
            textDecorationLine: this.state.underline
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
