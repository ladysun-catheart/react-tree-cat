import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TreeCatList from './tree-cat-list'

const TreeCat = ({ nodeList }) => {
  const addInfoNodeList = (list) => (
    list.map((node) => ({
      expanded: true,
      ...node,
      children: node.children ? addInfoNodeList(node.children) : []
    }))
  )
  const [nodeListAux, setNodeListAux] = useState(addInfoNodeList(nodeList))
  const setExpandNode = (id, expanded, list) => (list.map(node => {
    let nodeAux
    if (node.id === id) {
      nodeAux = { ...node, expanded }
    }
    else {
      nodeAux = { ...node }
      if(node.children) {
        const childrenAux = setExpandNode(id, expanded, node.children)
        node.children = childrenAux
      }
    }
    return nodeAux
  }))
  const onClickExpand = (id, expanded) => {
    const listAux = setExpandNode(id, expanded, nodeListAux)
    setNodeListAux(setExpandNode(id, expanded, nodeListAux))
  }
  return <TreeCatList nodeList={nodeListAux} onClickExpand={onClickExpand} />
}

TreeCat.propTypes = {
  nodeList: PropTypes.array.isRequired
}

export default TreeCat
