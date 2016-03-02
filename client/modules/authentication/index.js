import actions from "./actions"
import routes from "./routes.jsx"
import state from "./state"

export default {
  actions,
  routes,
  load({Accounts}) {
    Accounts.onResetPasswordLink((token, done) => {
      state.passwordResetToken = token
      state.authDoneCallback = done
    })
    Accounts.onEmailVerificationLink((token, done) => {
      state.emailVerifyToken = token
      state.authDoneCallback = done
    })
  }
}
