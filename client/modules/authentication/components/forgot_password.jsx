import forms from "newforms"
import BootstrapForm from "newforms-bootstrap"
import React from "react"
import {Button} from "react-bootstrap"
import toastr from "toastr"

export default React.createClass({

  form: forms.Form.extend({
    email: forms.EmailField({widgetAttrs: {autoFocus: true}}),
  }),

  onSubmit(e) {
    e.preventDefault()
    const form = this.refs.form.getForm()
    if(form.validate())
      this.props.actions().authentication.forgotPassword(form.cleanedData)
      .then(() => toastr.success("Please check your email for further instructions."))
      .catch((err) => toastr.error(err.reason))
  },

  render() {
    return <div>
      <form onSubmit={this.onSubmit}>
        <forms.RenderForm ref="form" form={this.form}>
          <BootstrapForm/>
        </forms.RenderForm>
        <Button type="submit">Reset</Button>
      </form>
    </div>
  }

})
