import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import { MuiThemeProvider, Card, AppBar } from 'material-ui';
import '../App.css';
import RepoList from '../components/RepoList';
import UserCard from '../components/UserCard';
import CommitList from '../components/CommitList';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { getRepos } from '../actions/index.js'

injectTapEventPlugin();

class App extends Component {

  componentWillMount() {
    const { getRepos } = this.props;
    getRepos('sefton419');
  }

  render() {

    const { repos } = this.props;

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
                    {repos !== null ? <RepoList repos={repos.repos} /> : 'Loading...' }
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

function mapStateToProps(state) {
  const newState = {
    repos: state.repos
  }
  console.log('Updated Store: ', newState)
  return newState;
}

export default connect(mapStateToProps, { getRepos })(App);
