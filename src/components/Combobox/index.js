import React from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const ComboBox = ({
  id = '',
  options = [],
  label = '',
  variant = 'outlined',
  width = 300,
  onChange,
  value
}) => {

  return (
    <Autocomplete
      id={id}
      options={options}
      getOptionLabel={(option) => option?.label}
      style={{ width: width }}
      value={value}
      onChange={onChange}
      getOptionSelected={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant={variant}
        />
      )}
    />
  )
}

export default ComboBox
