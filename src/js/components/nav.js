import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }
  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    
    const featuredClass = getClass(location, "/");
    const archivesClass = getClass(location, "archives");
    const settingsClass = getClass(location, "settings");
    
    const navClass = collapsed ? "collapse" : "";
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={featuredClass}>
                <Link to="/" onClick={this.toggleCollapse.bind(this)}>Featured</Link>
              </li>
              <li className={archivesClass}>
                {/* パラメーター（:user_id）を指定する */}
                <Link to="/archives/user1" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
              </li>
              <li className={settingsClass}>
                <Link to="/settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
    
    function getClass(location, path) {
      if (!location) {
        return "";
      }

      if (path === "/") {
        return location.pathname === "/" ? "active" : "";
      }

      if (path === "archives") {
        return location.pathname.match(/^\/archives/) ? "active" : "";
      }

      if (path === "settings") {
        return location.pathname.match(/^\/settings/) ? "active" : "";
      }
    }
  }
}