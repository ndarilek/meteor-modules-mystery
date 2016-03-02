import React from "react"
import {mount} from "react-mounter"

import MainLayout from "./components/main_layout.jsx"
import Home from "./containers/home"

export default function(injectDeps) {

  const MainLayoutCtx = injectDeps(MainLayout)

  FlowRouter.route("/", {
    action: () => mount(MainLayoutCtx, {main: () => <Home/>})
  })

}
