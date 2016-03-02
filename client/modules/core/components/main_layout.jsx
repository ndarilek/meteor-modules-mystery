import React from "react"
import {Col, Grid, Nav, Navbar, NavItem, Row} from "react-bootstrap"

export default ({main}) => <div>
  <Grid fluid={true}>
    <Row>
      <Col md={12}>
        <main>
          {main()}
        </main>
      </Col>
    </Row>
  </Grid>
  <footer className="footer">
    <Grid fluid={true}>
      <Row>
        <Col md={8}>
          <Navbar>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href={FlowRouter.path("terms")}>Terms of Use</NavItem>
            <NavItem href={FlowRouter.path("privacy")}>Privacy Policy</NavItem>
          </Navbar>
        </Col>
        <Col md={4}>
          <p className="text-right">Copyright &copy; 2015-2016 Nolan Darilek.</p>
        </Col>
      </Row>
    </Grid>
  </footer>
</div>
