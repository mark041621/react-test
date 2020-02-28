import React from "react";
import Title from "./header/Title";

export default class Header extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

  render() {
    return (
      <div>
            <Title />
            <p>{this.props.title}</p>
            <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}