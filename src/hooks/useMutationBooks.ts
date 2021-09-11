import axios from 'axios';
import { QueryClient, useQuery, useQueryClient } from 'react-query';

export const useMutationBook = () => {
  const QueryClient = useQueryClient();

  const createBookMUtation = (book) => {
    axios.post('http://localhost:8000/book/', book);
  };
};
