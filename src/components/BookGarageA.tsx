/* eslint-disable react/display-name */
import { Box } from '@chakra-ui/layout';
import MaterialTable from 'material-table';
import React, { forwardRef } from 'react';
import { AddBox, ArrowDownward, LastPage } from '@material-ui/icons';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
};

export const BookGarageA = ({ data }) => {
  console.log(data);
  return (
    <Box w="90%">
      <MaterialTable
        icons={tableIcons}
        columns={[
          { title: 'title', field: 'title' },
          { title: 'model', field: 'model' },
          { title: 'created_at', field: 'createdAt' },
        ]}
        data={data}
        title="SetupList"
      />
    </Box>
  );
};
