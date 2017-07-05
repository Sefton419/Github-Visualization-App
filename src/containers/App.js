import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import { MuiThemeProvider, Card, AppBar } from 'material-ui';
import '../App.css';
import RepoList from '../components/RepoList';
import UserCard from '../components/UserCard';
import CommitList from '../components/CommitList';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { getRepos, getCommits } from '../actions/index.js'

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: null,
      commitQueryString: null
    };

  }

  componentWillMount() {
    const { getRepos } = this.props;
    getRepos('sefton419');
  }

  injectRepoList(repos, getCommits) {
    if (repos !== null) {
      return (
        <RepoList 
          repos={repos.repos} 
          getCommits={getCommits}
        /> 
      ) 
    } else {
      return 'Loading...';
    }
  }

  injectUserCard(repos) {
    if (repos !== null) {
      return (
        <UserCard 
          repos={repos.repos} 
        /> 
      ) 
    } else {
      return 'Loading...';
    }
  }

  injectCommitList(commits) {
    if (commits !== null) {
      return (
        <CommitList 
          commits={commits.commits}
          getCommits={getCommits} 
        /> 
      ) 
    } else {
      return 'Loading...';
    }
  }

  render() {

    const { repos, commits, getCommits, createCommitQueryString } = this.props;

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
                    { this.injectRepoList(repos, getCommits) }
                  </Col>
                  <Col md={6} xs={6}>
                    <Row>
                      <Col md={12} xs={12}> 
                        <div className="margin-bottom">
                          { this.injectUserCard(repos) }
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} xs={12}>
                        { this.injectCommitList(commits) }
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
    repos: state.repos,
    commits: state.commits
  }
  console.log('Updated Store: ', newState)
  return newState;
}

export default connect(mapStateToProps, { getRepos, getCommits })(App);
