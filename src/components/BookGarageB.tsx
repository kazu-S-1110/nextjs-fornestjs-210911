import DataTable from 'react-data-table-component';
import moment from 'moment';
import React from 'react';
import { Button, Text } from '@chakra-ui/react';

const columns = [
  {
    name: 'Title',
    selector: (row) => row.title,
  },
  {
    name: 'Model',
    selector: (row) => row.model,
  },
  {
    name: 'Created_at',
    selector: (row) => row.createdAt,
    format: (row) => moment(row.timestamp).format('YYYY-MM-DD HH:mm:ss'),
  },
];

export const BookGarageB = ({ books }) => {
  return (
    <>
      <Text fontSize="4xl" fontWeight="extrabold">
        SetupList
      </Text>

      <DataTable columns={columns} data={books} />
    </>
  );
};
