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

// the new class syntax in ES6 allows us to use familiar Java-like class syntax. Easier to understand.
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: null,
      commitQueryStrings: null
    };
  }

  componentWillMount() {
    const { getRepos } = this.props;
    getRepos('sefton419');
    this.setState({commitQueryStrings: null})
  }

  // object method shorthand syntax only requires the method name, parenthesis, and the function body - no need for a key
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
        /> 
      ) 
    } else {
      return 'Click a repo to render a list of commits...';
    }
  }

  render() {

    // Object destructuring takes away the need to repeat the usage of 'this.props' or 'this'
    const { injectRepoList, injectUserCard, injectCommitList } = this
    const { repos, commits, getCommits } = this.props;

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
                    { injectRepoList(repos, getCommits) }
                  </Col>
                  <Col md={6} xs={6}>
                    <Row>
                      <Col md={12} xs={12}> 
                        <div className="margin-bottom">
                          { injectUserCard(repos) }
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} xs={12}>
                        { injectCommitList(commits) }
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
  return {
    repos: state.repos,
    commits: state.commits
  }
}

export default connect(mapStateToProps, { getRepos, getCommits })(App);
