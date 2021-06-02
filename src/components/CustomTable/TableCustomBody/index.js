import { Checkbox, TableBody, TableCell, TableRow } from '@material-ui/core'
import React from 'react'

const TableCustomBody = ({
  dataTable,
  isSelected,
  handleClick
}) => {

  return (
    <TableBody>
      {Object.keys(dataTable).map((row, index) => {
        const isItemSelected = isSelected(row);
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <TableRow
            hover
            onClick={(event) => handleClick(event, row)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={index}
            selected={isItemSelected}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={isItemSelected}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </TableCell>
            <TableCell align="left">{row}</TableCell>
            <TableCell align="left">{dataTable[row]?.trackNameVN}</TableCell>
            <TableCell align="center">{dataTable[row]?.trackNameCN}</TableCell>
            <TableCell align="left">{dataTable[row]?.SingerName}</TableCell>
            <TableCell align="center">{dataTable[row]?.UrlYoutube}</TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default TableCustomBody