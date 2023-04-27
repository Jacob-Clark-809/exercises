function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);
  if (!validNodes(node1, node2)) {
    return undefined;
  }

  node1.parentElement.replaceChild(node2.cloneNode(true), node1);
  node2.parentElement.replaceChild(node1.cloneNode(true), node2);
}

function validNodes(node1, node2) {
  return (node1 && node2) &&
         (node1 !== node2) &&
         (!node1.contains(node2)) &&
         (!node2.contains(node1));
}