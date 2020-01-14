import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TreeCatList from '../tree-cat-list'
import TreeCatNodeActions from './tree-cat-node-actions'
import TreeCatNodeLabel from './tree-cat-node-label'

const TreeCatNode = ({ id, title, children, expanded, onClickExpand, actionList, onEdit }) => {
  const [editable, setEditable] = useState(false)
  const [value, setValue] = useState(title)
  const expandedIcon = (isExpanded) => isExpanded ? '-' : '+'
  const onSaveEdit = (value, editable) => {
    setEditable(editable)
    onEdit(id, value)
  }
  return (
    <div>
      {children.length > 0 ? (
        <button
          type="button"
          onClick={() => onClickExpand(id, !expanded)}
        >{expandedIcon(expanded)}
        </button>
      ) : null}
      <TreeCatNodeLabel
        editable={editable}
        value={value}
        onChangeValue={setValue}
        onSaveEdit={onSaveEdit}
        onClickLabel={setEditable}
      />
      <TreeCatNodeActions
        editable={editable}
        actionList={actionList}
        onCancel={() => setEditable(false)} id={id}
      />
      {children.length > 0 && expanded ? (
        <TreeCatList
          nodeList={children}
          onClickExpand={onClickExpand}
          actionList={actionList}
          onEdit={onEdit}
        />) : null}
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
