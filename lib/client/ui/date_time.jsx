import moment from "moment"
import React from "react"

export default React.createClass({

  propTypes: {
    datetime: React.PropTypes.object.isRequired
  },

  setFromNow() {
    this.setState({fromNow: moment(this.props.datetime).fromNow()})
  },

  getInitialState() {
    return {fromNow: moment(this.props.datetime).fromNow()}
  },

  componentWillMount() {
    this.setState({interval: Meteor.setInterval(this.setFromNow, 60000)})
  },

  componentWillUnmount() {
    if(this.state.interval)
      Meteor.clearInterval(this.state.interval)
  },

  render() {
    return <time dateTime={this.props.datetime}>
      {this.state.fromNow}
    </time>
  }

})
