import React from 'react'
import PropTypes from 'prop-types'
import TreeCatNode from '../tree-cat-node'

const TreeCatList = ({ nodeList, onClickExpand, actionList }) => (
  <ul>
    {nodeList.map((node) => (
      <li key={node.id}>
        <TreeCatNode
          {...node}
          onClickExpand={onClickExpand}
          actionList={actionList}
        />
      </li>
    ))}
  </ul>
)

TreeCatList.propTypes = {
  nodeList: PropTypes.array.isRequired,
  onClickExpand: PropTypes.func.isRequired,
  actionList: PropTypes.array.isRequired,
}

export default TreeCatList
