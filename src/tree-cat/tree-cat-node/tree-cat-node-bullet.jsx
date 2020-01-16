import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TreeCatNodeBullet = ({ hasChildren, isExpanded, onClickExpand }) => (
  hasChildren ? (
    <button
      style={{ width: '1.2rem', padding: 0, cursor: 'pointer', border: 'none', marginRight: '0.5rem', color: 'white', backgroundColor: 'black', fontWeight: 'bolder' }}
      type="button"
      onClick={() => onClickExpand(!isExpanded)}
    >{isExpanded ? '-' : '+'}
    </button>
  ) : (
      <button
        style={{ width: '1.2rem', padding: 0, border: 'none', marginRight: '0.5rem', backgroundColor: 'black' }}
        type="button"
        disabled
      ></button>
    )
)

TreeCatNodeBullet.propTypes = {
  hasChildren: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onClickExpand: PropTypes.func.isRequired,
}

export default TreeCatNodeBullet