import React from "react"

export default (Component) => {
  return class extends React.Component {
    componentDidMount() {
      const autofocus = document.querySelector("main [autofocus]")
      const fakeAutofocus = document.querySelector("main #autofocus")
      const h1 = document.querySelector("main h1")
      if(autofocus)
        autofocus.focus()
      else if(fakeAutofocus) {
        origTabindex = fakeAutofocus.tabIndex
        if(!origTabindex || origTabindex == -1)
          fakeAutofocus.tabIndex = 0
        fakeAutofocus.focus()
        if(!origTabindex)
          fakeAutofocus.tabIndex = -1
        else
          fakeAutofocus.tabIndex = origTabindex
      } else if(h1) {
        h1.tabIndex = 0
        h1.focus()
        h1.tabIndex = -1
      }
    }
    render() {
      return <Component {...this.props}/>
    }
  }
}
