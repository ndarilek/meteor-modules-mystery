import {useDeps, composeWithTracker, composeAll} from "mantra-core"

import Home from "../components/home.jsx"

const composer = ({context}, onData) => {
  onData(null, {})
}

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Home)
