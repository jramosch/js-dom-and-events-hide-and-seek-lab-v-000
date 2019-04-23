function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; 1 < lis.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n.toString()
  }
}