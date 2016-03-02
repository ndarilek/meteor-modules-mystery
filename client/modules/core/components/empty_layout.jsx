import React from "react"
import {Col, Grid, Row} from "react-bootstrap"

export default ({main}) => <Grid fluid={true}>
  <Row>
    <Col md={12}>
      {main()}
    </Col>
  </Row>
</Grid>
