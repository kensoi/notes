import "./scss/content.scss";

import Index from "./components/Index";
import Settings from "./components/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppContent () {
  return <BrowserRouter>
      <Routes>
        <Route path="/notes/*" element={<Index />} />
        <Route exact path="/notes/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
}