import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TreeCatNodeBullet = ({ hasChildren, isExpanded, onClickExpand }) => (
  hasChildren ? (
    <button
      type="button"
      onClick={() => onClickExpand(!isExpanded)}
    >{isExpanded ? '-' : '+'}
    </button>
  ) : null
)

TreeCatNodeBullet.propTypes = {
  hasChildren: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onClickExpand: PropTypes.func.isRequired,
}

export default TreeCatNodeBullet