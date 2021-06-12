import { useEffect, useState } from 'react';
import { handleError } from '../api/errors';
import { API_ROUTES } from '../api/routes';
import { APIRequest } from '../api/service';
import { ListModel } from '../models/ListModel';

export default function GetBookNames() {
  const [data, setData] = useState([]);
  const [err, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    APIRequest(API_ROUTES.getBookNames(), 'get')
      .then(({ data: { results } }) => {
        setLoading(false);
        setData(ListModel(results));
      })
      .catch(error => setError(handleError(error)));
  }, []);
  return [data, err, loading];
}
