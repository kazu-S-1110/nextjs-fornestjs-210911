import { Book, EditBook } from './../types/Book';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const useMutationBook = () => {
  const queryClient = useQueryClient();

  const createBookMutation = useMutation(
    (book: Omit<EditBook, '_id'>) =>
      axios.post<Book>('http://localhost:8000/book/', book),
    {
      onSuccess: (res) => {
        const previousBooks = queryClient.getQueryData<Book[]>('books');
        if (previousBooks) {
          queryClient.setQueryData('books', [...previousBooks, res.data]);
        }
      },
    }
  );

  const deleteBookMutation = useMutation(
    (id: number) => axios.delete(`http://localhost:8000/book/${id}`),
    {
      onSuccess: (variables) => {
        console.log(variables.data.id);
        const previousBooks = queryClient.getQueryData<Book[]>('books');
        if (previousBooks) {
          queryClient.setQueryData(
            'books',
            previousBooks.filter((book) => book._id !== variables.data.id)
          );
        }
      },
    }
  );

  return { createBookMutation, deleteBookMutation };
};
