import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TreeCatList from './tree-cat-list'
import {
  ActionDelete,
} from './tree-cat-action'
import {
  addInfoNodeList,
  setExpandNode,
  deleteNode,
} from './utils'

const TreeCat = ({ nodeList }) => {
  const [nodeListAux, setNodeListAux] = useState(addInfoNodeList(nodeList))
  const onDelete = (id) => setNodeListAux(deleteNode(id, nodeListAux))
  const onClickExpand = (id, expanded) => {
    const listAux = setExpandNode(id, expanded, nodeListAux)
    setNodeListAux(setExpandNode(id, expanded, nodeListAux))
  }
  const actionList = [
    (id) => <ActionDelete key="delete" onDelete={() => onDelete(id)} />,
  ]
  return (
    <TreeCatList
      nodeList={nodeListAux}
      onClickExpand={onClickExpand}
      actionList={actionList}
    />
  )
}

TreeCat.propTypes = {
  nodeList: PropTypes.array.isRequired
}

export default TreeCat
