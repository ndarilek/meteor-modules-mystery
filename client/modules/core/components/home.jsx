console.log("home.jsx")

import React from "react"
import toastr from "toastr"

import {Landing} from "/client/modules/landing"
import {Accessible} from "/lib/client/ui"

export default Accessible(({userId}) => <p>Welcome home.</p>)
