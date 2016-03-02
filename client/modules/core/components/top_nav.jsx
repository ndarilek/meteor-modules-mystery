import React from "react"
import {Nav, Navbar, NavItem} from "react-bootstrap"

export default ({actions, user, onLogOut}) => <Navbar fixedTop>
  <Navbar.Header>
    <Navbar.Brand>Perceptron</Navbar.Brand>
    <Navbar.Toggle/>
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      { user ? <NavItem href={FlowRouter.path("home")}>Dashboard</NavItem> : null}
      { user ? <NavItem href={FlowRouter.path("profile")}>{user.displayName()}</NavItem> : null}
      { user ? <NavItem onClick={actions().authentication.logOut}>Log Out</NavItem> : null }
      { user ? null : <NavItem href={FlowRouter.path("home")}>Home</NavItem>}
      { user ? null : <NavItem href={FlowRouter.path("login")}>Log In</NavItem> }
    </Nav>
  </Navbar.Collapse>
</Navbar>
