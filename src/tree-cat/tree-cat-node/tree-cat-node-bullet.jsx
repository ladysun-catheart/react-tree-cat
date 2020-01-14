import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TreeCatNodeBullet = ({ hasChildren, isExpanded, onClickExpand }) => (
  hasChildren ? (
    <button
      style={{ width: '1.5rem', height: '1.5rem', padding: 0, cursor: 'pointer' }}
      type="button"
      onClick={() => onClickExpand(!isExpanded)}
    >{isExpanded ? '-' : '+'}
    </button>
  ) : (
      <button
        style={{ width: '1.5rem', height: '1.5rem', padding: 0, cursor: 'pointer' }}
        type="button"
        disabled
      >.</button>
    )
)

TreeCatNodeBullet.propTypes = {
  hasChildren: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onClickExpand: PropTypes.func.isRequired,
}

export default TreeCatNodeBullet