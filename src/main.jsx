import React, { useState } from 'react'
import Proptypes from 'prop-types'
import TreeCat from './tree-cat'

const Main = () => {
  const nodeList = [
    { key: 1, title: 'Node 01' },
    { key: 2, title: 'Node 02' },
  ]
  return (
    <TreeCat
      nodeList={nodeList}
    />
  )
}

export default Main
