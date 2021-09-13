import React, { useState } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { TableSortLabel } from '@material-ui/core'

const MSortTable = (props) => {
  const { rows, columns, stickyHeader = true, defaultSort } = props
  const [orderBy, setOrderBy] = useState(defaultSort)
  const [order, setOrder] = useState('desc')

  const createSortHandler = (field) => {
    field === orderBy
      ? setOrder(order === 'asc' ? 'desc' : 'asc')
      : setOrderBy(field)
  }

  const stableSort = (array) => {
    const stabilizedThis = array.map((el) => el)
    stabilizedThis.sort((a, b) => {
      let f, s
      f = a[orderBy]===null || a[orderBy] === '' ? 0xffff: a[orderBy]
      s = b[orderBy] === null || b[orderBy] === '' ? 0xffff: b[orderBy]
      return order === 'asc' ? (f > s ? 1 : -1) : (s > f ? 1: -1)
    })
    return stabilizedThis.map((el) => el)
  }
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader={stickyHeader}>
        <TableHead>
          <TableRow style={{ zIndex: 1 }}>
            {columns.map(
              (column) =>
                column.header && (
                  <TableCell
                    key={column.key}
                    align={column.align}
                    width={column.width}
                    style={{ fontSize: '16px', fontWeight: 'bold' }}
                  >
                    <TableSortLabel
                      active={orderBy === column.key}
                      direction={orderBy === column.key ? order : 'asc'}
                      onClick={() => createSortHandler(column.key)}
                    >
                      {column.header}
                    </TableSortLabel>
                  </TableCell>
                ),
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(rows).map((row, index) => (
            <TableRow key={row.id || index}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}

          {!rows.length && (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                align='center'
              >
                No records found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MSortTable
