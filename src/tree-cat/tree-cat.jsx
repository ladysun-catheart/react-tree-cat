import React from 'react'
import PropTypes from 'prop-types'
import TreeCatNode from './tree-cat-node'

const TreeCat = ({ nodeList }) => (
  <ul>
    {nodeList.map((node) => <li key={node.key}><TreeCatNode {...node} /></li>)}
  </ul>
)

TreeCat.propTypes = { nodeList: PropTypes.array.isRequired }

export default TreeCat
