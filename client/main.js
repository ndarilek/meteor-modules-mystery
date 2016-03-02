import {createApp} from "mantra-core"

import coreModule from "./modules/core"
import landing from "./modules/landing"

const app = createApp({})
app.loadModule(coreModule)
app.loadModule(landing)
app.init()
