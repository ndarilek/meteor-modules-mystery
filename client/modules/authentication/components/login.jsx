import forms from "newforms"
import BootstrapForm from "newforms-bootstrap"
import React from "react"
import {Button} from "react-bootstrap"
import toastr from "toastr"

export default React.createClass({

  form: forms.Form.extend({
    username: forms.CharField({label: "Username or email", widgetAttrs: {autoFocus: true}}),
    password: forms.CharField({widget: forms.PasswordInput})
  }),

  onSubmit(e) {
    e.preventDefault()
    const form = this.refs.form.getForm()
    if(form.validate())
      this.props.actions().authentication.logIn(form.cleanedData.username, form.cleanedData.password)
      .then(() => FlowRouter.go("home"))
      .catch((err) => toastr.error(err.reason))
  },

  render() {
    return <div>
      <h1>Log In</h1>
      <form onSubmit={this.onSubmit}>
        <forms.RenderForm ref="form" form={this.form}>
          <BootstrapForm/>
        </forms.RenderForm>
        <Button type="submit">Log In</Button>
      </form>
      <p><a href="/password/forgot">Forgot your password?</a></p>
    </div>
  }

})
