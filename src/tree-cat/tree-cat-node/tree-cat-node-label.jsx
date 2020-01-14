import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TreeCatNodeLabel = ({ editable, value, onChangeValue, onSaveEdit, onClickLabel }) => (
  editable ? (
    <input
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
      onBlur={() => onSaveEdit(value, !editable)}
      autoFocus
    />
  ) : (
      <span
        onClick={() => onClickLabel(!editable)}
        style={{ cursor: "text" }}
      >{value}
      </span>
    )
)

TreeCatNodeLabel.propTypes = {
  editable: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  onSaveEdit: PropTypes.func.isRequired,
  onClickLabel: PropTypes.func.isRequired,
}

export default TreeCatNodeLabel