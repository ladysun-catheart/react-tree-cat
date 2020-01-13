import React from 'react'
import PropTypes from 'prop-types'

const TreeCat = ({ nodeList }) => (
  <ul>
    {nodeList.map((node) => <li key={node.key}>{node.title}</li>)}
  </ul>
)

TreeCat.propTypes = { nodeList: PropTypes.array.isRequired }

export default TreeCat
