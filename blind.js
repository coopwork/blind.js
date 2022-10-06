let allElements = document.querySelectorAll('*');
let buttonUp = document.querySelector('#btn');

// console.log('all elements:', allElements);

function elementsFinder(parentElement) {
  parentElement.forEach(element => {
    // console.log(element, getFontSize(element)[1], getAttribute(element, 'style'));
    if (getFontSize(element)[1] > 0 && element.textContent) {
      setAttribute(element, 'style', `font-size: ${getFontSize(element)[1]-0}px !important;`);
    }
  });
}
function getAttribute(element, attribute) {
  return element.getAttribute(attribute);
}

function setAttribute(element, attribute, option) {
  return element.setAttribute(attribute, option);
}

function getFontSize(element){
  element= element || document.body;
  var who= document.createElement('div');
 
  who.style.cssText='display:inline-block; padding:0; line-height:1; position:absolute; visibility:hidden; font-size:1em';
 
  who.appendChild(document.createTextNode('M'));
  element.appendChild(who);
  var fontSize= [who.offsetWidth, who.offsetHeight];
  element.removeChild(who);
  return fontSize;
}

buttonUp.addEventListener('click', ()=>{
  elementsFinder(allElements)
})

function createStyleTag() {
  let styleTag = document.createElement('style');
  styleTag.textContent = `
    *,
    *::before,
    *::after
    {
      color: #fff !important;
      background: #000 !important;
    }
  `
  document.body.appendChild(styleTag);
}
// createStyleTag();
elementsFinder(allElements);