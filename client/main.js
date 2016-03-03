import {createApp} from "mantra-core"

import coreModule from "./modules/core"

const app = createApp({})
app.loadModule(coreModule)
app.init()
