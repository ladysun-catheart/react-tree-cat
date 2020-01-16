import React from 'react'
import PropTypes from 'prop-types'

const TreeCatAction = ({ icon, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    style={{fontFamily: 'Retro Computer', fontSize: '0.6rem', cursor: 'pointer', cursor: 'pointer', border: 'none', color: 'white', backgroundColor: 'gray', fontWeight: 'bolder'}}
  >
    {icon}
  </button>
)

TreeCatAction.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TreeCatAction
