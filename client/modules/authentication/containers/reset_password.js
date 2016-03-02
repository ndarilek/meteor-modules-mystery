import {useDeps, composeWithTracker, composeAll} from "mantra-core"

import ResetPassword from "../components/reset_password.jsx"

const composer = ({context}, onData) => {
  const {Accounts, Meteor} = context()
  onData(null, {
    onSubmit: (token, password) => new Promise((resolve, reject) => {
      Accounts.resetPassword(token, password, (err) => {
        if(err)
          reject(err)
        else
          resolve()
      })
    })
  })
}

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ResetPassword)
