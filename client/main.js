import {createApp} from "mantra-core"

import initContext from "./configs/context"

import coreModule from "./modules/core"
import landing from "./modules/landing"

const app = createApp(initContext())
app.loadModule(coreModule)
app.loadModule(landing)
app.init()
