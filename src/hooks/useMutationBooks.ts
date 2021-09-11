import axios from 'axios';
import { QueryClient, useQuery, useQueryClient } from 'react-query';

export const useMutationBook = () => {
  const QueryClient = useQueryClient();

  const createBookMutation = (book) => {
    axios.post('http://localhost:8000/book/', book);
  };
  return { createBookMutation };
};
