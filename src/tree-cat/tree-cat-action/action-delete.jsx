import React from 'react'
import PropTypes from 'prop-types'
import TreeCatAction from './tree-cat-action'

const ActionDelete = ({ onDelete }) => (
  <TreeCatAction
    icon="🗑️"
    onClick={onDelete}
  />
)

ActionDelete.propTypes = {
  onDelete: PropTypes.func.isRequired,
}

export default ActionDelete
