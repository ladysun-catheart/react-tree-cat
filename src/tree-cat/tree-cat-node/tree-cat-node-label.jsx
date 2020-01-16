import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TreeCatNodeLabel = ({ editable, value, onChangeValue, onSaveEdit, onClickLabel }) => (
  editable ? (
    <input
      value={value}
      className="treeCatListLi"
      style={{border: 'none', fontFamily: 'Retro Computer', display: 'block'}}
      onChange={(e) => onChangeValue(e.target.value)}
      onBlur={() => onSaveEdit(value, !editable)}
      autoFocus
    />
  ) : (
      <span
        style={{ fontFamily: 'Retro Computer', cursor: "text" }}
        onClick={() => onClickLabel(!editable)}
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