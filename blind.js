let allElements = document.querySelectorAll('*');
let buttonInc = document.querySelector('#blind_text_increment');
let buttonDec = document.querySelector('#blind_text_decrement');

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

function fontCounter(number, increment) {
  
  if (number < 6 && increment == true) {
    return +number + 2;
  }else if (number > 0 && increment == false) {
    return +number - 2;
  } else {
    return number
  }
}

buttonInc.addEventListener('click', ()=>{
  elementsFinder(allElements)

  localStorage.setItem('click', fontCounter(localStorage.getItem('click'), true));
})

buttonDec.addEventListener('click', ()=>{
  elementsFinder(allElements)
  if (!localStorage.getItem('click')) {
    localStorage.setItem('click', '0');
  }
  localStorage.setItem('click', fontCounter(localStorage.getItem('click'), false));
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