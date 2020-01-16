import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TreeCatNodeActions = ({ editable, actionList, onCancel, id }) => (
  <div style={{ display: 'flex', flex: '1', justifyContent: 'flex-end' }}>{
    editable ? (
      <button
        style={{ fontFamily: 'Retro Computer', fontSize: '0.6rem', cursor: 'pointer', cursor: 'pointer', border: 'none', color: 'white', backgroundColor: 'gray', fontWeight: 'bolder' }}
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