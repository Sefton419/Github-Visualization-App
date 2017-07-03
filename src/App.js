import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { MuiThemeProvider, Card, AppBar } from 'material-ui';


import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid className="App">  
          <Row>
            <Card>
                <Row>
                  <Col md={12}>
                    <AppBar
                      title="Github App"
                      iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>Hey</Col>
                  <Col md={4}>Hey</Col>
                </Row>
            </Card>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
