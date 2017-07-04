import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import { MuiThemeProvider, Card, AppBar } from 'material-ui';
import '../App.css';
import RepoList from '../components/RepoList';
import UserCard from '../components/UserCard';
import CommitList from '../components/CommitList';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

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
              <div className="container">
                <Row>
                  <Col md={6} xs={6}>
                    <RepoList />
                  </Col>
                  <Col md={6} xs={6}>
                    <Row>
                      <Col md={12} xs={12}> 
                        <div className="margin-bottom">
                          <UserCard />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} xs={12}>
                        <CommitList />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Card>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
