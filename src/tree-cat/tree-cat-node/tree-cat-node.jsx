import React from 'react'
import PropTypes from 'prop-types'

const TreeCatNode = ({ key, title }) => (
  <div>
    {key}
    {title}
  </div>
)

TreeCatNode.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default TreeCatNode
