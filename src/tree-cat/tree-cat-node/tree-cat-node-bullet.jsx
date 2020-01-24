import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TreeCatNodeBullet = ({ hasChildren, isExpanded, onClickExpand }) => (
  hasChildren ? (
    <button
      className="treeCatListBulletExpand"
      type="button"
      onClick={() => onClickExpand(!isExpanded)}
    >{isExpanded ? '-' : '+'}
    </button>
  ) : (
      <button
        className="treeCatListBulletEmpty"
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