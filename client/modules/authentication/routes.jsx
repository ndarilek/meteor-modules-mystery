import React from "react"
import {mount} from "react-mounter"
import toastr from "toastr"

import {MainLayout} from "/client/modules/core"
import state from "./state"
import ForgotPassword from "./containers/forgot_password"
import Login from "./containers/login"
import ResetPassword from "./containers/reset_password"
import SignUp from "./containers/signup"

export default function(injectDeps, {FlowRouter}) {

  const MainLayoutCtx = injectDeps(MainLayout)

  FlowRouter.route("/login", {
    name: "login",
    action: () => mount(MainLayoutCtx, {main: () => <Login/>})
  })

  FlowRouter.route("/signup", {
    name: "signup",
    action: () => mount(MainLayoutCtx, {main: () => <SignUp role={FlowRouter.getQueryParam("role")}/>})
  })

  FlowRouter.route("/password/forgot", {
    name: "forgotPassword",
    action: () => mount(MainLayoutCtx, {main: () => <ForgotPassword/>})
  })

  FlowRouter.route("/password/reset/:token", {
    action: () => mount(MainLayoutCtx, {main: () => <ResetPassword token={FlowRouter.getParam("token")}/>})
  })

  FlowRouter.triggers.enter([
    (context, redirect) => {
      if(state.passwordResetToken)
        redirect("/password/reset/"+state.passwordResetToken)
      if(state.emailVerifyToken)
        Accounts.verifyEmail(state.emailVerifyToken, (err) => {
          if(err)
            toastr.error(err.reason || err)
          else {
            toastr.success("Email verified")
            state.emailVerifyToken = null
            if(state.authDoneCallback) {
              state.authDoneCallback()
              state.authDoneCallback = null
            }
          }
        })
    }
  ])

}
