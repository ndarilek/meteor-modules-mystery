import React from "react"
import {Col, Grid, Row} from "react-bootstrap"

export default () => <Grid fluid={true}>
  <Row>
    <Col md={12}>
      <h1>See Your World In A Whole New Light</h1>
    </Col>
  </Row>
  <Row>
    <Col md={7}>
      <p className="lead">The weather is perfect. You've hopped the right bus and are half an hour early for your big interview. Even so, you're at the far end of a vast industrial park, and no one is around to point you to your building. Soon you'll be late. Wouldn't it be great if a working pair of eyeballs was just a few taps away, and someone could help find your destination with minutes to spare?</p>
      <p className="text-center"><i>Perceptron connects blind clients with sighted assistants by video for help in real-time.</i></p>
      <p className="text-center"><i>Clients get the help they need precisely when they need it. Assistants do meaningful work that makes a difference.</i></p>
    </Col>
    <Col md={4} mdOffset={1}>
      <h2>Stay Informed</h2>
      <p>Interested in learning more? Sign up to be notified when Perceptron launches!</p>
    </Col>
  </Row>
  <Row>
    <Col md={12}>
      <br/>
    </Col>
  </Row>
  <Row>
    <Col md={4} mdOffset={1}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title"><b>For Clients</b></h2>
          <p><a href={FlowRouter.path("signup", {}, {role: "client"})}>Client sign up</a></p>
        </div>
        <div className="panel-body">
          <p>Whether at your desk or on the go, Perceptron is there to help. Designed from the ground up with you in mind, Its streamlined interface makes asking questions easy.</p>
        </div>
        <div className="panel-footer">
          <p><a href={FlowRouter.path("clients")}>Learn More</a></p>
        </div>
      </div>
    </Col>
    <Col md={4} mdOffset={2}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title"><b>For Assistants</b></h2>
          <p><a href={FlowRouter.path("signup", {}, {role: "assistant"})}>Assistant sign up</a></p>
        </div>
        <div className="panel-body">
          <p>Do work that makes a difference from anywhere and from any device. Spend seconds answering simple questions that save minutes or hours for the busy blind client at the other end of the line.</p>
        </div>
        <div className="panel-footer">
          <p><a href={FlowRouter.path("assistants")}>Learn More</a></p>
        </div>
      </div>
    </Col>
  </Row>
</Grid>
