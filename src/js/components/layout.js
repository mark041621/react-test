import React from "react";
import { withRouter } from "react-router-dom";

import Nav from "./nav";

class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      // レイアウトのベース
      <div>
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
              {/* Layoutクラス以下のコンポーネントを表示する */}
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Layout);