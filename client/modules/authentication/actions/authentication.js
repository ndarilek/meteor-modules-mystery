import toastr from "toastr"

export default {

  logIn({Meteor}, username, password) {
    return new Promise((resolve, reject) => {
      Meteor.loginWithPassword(username, password, (err) => {
        if(err)
          reject(err)
        else {
          FlowRouter.go("home")
          resolve()
        }
      })
    })
  },

  logOut({FlowRouter, Meteor}) {
    Meteor.logout((err) => {
      if(err)
        console.log(err)
      else {
        toastr.success("Logged out")
        FlowRouter.go("home")
      }
    })
  },

  signUp({Accounts, FlowRouter, Meteor}, args) {
    return new Promise((resolve, reject) => {
      Accounts.createUser(args, (err) => {
        if(err) {
          console.log(err)
          reject(err)
        } else {
          FlowRouter.go("home")
          resolve()
        }
      })
    })
  },

  forgotPassword({Accounts}, args) {
    new Promise((resolve, reject) => {
      Accounts.forgotPassword(args, (err) => {
        if(err)
          reject(err)
        else
          resolve()
      })
    })
  },

}
