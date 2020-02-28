import React from "react";

export default class Archives extends React.Component {
  render() {
    return (
      <div>
        <h1>Archives</h1>
        {/* パラメーターを受け取る */}
        <p>{this.props.match.params.user_id}</p>
      </div>
    );
  }
}