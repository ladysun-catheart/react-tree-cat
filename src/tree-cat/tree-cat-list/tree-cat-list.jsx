import React from 'react'
import PropTypes from 'prop-types'
import TreeCatNode from '../tree-cat-node'

const TreeCatList = ({ nodeList, onClickExpand }) => (
  <ul>
    {nodeList.map((node) => (
      <li key={node.id}>
        <TreeCatNode
          {...node}
          onClickExpand={onClickExpand}
        />
      </li>
    ))}
  </ul>
)

TreeCatList.propTypes = {
  nodeList: PropTypes.array.isRequired,
  onClickExpand: PropTypes.func.isRequired,
}

export default TreeCatList
