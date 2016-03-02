import {useDeps, composeWithTracker, composeAll} from "mantra-core"
import toastr from "toastr"

import TopNav from "../components/top_nav.jsx"

const composer = ({context}, onData) => {
  const {Meteor} = context()
  onData(null, {user: Meteor.user()})
}

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(TopNav)
