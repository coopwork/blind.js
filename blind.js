let 
blindRun = document.querySelector('#blind_run'),
blindQuit = document.querySelector('#blind_quit'),
allElements = document.querySelectorAll('*'),
textZoomer = document.querySelector('#blind_text_zoom'),
buttonDefault = document.querySelector('#blind_styles_default'),
buttonImagesBW = document.querySelector('#blind_images_bw'),
buttonImagesRemove = document.querySelector('#blind_images_remove'),
buttonImagesDefault = document.querySelector('#blind_images_default'),
buttonSchemeDefault = document.querySelector('#blind_scheme_default'),
buttonSchemeDark = document.querySelector('#blind_scheme_dark'),
buttonSchemeBlue = document.querySelector('#blind_scheme_blue'),
buttonSchemeBrown = document.querySelector('#blind_scheme_brown'),
buttonSchemeGreenBrown = document.querySelector('#blind_scheme_greenBrown');

function runBlind() {
  localStorage.setItem('_BLIND_start','true');
  document.body.classList.add('_BLIND_');
  textZoom(localStorage.getItem('_BLIND_fontZoomer'));
  changeImage(localStorage.getItem('_BLIND_images'));
  changeColorScheme(checkOptionLS('#000', '_BLIND_textColor') , checkOptionLS('#fff', '_BLIND_backgroundColor'));
}
function quitBlind() {
  resetToDefault();
  localStorage.removeItem('_BLIND_start');
  let allBlindStyles = document.querySelectorAll('style._BLIND_style');
  allBlindStyles.forEach(style => {
    style.remove();
  });
}

function getAttribute(element, attribute) {
  return element.getAttribute(attribute);
}

function setAttribute(element, attribute, option) {
  let prevProps = element.getAttribute(attribute) || '';
  return element.setAttribute(attribute, prevProps + option);
}

function createStyleTag(tag, styles) {
  let styleTag = document.createElement('style');
  styleTag.classList.add('_BLIND_style');
  styleTag.textContent = `
    ${tag},
    ${tag}::before,
    ${tag}::after{
      ${styles.render()}
    }
  `
  document.body.appendChild(styleTag);
}

function checkOptionLS(defaultValue, getValue) {
  let value;
  if (localStorage.getItem(getValue)) {
    return value = localStorage.getItem(getValue);
  } else {
    return value = defaultValue;
  }
}

function textZoom(value) {
  createStyleTag('*', {
    render: function render(){
      return `
      font-size: ${value}% !important;
      `
    }
  });
}

function changeColorScheme(color = '#000', background = '#fff') {
  createStyleTag('*', {
    color,
    background,
    render: function render(){
      return `
      color: ${this.color} !important;
      background: ${this.background} !important;
      `
    }
  });
}

function changeImage(change) {
  if (change) {
    let allImages = document.querySelectorAll('img');
    localStorage.setItem('_BLIND_images', change);
    allImages.forEach(element => {
      element.setAttribute('style', change);
    });
  }
}

function resetToDefault() {
  changeImage('default');
  localStorage.removeItem('_BLIND_textColor');
  localStorage.removeItem('_BLIND_backgroundColor');
  localStorage.removeItem('_BLIND_images');
  localStorage.removeItem('_BLIND_fontZoomer');
  changeColorScheme(checkOptionLS('#000', '_BLIND_textColor') , checkOptionLS('#fff', '_BLIND_backgroundColor'));
  textZoomer.value = localStorage.getItem('_BLIND_fontZoomer') || 100;
}

textZoomer.value = localStorage.getItem('_BLIND_fontZoomer') || 100;
textZoomer.addEventListener('click',()=>{
  textZoom(textZoomer.value);
  localStorage.setItem('_BLIND_fontZoomer', textZoomer.value);
});
buttonSchemeDefault.addEventListener('click', ()=>{
  localStorage.removeItem('_BLIND_textColor');
  localStorage.removeItem('_BLIND_backgroundColor');
  changeColorScheme(checkOptionLS('#000', '_BLIND_textColor') , checkOptionLS('#fff', '_BLIND_backgroundColor'));
});
buttonSchemeDark.addEventListener('click', ()=>{
  localStorage.setItem('_BLIND_textColor', '#fff');
  localStorage.setItem('_BLIND_backgroundColor', '#000');
  changeColorScheme(checkOptionLS('#fff', '_BLIND_textColor') , checkOptionLS('#000', '_BLIND_backgroundColor'));
});
buttonSchemeBlue.addEventListener('click', ()=>{
  localStorage.setItem('_BLIND_textColor', '#063462');
  localStorage.setItem('_BLIND_backgroundColor', '#9DD1FF');
  changeColorScheme(checkOptionLS('#063462', '_BLIND_textColor') , checkOptionLS('#9DD1FF', '_BLIND_backgroundColor'));
});
buttonSchemeBrown.addEventListener('click', ()=>{
  localStorage.setItem('_BLIND_textColor', '#87755F');
  localStorage.setItem('_BLIND_backgroundColor', '#F7F3D6');
  changeColorScheme(checkOptionLS('#87755F', '_BLIND_textColor') , checkOptionLS('#F7F3D6', '_BLIND_backgroundColor'));
});
buttonSchemeGreenBrown.addEventListener('click', ()=>{
  localStorage.setItem('_BLIND_textColor', '#A9DD38');
  localStorage.setItem('_BLIND_backgroundColor', '#3B2716');
  changeColorScheme(checkOptionLS('#A9DD38', '_BLIND_textColor') , checkOptionLS('#3B2716', '_BLIND_backgroundColor'));
});
buttonImagesBW.addEventListener('click', ()=>{
  changeImage('filter: saturate(0%)');
});
buttonImagesRemove.addEventListener('click', ()=>{
  changeImage('display: none');
});
buttonImagesDefault.addEventListener('click', ()=>{
  changeImage('default');
  localStorage.removeItem('_BLIND_images');
});
buttonDefault.addEventListener('click', resetToDefault);
blindRun.addEventListener('click', runBlind);
blindQuit.addEventListener('click', quitBlind);


if (localStorage.getItem('_BLIND_start')) {
  runBlind();
}


