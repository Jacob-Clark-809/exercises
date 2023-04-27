function sliceTree(start, end) {
  let startElement = document.getElementById(start);
  let endElement = document.getElementById(end);
  if (!(startElement && endElement)) {
    return undefined;
  } else if (!startElement.querySelector(`#${numberEscaper(end)}`)) {
    return undefined;
  }

  let result = [];
  (function findRoute(element) {
    result.push(element.tagName);
    if (element.getAttribute('id') === String(end)) {
      return;
    }

    let children = Array.from(element.children);
    let nextElement = children.find(element => {
      return element.querySelector(`#${numberEscaper(end)}`) ||
             element.getAttribute('id') === String(end);
    });
    findRoute(nextElement);
  })(startElement);

  return result;
}

function numberEscaper(num) {
  let digits = String(num).split('').map(Number);
  return digits.map(digit => '\\3' + String(digit)).join('');
}
