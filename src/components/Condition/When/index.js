import React, { Fragment } from 'react'

export default function When({ condition, children }) {
  if (condition === true) {
    return <Fragment>
      {children}
    </Fragment>
  } else {
    return (
      <Fragment>
      </Fragment>
    )
  }
}
