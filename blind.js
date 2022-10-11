window.addEventListener('DOMContentLoaded', ()=> {
  let 
  blindRun = document.querySelector('#blind_run'),
  blindQuit = document.querySelector('#blind_quit'),
  buttonDefault = document.querySelector('#blind_styles_default'),
  dashboard = document.querySelector('#_blind__dashboard'),
  blind_icon = document.querySelector('._blind__dashboard__icon'),

  textZoomer = document.querySelector('input#blind_text_zoom'),
  zoomValueIndicator = document.querySelector('label[for="blind_text_zoom"] span'),
  textKerningInput = document.querySelector('#blind_text_kerning'),
  kerningValueIndicator = document.querySelector('label[for="blind_text_kerning"] span'),
  textWordSpacingInput = document.querySelector('#blind_text_word_spacing'),
  WordSpacingValueIndicator = document.querySelector('label[for="blind_text_word_spacing"] span'),
  textLineHeightInput = document.querySelector('#blind_text_line_height'),
  lineHeightValueIndicator = document.querySelector('label[for="blind_text_line_height"] span'),

  buttonImagesBW = document.querySelector('#blind_images_bw'),
  buttonImagesRemove = document.querySelector('#blind_images_remove'),
  buttonImagesDefault = document.querySelector('#blind_images_default'),

  buttonSchemeDefault = document.querySelector('#blind_scheme_default'),
  buttonSchemeDark = document.querySelector('#blind_scheme_dark'),
  buttonSchemeBlue = document.querySelector('#blind_scheme_blue'),
  buttonSchemeBrown = document.querySelector('#blind_scheme_brown'),
  buttonSchemeGreenBrown = document.querySelector('#blind_scheme_greenBrown'),

  textVoiceButton = document.querySelector('#voice_text'),

  allButtons = [textVoiceButton, textZoomer, zoomValueIndicator, textKerningInput, kerningValueIndicator, textWordSpacingInput, WordSpacingValueIndicator, textLineHeightInput, lineHeightValueIndicator, buttonDefault, buttonImagesBW, buttonImagesRemove, buttonImagesDefault, buttonSchemeDefault, buttonSchemeDark, buttonSchemeBlue, buttonSchemeBrown, buttonSchemeGreenBrown];
  
  function runBlind() {
    localStorage.setItem('_BLIND_start','true');
    document.body.classList.add('_BLIND_');
    textZoom(localStorage.getItem('_BLIND_fontZoomer'));
    textKerning(localStorage.getItem('_BLIND_kerning'));
    wordSpacing(localStorage.getItem('_BLIND_word-spaicing'));
    changeImage(localStorage.getItem('_BLIND_images') || 'display: none');
    changeColorScheme(checkOptionLS('#000', '_BLIND_textColor') , checkOptionLS('#fff', '_BLIND_backgroundColor'));
    voiceText(localStorage.getItem('_BLIND_voiceText'));
    switchButtons(true);
    blindRun.setAttribute('disabled', 'true');
    blindQuit.removeAttribute('disabled');
  }
  function quitBlind() {
    document.body.classList.remove('_BLIND_');
    resetToDefault();
    localStorage.removeItem('_BLIND_start');
    removeBlindStyles();
    zoomValueIndicator.textContent = localStorage.getItem('_BLIND_fontZoomer') || 100;
    kerningValueIndicator.textContent = localStorage.getItem('_BLIND_fontZoomer') || 0;
    WordSpacingValueIndicator.textContent = localStorage.getItem('_BLIND_word-spaicing') || 0;
    switchButtons(false);
    voiceText(false);
    changeImage('default');
    localStorage.removeItem('_BLIND_images');
    blindRun.removeAttribute('disabled');
    blindQuit.setAttribute('disabled', 'true');
    dashboard.classList.remove('__open');
  }

  function resetToDefault() {
    changeImage('display: none');
    localStorage.removeItem('_BLIND_textColor');
    localStorage.removeItem('_BLIND_backgroundColor');
    localStorage.removeItem('_BLIND_fontZoomer');
    localStorage.removeItem('_BLIND_kerning');
    localStorage.removeItem('_BLIND_word-spaicing');
    localStorage.removeItem('_BLIND_line-height');
    removeBlindStyles();
    voiceText(false);
    textZoomer.value = localStorage.getItem('_BLIND_fontZoomer') || 100;
    zoomValueIndicator.textContent = localStorage.getItem('_BLIND_fontZoomer') || 100;
    textKerningInput.value = localStorage.getItem('_BLIND_kerning') || 0;
    kerningValueIndicator.textContent = localStorage.getItem('_BLIND_kerning') || 0;
    textWordSpacingInput.value = localStorage.getItem('_BLIND_word-spaicing') || 0;
    WordSpacingValueIndicator.textContent = localStorage.getItem('_BLIND_word-spaicing') || 0;
    textLineHeightInput.value = localStorage.getItem('_BLIND_line-height') || 100;
    lineHeightValueIndicator.textContent = localStorage.getItem('_BLIND_line-height') || 100;
    changeColorScheme(checkOptionLS('#000', '_BLIND_textColor') , checkOptionLS('#fff', '_BLIND_backgroundColor'));
  }

  function switchButtons(enable) {
    if (!enable) {
      allButtons.forEach(button => {
        button.setAttribute('disabled', 'true');
      });
    } else {
      allButtons.forEach(button => {
        button.removeAttribute('disabled');
      });
    }
  }

  function switchDashboard() {
    dashboard.classList.toggle('__open');
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

  function removeBlindStyles() {
    let allBlindStyles = document.querySelectorAll('style._BLIND_style');
    allBlindStyles.forEach(style => {
      style.remove();
    });
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

  function textKerning(value) {
    createStyleTag('*', {
      render: function render(){
        return `
        letter-spacing: ${value}px !important;
        `
      }
    });
  }

  function wordSpacing(value) {
    createStyleTag('*', {
      render: function render(){
        return `
        word-spacing: ${value}px !important;
        `
      }
    });
  }

  function lineHeight(value) {
    createStyleTag('*', {
      render: function render(){
        return `
        line-height: ${value}% !important;
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

  function invertSVG(bool) {
    let allSVG = document.querySelectorAll('svg');
    allSVG.forEach(svg => {
      if (bool) {
        if (!svg.classList.contains('_BLIND_no_invert')) {
          svg.style.filter = 'invert(1)'
        }
      } else {
        svg.style.filter = 'invert(0)'
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

  function robotVoice(e) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(e.target.textContent));
  }
  function voiceText(bool) {
    if (bool) {
      document.addEventListener('click', robotVoice);
      textVoiceButton.setAttribute('data-voice', 'true');
      localStorage.setItem('_BLIND_voiceText','true');
    } else {
      document.removeEventListener("click", robotVoice);
      textVoiceButton.removeAttribute('data-voice');
      localStorage.removeItem('_BLIND_voiceText');
    }
  }
  
localStorage.setItem('copyright', `title: Универсальный плагин для сайтов "Версия для слабовидящих",
author: Ruslan Svetlichnyy,
rep: https://github.com/coopwork/blind.js`);

  // LISTENERS
  zoomValueIndicator.textContent = localStorage.getItem('_BLIND_fontZoomer') || 100;
  textZoomer.value = localStorage.getItem('_BLIND_fontZoomer') || 100;
  textZoomer.addEventListener('click',()=>{
    textZoom(textZoomer.value);
    localStorage.setItem('_BLIND_fontZoomer', textZoomer.value);
    zoomValueIndicator.textContent = textZoomer.value;
  });
  kerningValueIndicator.textContent = localStorage.getItem('_BLIND_kerning') || 0;
  textKerningInput.value = localStorage.getItem('_BLIND_kerning') || 0;
  textKerningInput.addEventListener('click',()=>{
    textKerning(textKerningInput.value);
    localStorage.setItem('_BLIND_kerning', textKerningInput.value);
    kerningValueIndicator.textContent = textKerningInput.value;
  });
  WordSpacingValueIndicator.textContent = localStorage.getItem('_BLIND_word-spaicing') || 0;
  textWordSpacingInput.value = localStorage.getItem('_BLIND_word-spaicing') || 0;
  textWordSpacingInput.addEventListener('click',()=>{
    wordSpacing(textWordSpacingInput.value);
    localStorage.setItem('_BLIND_word-spaicing', textWordSpacingInput.value);
    WordSpacingValueIndicator.textContent = textWordSpacingInput.value;
  });
  lineHeightValueIndicator.textContent = localStorage.getItem('_BLIND_line-height') || 100;
  textLineHeightInput.value = localStorage.getItem('_BLIND_word-spaicing') || 100;
  textLineHeightInput.addEventListener('click',()=>{
    lineHeight(textLineHeightInput.value);
    localStorage.setItem('_BLIND_line-height', textLineHeightInput.value);
    lineHeightValueIndicator.textContent = textLineHeightInput.value;
  });

  blind_icon.addEventListener('click', switchDashboard);
  buttonSchemeDefault.addEventListener('click', ()=>{
    localStorage.removeItem('_BLIND_textColor');
    localStorage.removeItem('_BLIND_backgroundColor');
    changeColorScheme(checkOptionLS('#000', '_BLIND_textColor') , checkOptionLS('#fff', '_BLIND_backgroundColor'));
    invertSVG();
  });
  buttonSchemeDark.addEventListener('click', ()=>{
    localStorage.setItem('_BLIND_textColor', '#fff');
    localStorage.setItem('_BLIND_backgroundColor', '#000');
    changeColorScheme(checkOptionLS('#fff', '_BLIND_textColor') , checkOptionLS('#000', '_BLIND_backgroundColor'));
    invertSVG(true);
  });
  buttonSchemeBlue.addEventListener('click', ()=>{
    localStorage.setItem('_BLIND_textColor', '#063462');
    localStorage.setItem('_BLIND_backgroundColor', '#9DD1FF');
    changeColorScheme(checkOptionLS('#063462', '_BLIND_textColor') , checkOptionLS('#9DD1FF', '_BLIND_backgroundColor'));
    invertSVG();
  });
  buttonSchemeBrown.addEventListener('click', ()=>{
    localStorage.setItem('_BLIND_textColor', '#87755F');
    localStorage.setItem('_BLIND_backgroundColor', '#F7F3D6');
    changeColorScheme(checkOptionLS('#87755F', '_BLIND_textColor') , checkOptionLS('#F7F3D6', '_BLIND_backgroundColor'));
    invertSVG();
  });
  buttonSchemeGreenBrown.addEventListener('click', ()=>{
    localStorage.setItem('_BLIND_textColor', '#A9DD38');
    localStorage.setItem('_BLIND_backgroundColor', '#3B2716');
    changeColorScheme(checkOptionLS('#A9DD38', '_BLIND_textColor') , checkOptionLS('#3B2716', '_BLIND_backgroundColor'));
    invertSVG();
  });
  buttonImagesBW.addEventListener('click', ()=>{
    changeImage('filter: saturate(0%)');
  });
  buttonImagesRemove.addEventListener('click', ()=>{
    changeImage('display: none');
  });
  buttonImagesDefault.addEventListener('click', ()=>{
    changeImage('default');
  });
  textVoiceButton.addEventListener('click', ()=>{
    if (!textVoiceButton.getAttribute('data-voice')) {
      voiceText(true);
    } else {
      voiceText(false);
    }
  });
  buttonDefault.addEventListener('click', resetToDefault);
  blindRun.addEventListener('click', ()=>{
    runBlind();
    dashboard.classList.add('__open');
  });
  blindQuit.addEventListener('click', quitBlind);
  
  if (localStorage.getItem('_BLIND_start')) {
    runBlind();
  } else {
    switchButtons(false);
    blindQuit.setAttribute('disabled', 'true');
  }

});
