import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useNavigate, useLocation, useParams } from '@reach/router';
import styled from 'styled-components/macro';
import Page from './components/Page';
import Book from './components/Book';
import Spinner from './components/Spinner';
import Sorter from './components/Sorter';
import Select from './components/SelectDropdown';
import EmptyResult from './components/EmptyResult';
import { CONSTANTS } from './constants';
import GetBookNames from './hooks/GetBookNames';
import GetBooks from './hooks/GetBooks';

const Shelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

const showError = err => {
  toast.error(err, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export default function Overview({ actions }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { listName } = useParams();
  const [, view] = location.search.match(/view=(grid|list)/) || [];
  const { saved } = useSelector(state => state?.listData);

  const [selected, setSelected] = useState(listName || CONSTANTS.DEFAULT_LIST);
  const [sortBy, setSortBy] = useState(CONSTANTS.SORT_DATA[0]);
  const [data, err, loading] = GetBookNames();
  const [booksData, booksError, booksLoading] = GetBooks(selected, actions);

  useEffect(() => {
    if (err || booksError) showError(err ?? booksError);
  }, [err, booksError]);

  const handleChange = e => {
    const { value } = e.target;
    setSelected(value);
    navigate(`/${value}`, { replace: true });
  };

  return (
    <Page
      pageTitle="Discover New Books"
      filters={[
        <Select
          data={data}
          value={selected}
          handleChange={handleChange}
          labelText="Categories"
          keyValue
        />,
        <Sorter sortBy={sortBy} setSortBy={setSortBy} keyValue />,
      ]}
    >
      {(booksLoading || loading) && (
        <div className="display-center">
          <Spinner />
        </div>
      )}

      {!booksLoading && !loading && (
        <>
          {booksData?.length > 0 ? (
            <Shelf>
              {booksData
                ?.sort(({ [sortBy]: a }, { [sortBy]: b }) =>
                  a < b ? -1 : a > b ? 1 : 0
                )
                .map(book => (
                  <Book
                    view={view}
                    book={{
                      id: book.primary_isbn13,
                      title: book.title,
                      image_url: book.book_image,
                      description: book.description,
                      author: book.author,
                    }}
                    actions={actions}
                    key={book.primary_isbn13}
                    onSave={() => {
                      actions.saveBookFromList(book);
                    }}
                    onRemove={() =>
                      actions.removeBook(
                        saved?.find(({ id }) => id === book.primary_isbn13)
                      )
                    }
                    saved={saved?.some(({ id }) => id === book.primary_isbn13)}
                  />
                ))}
            </Shelf>
          ) : (
            <div className="display-center">
              <EmptyResult />
            </div>
          )}
        </>
      )}
    </Page>
  );
}

Overview.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};
