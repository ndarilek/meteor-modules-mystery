import {composeWithTracker} from "react-komposer"

import Home from "../components/home.jsx"

const composer = ({context}, onData) => {
  onData(null, {})
}

export default composeWithTracker(composer)(Home)
