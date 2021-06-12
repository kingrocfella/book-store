import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { Link } from '@reach/router';
import { SaveButton } from './Buttons';
import { PAGE_ROUTES } from '../routes';
import { CONSTANTS } from '../constants';

const Anchor = styled(Link)`
  text-decoration: none;
  font: inherit;
  color: inherit;
`;

const Details = styled.section`
  flex: 1;
`;

const ListDetails = styled.section`
  flex: 1;
  padding: 2rem;
`;

const Cover = styled.div`
  width: 150px;
  padding-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  & > a > img {
    max-width: 100%;
    max-height: 240px;
    display: block;
  }
`;

const Wrapper = styled.article`
  font-family: Palatino, serif;
  display: flex;
  justify-content: flex-start;
  width: 270px;
  heigth: 20rem;
  padding: 20px 10px;
  box-shadow: 9px 11px 19px -13px rgba(0, 0, 0, 0.57);
  -webkit-box-shadow: 9px 11px 19px -13px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 9px 11px 19px -13px rgba(0, 0, 0, 0.57);
  border-radius: 5px;
  margin: 2rem;
  background: #f0f0f0;

  ${({ view }) => {
    if (view === CONSTANTS.LIST_VIEW) {
      return `
        align-items: flex-start;
        width: 100%;
        padding: 10px;
        ${Cover} {
            margin-right: 78px;
        }
      `;
    }
    return `
      &&, ${Details} {
        display: flex;
        align-items: center;
        flex-direction: column;
          text-align: center;
      }
  `;
  }}
`;

const Title = styled.h3`
  color: #242a35;
  font-family: Palatino, serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  margin: 0 0 8px 0;
  text-transform: capitalize;
`;

const Author = styled.p`
  font-family: Palatino, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  margin: 0 0 8px 0;
  color: #717883;
`;

const Description = styled.p`
  color: #242a35;
  font-family: Palatino, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin: 1em 0 2em 0;
`;

const ButtonSpace = styled.div`
  margin: 1rem;
  width: 8rem;
`;

export default function Book({ book, onSave, onRemove, saved, view }) {
  const ConstDetail = (
    <>
      <Title>
        <Anchor to={PAGE_ROUTES.bookdetail(book.id)}>
          {book?.title?.toLowerCase()}
        </Anchor>
      </Title>
      <Author>{book?.author}</Author>
      {view === CONSTANTS.LIST_VIEW && (
        <Description>{book?.description}</Description>
      )}
    </>
  );
  return (
    <Wrapper view={view}>
      <ButtonSpace>
        <SaveButton onSave={onSave} onRemove={onRemove} saved={saved} />
      </ButtonSpace>

      <Cover>
        <Anchor to={PAGE_ROUTES.bookdetail(book?.id)}>
          <img
            src={book.image_url ?? book.book_image}
            alt={book?.title}
            height="200"
            width="200"
          />
        </Anchor>
      </Cover>
      {view === CONSTANTS.LIST_VIEW ? (
        <ListDetails>{ConstDetail}</ListDetails>
      ) : (
        <Details>{ConstDetail}</Details>
      )}
    </Wrapper>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
  saved: PropTypes.bool,
  onSave: PropTypes.func,
  onRemove: PropTypes.func,
  view: PropTypes.string,
};
