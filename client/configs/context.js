import {FlowRouter} from "meteor/kadira:flow-router"
import {Accounts} from "meteor/accounts-base"
import {Meteor} from "meteor/meteor"
import {SubsManager} from "meteor/meteorhacks:subs-manager"
import {Tracker} from "meteor/tracker"

export default () => ({
  Accounts,
  FlowRouter,
  Meteor,
  Subscriptions: new SubsManager(),
  Tracker
})
