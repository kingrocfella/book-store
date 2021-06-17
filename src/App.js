import React from 'react';
import { Router } from '@reach/router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listActions from './actions/lists';
import * as bookActions from './actions/books';

import Bookshelf from './components/Bookshelf';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import Banner from './components/Banner';
import Overview from './Overview';
import NotFound from './NotFound';
import './App.css';
import { PAGE_ROUTES } from './routes';

export function App(props) {
  return (
    <>
      <Banner />
      <Router>
        <Overview {...props} exact path={PAGE_ROUTES.home()} />
        <BookDetails {...props} path={PAGE_ROUTES.bookdetail()} />

        <Bookshelf {...props} path={PAGE_ROUTES.saved()} />
        <BookDetails {...props} path={PAGE_ROUTES.savedbookdetail()} />

        <AddBook {...props} path={PAGE_ROUTES.addbook()} />
        <NotFound path="*" />
      </Router>
    </>
  );
}

export default connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators({ ...listActions, ...bookActions }, dispatch),
  })
)(App);
