import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TreeCatList from '../tree-cat-list'

const TreeCatNode = ({ id, title, children, expanded, onClickExpand }) => {
  const hasChildren = (list) => list && list.length > 0
  const expandedIcon = (isExpanded) => isExpanded ? '-' : '+'
  return (
    <div>
      {hasChildren(children) ?
        (<button
          type="button"
          onClick={() => onClickExpand(id, !expanded)}
        >
          {expandedIcon(expanded)}
        </button>
        ) : null}
      {id}
      {title}
      {hasChildren(children) && expanded ? (
        <TreeCatList
          nodeList={children}
          onClickExpand={onClickExpand}
        />) : null
      }
    </div>
  )
}

TreeCatNode.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  onClickExpand: PropTypes.func.isRequired,
}

export default TreeCatNode
