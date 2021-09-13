import React from 'react';
import MUIDataTable from 'mui-datatables';
import moment from 'moment';

export const BookGarageC = ({ books }) => {
  const columns = [
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

  const data = books;

  const options = {
    filterType: 'checkbox',
  };

  return (
    <>
      <MUIDataTable
        title={'Employee List'}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};
