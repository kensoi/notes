import "./scss/content.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./Notes";
import Settings from "./Settings";
import { PageMountBlockContext } from "shared/utils";

import { MountBlock } from "WebXUI/MountBlock";

export default function Content () {
  const [mount, setMount] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const MountBlockData = {
    show: (offset=100) => {
      setTimeout(
        () => {
          MountBlockData.mount = true
        }, offset
      )
      setTimeout(
        () => {
          MountBlockData.loaded = true
        }, offset + 100
      )
    },
    
    hide: (offset=100) => {
      setTimeout(
        () => {
          MountBlockData.loaded = false
        }, offset
      )
      setTimeout(
        () => {
          MountBlockData.mount = false
        }, offset + 100
      )
    }
  }
  Object.defineProperties(MountBlockData, {
    mount: {
      get: () => mount,
      set: setMount
    },

    loaded: {
      get: () => loaded,
      set: setLoaded
    },
  })

  MountBlockData.show()

  return  <PageMountBlockContext.Provider value={MountBlockData}>
      <MountBlock
        mountState={MountBlockData.mount}
        visibilityState={MountBlockData.loaded}
        className="index"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/notes/*" element={<Index />} />
            <Route exact path="/notes/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </MountBlock>
    </PageMountBlockContext.Provider>
}