import React from 'react';
import EmptyIcon from '../assets/empty.svg';

export default function EmptyResult() {
  return (
    <div className="mt4">
      <div className="display-center">
        <img src={EmptyIcon} height="60" width="60" alt="empty" />
      </div>
      <h5 className="mt2">No records to be displayed!</h5>
    </div>
  );
}
