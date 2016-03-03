import React from "react"
import {mount} from "react-mounter"

import MainLayout from "./components/main_layout.jsx"
import Home from "./containers/home"

FlowRouter.route("/", {
  action: () => mount(MainLayout, {main: () => <Home/>})
})
