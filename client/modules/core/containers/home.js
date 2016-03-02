import {useDeps, composeWithTracker, composeAll} from "mantra-core"

import Home from "../components/home.jsx"

const composer = ({context}, onData) => {
  const {Meteor} = context()
  onData(null, {user: Meteor.user(), userId: Meteor.userId()})
}

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Home)
