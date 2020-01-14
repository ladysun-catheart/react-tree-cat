import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TreeCatList from '../tree-cat-list'

const TreeCatNode = ({ id, title, children, expanded, onClickExpand, actionList, onEdit }) => {
  const [editable, setEditable] = useState(false)
  const [value, setValue] = useState(title)
  const hasChildren = (list) => list && list.length > 0
  const expandedIcon = (isExpanded) => isExpanded ? '-' : '+'
  const onSaveEdit = (value, editable) => {
    setEditable(editable)
    onEdit(id, value)
  }
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
      {editable ? <input value="title" value={value} onChange={(e) => setValue(e.target.value)} onBlur={() => onSaveEdit(value, !editable)} autoFocus /> : <span onClick={() => setEditable(!editable)} style={{ cursor: "text" }}>{title}</span> }
      {editable ? <button onClick={() => setEditable(false)}>❌</button> : actionList.map(action => action(id))}
      {hasChildren(children) && expanded ? (
        <TreeCatList
          nodeList={children}
          onClickExpand={onClickExpand}
          actionList={actionList}
          onEdit={onEdit}
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
  onEdit: PropTypes.func.isRequired,
}

export default TreeCatNode
