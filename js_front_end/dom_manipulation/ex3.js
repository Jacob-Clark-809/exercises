function domTreeTracer(id) {
  let result = [];
  (function addSiblings(node) {
    result.push([].slice.call(node.parentElement.children).map(node => node.nodeName));

    if (node.getAttribute('id') !== '1') {
     addSiblings(node.parentElement);
    }
  })(document.getElementById(String(id)));

  return result;
}
