import forms from "newforms"
import BootstrapForm from "newforms-bootstrap"
import React from "react"
import {Button} from "react-bootstrap"

export default React.createClass({

  form: forms.Form.extend({
    password: forms.CharField({widget: forms.PasswordInput, widgetAttrs: {autoFocus: true}})
  }),

  onSubmit(e) {
    e.preventDefault()
    const form = this.refs.form.getForm()
    if(form.validate())
      this.props.onSubmit(this.props.token, form.cleanedData.password)
      .then(() => {
        toastr.success("Your password has been reset.")
        FlowRouter.go("home")
      }).catch((err) => toastr.error(err.reason))
  },

  render() {
    return <div>
      <form onSubmit={this.onSubmit}>
        <forms.RenderForm ref="form" form={this.form}>
          <BootstrapForm/>
        </forms.RenderForm>
        <Button type="submit">Change Password</Button>
      </form>
    </div>
  }

})
