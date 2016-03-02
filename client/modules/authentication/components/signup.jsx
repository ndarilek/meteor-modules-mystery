import forms from "newforms"
import BootstrapForm from "newforms-bootstrap"
import React from "react"
import {Button} from "react-bootstrap"
import toastr from "toastr"

export default React.createClass({

  propTypes: {
    role: React.PropTypes.oneOf(["client", "assistant"]).isRequired
  },

  form: forms.Form.extend({
    username: forms.CharField({label: "Username", widgetAttrs: {autoFocus: true}}),
    email: forms.EmailField(),
    password: forms.CharField({widget: forms.PasswordInput})
  }),

  onSubmit(e) {
    e.preventDefault()
    const form = this.refs.form.getForm()
    if(form.validate()) {
      args = form.cleanedData
      args.profile = {role: this.props.role}
      this.props.actions().authentication.signUp(args)
      .then(() => FlowRouter.go("home"))
      .catch((err) => toastr.error(err.reason))
    }
  },

  render() {
    return <div>
      <h1>Sign Up</h1>
      <form onSubmit={this.onSubmit}>
        <forms.RenderForm ref="form" form={this.form}>
          <BootstrapForm/>
        </forms.RenderForm>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  }

})
