import React from 'react'

const NoMatch = ({ location: { pathname }}) => (
  <h2>404 No Route Matches {pathname}</h2>
)

export default NoMatch