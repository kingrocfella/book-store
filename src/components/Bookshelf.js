import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { useNavigate, useLocation } from '@reach/router';
import Sorter from './Sorter';
import { Button } from './Buttons';
import Icon from './Icon';
import Page from './Page';
import Book from './Book';
import { PAGE_ROUTES } from '../routes';
import { CONSTANTS } from '../constants';

const Shelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 1080px;
  margin: 0 auto;
`;

export default function Bookshelf({ actions }) {
  const { saved } = useSelector(state => state?.listData);
  const navigate = useNavigate();
  const location = useLocation();
  const [, view] = location.search.match(/view=(grid|list)/) || [];
  const [sortBy, setSortBy] = useState(CONSTANTS.SORT_DATA[0]);

  return (
    <Page
      pageTitle="Your Saved Books"
      filters={[
        <Button onClick={() => navigate(PAGE_ROUTES.addbook())} key="add-new">
          <Icon icon="plus" /> Add new book
        </Button>,
        <Sorter sortBy={sortBy} setSortBy={setSortBy} />,
      ]}
    >
      <Shelf>
        {saved
          ?.sort(({ [sortBy]: a }, { [sortBy]: b }) =>
            a < b ? -1 : a > b ? 1 : 0
          )
          .map(book => {
            const unique = book.primary_isbn13 ?? book.id;
            return (
              <Book
                view={view}
                book={book}
                actions={actions}
                key={unique}
                onSave={() => {
                  actions.addBook(book);
                }}
                onRemove={() =>
                  actions.removeBook(saved.find(({ id }) => id === unique))
                }
                saved={saved.some(({ id }) => id === unique)}
              />
            );
          })}
      </Shelf>
    </Page>
  );
}

Bookshelf.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};
