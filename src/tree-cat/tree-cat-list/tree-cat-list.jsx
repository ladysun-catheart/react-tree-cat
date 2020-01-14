import React from 'react'
import PropTypes from 'prop-types'
import TreeCatNode from '../tree-cat-node'

const TreeCatList = ({ nodeList, onClickExpand, actionList, onEdit }) => (
  <ul style={{ listStyleType: 'none', padding: '0 0 0 1.5rem', margin: 0, backgroundColor: 'lightPink', border: '1px solid deepPink' }}>
    {nodeList.map((node) => (
      <li key={node.id} style={{ padding: 0, margin: 0, backgroundColor: 'lemonChiffon' }}>
        <TreeCatNode
          {...node}
          onClickExpand={onClickExpand}
          actionList={actionList}
          onEdit={onEdit}
        />
      </li>
    ))}
  </ul>
)

TreeCatList.propTypes = {
  nodeList: PropTypes.array.isRequired,
  onClickExpand: PropTypes.func.isRequired,
  actionList: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default TreeCatList
