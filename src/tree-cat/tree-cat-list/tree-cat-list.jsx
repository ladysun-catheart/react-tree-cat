import React from 'react'
import PropTypes from 'prop-types'
import TreeCatNode from '../tree-cat-node'

const TreeCatList = ({ nodeList, onClickExpand, actionList, onEdit }) => (
  <ul>
    {nodeList.map((node) => (
      <li key={node.id}>
        <TreeCatNode
          {...node}
          onClickExpand={onClickExpand}
          actionList={actionList}
          onEdit={onEdit}
        />
      </li>
    ))}
  </ul>
)

TreeCatList.propTypes = {
  nodeList: PropTypes.array.isRequired,
  onClickExpand: PropTypes.func.isRequired,
  actionList: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default TreeCatList
