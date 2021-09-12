import DataTable from 'react-data-table-component';
import moment from 'moment';

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
      <DataTable columns={columns} data={books} />
    </>
  );
};
