import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core'
import React from 'react'

const headCells = [
  { id: 'uuid', numeric: false, disablePadding: true, label: 'UUID' },
  { id: 'trackNameVN', numeric: false, disablePadding: false, label: 'Track Name VN' },
  { id: 'trackNameCN', numeric: true, disablePadding: false, label: 'Track Name CN' },
  { id: 'SingerName', numeric: true, disablePadding: false, label: 'Singer' },
  { id: 'UrlYoutube', numeric: true, disablePadding: false, label: 'URL youtube' },
];

const TableCustomHeader = (
  {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  }) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default TableCustomHeader