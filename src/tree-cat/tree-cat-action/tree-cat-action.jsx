import React from 'react'
import PropTypes from 'prop-types'

const TreeCatAction = ({ icon, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    style={{cursor: 'pointer'}}
  >
    {icon}
  </button>
)

TreeCatAction.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TreeCatAction
