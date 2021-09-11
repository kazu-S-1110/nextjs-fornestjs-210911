import axios from 'axios';
import { useQuery } from 'react-query';

export const useQueryBook = () => {
  const GetBooks = async () => {
    const { data } = await axios.get(`localhost:8000/book/`);
    return data;
  };

  return useQuery({
    queryKey: 'books',
    queryFn: GetBooks,
    staleTime: 6000,
  });
};
