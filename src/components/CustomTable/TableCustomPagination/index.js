import { TablePagination } from '@material-ui/core'
import React from 'react'

const TableCustomPagination = ({
  rowsPerPageOptions,
  component,
  count,
  rowsPerPage,
  setRowsPerPage,
  page,
  setPage,
}) => {

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  };

  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      component={component}
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  )
}

export default TableCustomPagination