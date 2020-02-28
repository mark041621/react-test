import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/layout";
import Featured from "./components/featured";
import Archives from "./components/archives";
import Settings from "./components/settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Layout>
      {/* React Router で、それぞれのパスにアクセスした時に表示されるコンポーネントを指定 */}
      <Route exact path="/" component={Featured}></Route> {/* exact は厳密なマッチ */}
      <Route path="/archives/:user_id" name="archives" component={Archives}></Route> {/* :xxx でパラメーターを渡す */}
      <Route path="/settings" name="settings" component={Settings}></Route>
    </Layout>
  </Router>,
app);