import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TreeCatNodeActions = ({ editable, actionList, onCancel, id }) => (
  editable ? (
    <button
      onClick={onCancel}
    >❌
    </button>
  ) :
    actionList.map(action => action(id))
)

TreeCatNodeActions.propTypes = {
  editable: PropTypes.bool.isRequired,
  actionList: PropTypes.array.isRequired,
  onCancel: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

export default TreeCatNodeActions