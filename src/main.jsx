import React, { useState } from 'react'
import Proptypes from 'prop-types'
import TreeCat from './tree-cat'

const Main = () => {
  const nodeList = [
    {
      id: '1',
      title: 'Node',
      children: [
        { id: '1-1', title: 'Node' },
        { id: '1-2', title: 'Node', children: [{ id: '1-2-1', title: 'Node' }] },
      ],
    },
    { id: '2', title: 'Node' },
  ]
  return (
    <TreeCat
      nodeList={nodeList}
    />
  )
}

export default Main
