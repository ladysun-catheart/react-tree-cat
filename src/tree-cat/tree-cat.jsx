import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TreeCatList from './tree-cat-list'
import { ActionDelete } from './tree-cat-action'

const deleteNode = (id, list) => {
  const finded = list.find(node => node.id === id)
  const listAux = finded ?
    list.filter(node => node.id !== id) :
    list.map(node => ({ ...node, children: deleteNode(id, node.children) }))
  return listAux
}

const setExpandNode = (id, expanded, list) => (list.map(node => {
  let nodeAux
  if (node.id === id) {
    nodeAux = { ...node, expanded }
  }
  else {
    nodeAux = { ...node }
    node.children = node.children ? setExpandNode(id, expanded, node.children) : []
  }
  return nodeAux
}))

const addInfoNodeList = (list) => (
  list.map((node) => ({
    expanded: true,
    ...node,
    children: node.children ? addInfoNodeList(node.children) : [],
  }))
)


const TreeCat = ({ nodeList }) => {
  const [nodeListAux, setNodeListAux] = useState(addInfoNodeList(nodeList))
  const onDelete = (id) => setNodeListAux(deleteNode(id, nodeListAux))
  const onClickExpand = (id, expanded) => {
    const listAux = setExpandNode(id, expanded, nodeListAux)
    setNodeListAux(setExpandNode(id, expanded, nodeListAux))
  }
  const actionList = [(id) => <ActionDelete key="delete" onDelete={() => onDelete(id)} />]
  return <TreeCatList nodeList={nodeListAux} onClickExpand={onClickExpand} actionList={actionList} />
}

TreeCat.propTypes = {
  nodeList: PropTypes.array.isRequired
}

export default TreeCat
