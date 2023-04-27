/*
Start with [body, [child1, child2, ...]]
For each child map to [child1, [grandchild1, grandchild2, ...]]
Repeat with grandchildren until no more children, i.e. [grandchild1, []]
*/

function nodesToArr() {
  function pairWithChildren(node) {
    return [node.nodeName, Array.from(node.children)];
  }

  let dom = (function convertArrayItems(array) {
    return array.map(item => {
      if (Array.isArray(item)) {
        return convertArrayItems(item);
      } else if (item instanceof Node) {
        return convertArrayItems(pairWithChildren(item));
      } else {
        return item;
      }
    });
  })(pairWithChildren(document.body));

  return dom;
}