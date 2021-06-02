import React, { Fragment } from "react"
import {
  IconButton,
  lighten,
  makeStyles,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core"
import clsx from "clsx"
import DeleteIcon from "@material-ui/icons/Delete"
import FilterListIcon from "@material-ui/icons/FilterList"

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}))

const TableCustomToolbar = (props) => {
  const classes = useToolbarStyles()
  const { numSelected } = props
  const handleDelete = () => {}

  return (
    <Fragment>
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            MUSIC
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </Fragment>
  )
}

export default TableCustomToolbar
