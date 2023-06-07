import "./scss/content.scss";

import Index from "./components/Index";
import Settings from "./components/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default class AppContent extends React.Component {
  render () {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/notes/*" element={<Index toolkit={this.props.toolkit}/>} />
        <Route exact path="/notes/settings" element={<Settings toolkit={this.props.toolkit}/>} />
      </Routes>
    </BrowserRouter>
  )
}
}