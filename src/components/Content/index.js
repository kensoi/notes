import "./scss/content.scss";

import Index from "./components/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default class AppContent extends React.Component {
  render () {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/web-cross-ui/*" element={Index(this.props)} />
        <Route exact path="/web-cross-ui/" element={Index(this.props)} />
      </Routes>
    </BrowserRouter>
  )
}
}