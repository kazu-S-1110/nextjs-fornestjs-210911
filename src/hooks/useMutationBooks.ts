import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const useMutationBook = () => {
  const queryClient = useQueryClient();

  const createBookMutation = useMutation(
    (book) => axios.post('http://localhost:8000/book/', book),
    {
      onSuccess: (res) => {
        const previousBooks = queryClient.getQueryData('books');
        if (previousBooks) {
          queryClient.setQueryData('books', [...previousBooks, res.data]);
        }
      },
    }
  );

  return { createBookMutation };
};
