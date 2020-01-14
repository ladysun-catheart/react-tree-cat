import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TreeCatList from '../tree-cat-list'

const TreeCatNode = ({ id, title, children, expanded, onClickExpand, actionList }) => {
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
      {actionList.map(action => action(id))}
      {hasChildren(children) && expanded ? (
        <TreeCatList
          nodeList={children}
          onClickExpand={onClickExpand}
          actionList={actionList}
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
  actionList: PropTypes.array.isRequired,
}

export default TreeCatNode
