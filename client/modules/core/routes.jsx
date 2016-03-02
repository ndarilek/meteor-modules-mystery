import React from "react"
import {mount} from "react-mounter"

import EmptyLayout from "./components/empty_layout.jsx"
import MainLayout from "./components/main_layout.jsx"
import NotFound from "./components/not_found.jsx"
import Home from "./containers/home"
import TopNav from "./containers/top_nav"

export default function(injectDeps, {FlowRouter}) {

  const MainLayoutCtx = injectDeps(MainLayout)
  const EmptyLayoutCtx = injectDeps(EmptyLayout)

  FlowRouter.notFound = {
    action: () => mount(MainLayoutCtx, {main: () => <NotFound/>})
  }

  FlowRouter.route("/", {
    name: "home",
    action: () => mount(MainLayoutCtx, {main: () => <Home/>})
  })

  FlowRouter.route("/nav", {
    action: () => mount(EmptyLayoutCtx, {main: () => <TopNav/>})
  })

}
