import React from 'react';
import MUIDataTable from 'mui-datatables';
import moment from 'moment';
import { useMutationBook } from '../hooks/useMutationBooks';
import { Book } from '../types/Book';
import { Button } from '@material-ui/core';

export const BookGarageC = ({ books }) => {
  const { deleteBookMutation } = useMutationBook();

  const columns = [
    {
      name: '_id',
      options: { display: false },
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
  ];

  const options = {
    hasIndex: true,
    filterType: 'checkbox',
    enableNestedDataAccess: '.',
    onRowsDelete: (lookup, data) => {
      console.log(lookup.data[0].index);
      console.log(data[0][0]);
      // const id = data[0][0];
      // deleteBookMutation.mutate(id);
    },
  };
  console.log('table rendered!');

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
