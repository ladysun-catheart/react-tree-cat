const deleteNode = (id, list) => {
  const finded = list.find(node => node.id === id)
  const listAux = finded ?
    list.filter(node => node.id !== id) :
    list.map(node => ({ ...node, children: deleteNode(id, node.children) }))
  return listAux
}

const setExpandNode = (id, expanded, list) => (list.map(node => {
  let nodeAux
  if (node.id === id) {
    nodeAux = { ...node, expanded }
  }
  else {
    nodeAux = { ...node }
    node.children = node.children ? setExpandNode(id, expanded, node.children) : []
  }
  return nodeAux
}))

const addInfoNodeList = (list) => (
  list.map((node) => ({
    expanded: true,
    ...node,
    children: node.children ? addInfoNodeList(node.children) : [],
  }))
)

const editNode = (id, value, list) => {
  const finded = list.find(node => node.id === id)
  const listAux = finded ?
    list.map(node => node.id === id ? {...node, title: value} : {...node}) :
    list.map(node => ({ ...node, children: editNode(id, value, node.children) }))
  return listAux
}

export {
  addInfoNodeList,
  setExpandNode,
  deleteNode,
  editNode,
}
