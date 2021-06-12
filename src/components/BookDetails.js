import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Page from './Page';
import Book from './Book';
import EmptyResult from './EmptyResult';

const StyledPage = styled(Page)`
  h1,
  h2 {
    margin-bottom: 8px;
  }

  h1 {
    text-transform: capitalize;
  }

  p {
    margin-top: 0;
    color: #69707b;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 2.5em;
`;

export default function BookDetails({ bookId, actions }) {
  const { books, saved } = useSelector(state => state?.listData);
  let book = saved.find(({ id }) => id === bookId);
  const isSaved = !!book;

  if (books) {
    const fullBook = books.find(({ primary_isbn13: id }) => id === bookId);

    if (!book && fullBook) {
      book = fullBook;
    } else if (fullBook) {
      book = { ...book, ...fullBook };
    }
  }

  if (!book) {
    return (
      <div className="display-center">
        <EmptyResult />
      </div>
    );
  }

  const onSave = () => actions.saveBookFromList(book);
  const onRemove = () => actions.removeBook(book);

  return (
    <StyledPage pageTitle="Page Details">
      <Row>
        <Book book={book} onSave={onSave} onRemove={onRemove} saved={isSaved} />
        <div className="mt3">
          <Table>
            <tbody>
              <tr>
                <td>Publisher: </td>
                <td>{book?.publisher}</td>
              </tr>
              <tr>
                <td>ISBN13:</td>
                <td>{book?.primary_isbn13}</td>
              </tr>
              <tr>
                <td>Best Sellers Rank:</td>
                <td>{book?.rank}</td>
              </tr>
              <tr>
                <td>Weeks on Best Sellers List:</td>
                <td>{book?.weeks_on_list}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Row>
    </StyledPage>
  );
}

BookDetails.propTypes = {
  bookId: PropTypes.string,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};
