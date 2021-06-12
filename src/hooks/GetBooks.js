import { useEffect, useState } from 'react';
import { handleError } from '../api/errors';
import { API_ROUTES } from '../api/routes';
import { APIRequest } from '../api/service';

export default function GetBooks(list, actions) {
  const [data, setData] = useState([]);
  const [err, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    APIRequest(API_ROUTES.getBookLists(list), 'get')
      .then(({ data: { results } }) => {
        setLoading(false);
        setData(results?.books);
        actions.saveBooks(results?.books);
      })
      .catch(error => setError(handleError(error)));
  }, [list, actions]);
  return [data, err, loading];
}
