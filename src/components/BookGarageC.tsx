import React from 'react';
import MUIDataTable from 'mui-datatables';
import moment from 'moment';
import { useMutationBook } from '../hooks/useMutationBooks';
import { Button } from '@chakra-ui/react';

export const BookGarageC = ({ books }) => {
  const { deleteBookMutation } = useMutationBook();
  const data = books;
  const columns = [
    {
      name: '_id',
      options: { display: true },
    },
    {
      name: 'title',
      label: 'Title',
    },
    {
      name: 'model',
      label: 'Model',
    },
    {
      name: 'createdAt',
      options: {
        customBodyRender: (data) => moment(data).format('YYYY-MM-DD HH:mm'),
      },
    },
    {
      name: 'updatedAt',
      options: {
        customBodyRender: (data) => moment(data).format('YYYY-MM-DD HH:mm'),
      },
    },
    {
      name: 'Edit',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <Button
              colorScheme="messenger"
              onClick={() => {
                console.log(data[dataIndex]._id);
              }}
            >
              Edit
            </Button>
          );
        },
      },
    },

    {
      name: 'Delete',
      options: {
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
              colorScheme="green"
              onClick={() => {
                const id = data[tableMeta.rowIndex]._id;
                deleteBookMutation.mutate(id);
              }}
            >
              Delete
            </Button>
          );
        },
      },
    },
  ];

  const options = {
    selectableRows: 'none',
  };
  return (
    <>
      <MUIDataTable
        title={'SetupList'}
        data={books}
        columns={columns}
        options={options}
      />
    </>
  );
};
