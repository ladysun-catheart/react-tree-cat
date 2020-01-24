import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TreeCatNodeActions = ({ editable, actionList, onCancel, id }) => (
  <div className="treeCatListActions">{
    editable ? (
      <button
        className="treeCatListActionsBtn"
        onClick={onCancel}
      >X
    </button>
    ) :
      actionList.map(action => action(id))
  }</div>
)

TreeCatNodeActions.propTypes = {
  editable: PropTypes.bool.isRequired,
  actionList: PropTypes.array.isRequired,
  onCancel: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

export default TreeCatNodeActions