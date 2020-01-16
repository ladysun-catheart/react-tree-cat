import React, { useState } from 'react'
import Proptypes from 'prop-types'
import TreeCat from './tree-cat'

const Main = () => {
  const nodeList = [
    {
      id: '1',
      title: 'Patata',
      children: [
        { id: '1-1', title: 'Fritas' },
        { id: '1-2', title: 'Asadas', children: [{ id: '1-2-1', title: 'Especiadas' }] },
      ],
    },
    { id: '2', title: 'Pimientos' },
  ]
  return (
    <div style={{width: '30%', padding: '1rem', border: '2px solid black'}}>
      <TreeCat
        nodeList={nodeList}
      />
    </div>
  )
}

export default Main
