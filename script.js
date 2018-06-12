// Initialize Firebase
const config = {
  apiKey: "AIzaSyCR1x2fhI8w32yz_74KeAQjnvknhZfsqzs",
  authDomain: "contactform-d9287.firebaseapp.com",
  databaseURL: "https://contactform-d9287.firebaseio.com",
  projectId: "contactform-d9287",
  storageBucket: "contactform-d9287.appspot.com",
  messagingSenderId: "769566872950"
};
firebase.initializeApp(config);

// Reference messages collection
const messagesRef = firebase.database().ref('messages');

/*-----Global variables-----*/
const openSlideButton = document.getElementById('menu-small')
const closeSlideButton = document.getElementById('close-slide')
const sideNavLink = document.getElementsByClassName('side-nav-link')
const cardSummary = document.getElementsByClassName('card-summary')
const summaryButton = document.getElementsByClassName('card-summary-btn')
const cardDetail = document.getElementsByClassName('card-detail')
const closeCardButton = document.getElementsByClassName('card-close-btn')
const contactButton = document.getElementsByClassName('contact-btn')
const designButton = document.getElementsByClassName('design-btn')
const closeForm = document.getElementById('close-form')
const captchaEndpoint = "https://elbwov6546.execute-api.us-east-2.amazonaws.com/prod/recaptcha-ms-aws"

/*-----Global functions-----*/
const pageReload = _ => {
  location.reload()
}

/*-----Navigation functions-----*/
const removeActiveClass = _ => {
  if (document.querySelector('.active')) {
    document.querySelector('.active').classList.remove('active')
  }
}

const activeSelection = (item) => {
  return () => {
    if (document.querySelector(`.active`)) {
      removeActiveClass()
    }

    item.classList.add('active')
  }
}

const scrollspy = () => {
  'use strict';
  const section = document.querySelectorAll('section');
  const sections = {};
  let i = 0;

  section.forEach.call(section, (e) => {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = _ => {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (document.documentElement.scrollTop === document.body.scrollTop) {
        removeActiveClass()
      } else if (sections[i] <= scrollPosition) {
          if (document.querySelector(`.active`)) {
            removeActiveClass()
          }
        document.querySelector('a[href*=' + i + ']').classList.add('active')
      }
    }
  }
}
scrollspy();

for (let i = 0; i < document.getElementsByClassName('nav-link').length; i++) {
  let element = document.getElementsByClassName('nav-link')[i]
  element.addEventListener("click", activeSelection(element))
}

for (let i = 0; i < document.getElementsByClassName('option-link').length; i++) {
  let element = document.getElementsByClassName('option-link')[i]
  element.addEventListener("click", activeSelection(element))
}

for (let i = 0; i < document.getElementsByClassName('brand').length; i++) {
  let element = document.getElementsByClassName('brand')[i]
  element.addEventListener("click", removeActiveClass)
}


/*-----Side navigation functions-----*/
const openSlideMenu = () => {
  document.getElementById('side-menu').style.width = '250px';
}

const closeSlideMenu = () => {
  document.getElementById('side-menu').style.width = '0';
  removeActiveClass()
}

openSlideButton.addEventListener("click", openSlideMenu);
closeSlideButton.addEventListener("click", closeSlideMenu);

for (let i = 0; i < sideNavLink.length; i++) {
  sideNavLink[i].addEventListener("click", closeSlideMenu)
}

// Font options
const fontChange = (heading, body) => {
  return () => {
    for (let i = 0; i < document.querySelectorAll('h1').length; i++) {
      document.querySelectorAll('h1')[i].style.fontFamily = heading
    }
    for (let i = 0; i < document.getElementsByClassName('section-title').length; i++) {
      document.getElementsByClassName('section-title')[i].style.fontFamily = heading
    }
    for (let i = 0; i < document.getElementsByClassName('section-subtitle').length; i++) {
      document.getElementsByClassName('section-subtitle')[i].style.fontFamily = heading
    }
    for (let i = 0; i < document.getElementsByClassName('nav-link').length; i++) {
      document.getElementsByClassName('nav-link')[i].style.fontFamily = heading
    }
    
    document.querySelector('body').style.fontFamily = body
    document.getElementById('subtitle').style.fontFamily = body
  }
}

// Color scheme options
//Assign colors to palette
var colorPaletteDefault = {
  "--dark-primary-color": "#31302e",
  "--default-primary-color": "#3b5998",
  "--light-primary-color": "#C5CAE9",
  "--text-primary-color": "#f2f2f2",
  "--accent-color": "#3b5998",
  "--primary-bg-color": "#f4f4f4",
  "--primary-text-color": "#212121",
  "--secondary-text-color": "#757575",
  "--divider-color": "#31302e",
  "--overlay-bg-color": "#31302e",
  "--overlay-text-color": "#ccc",
  "--background-image": "url(images/bg_code.jpg)", 
}

/*----Color Swatches----*/
const defaultColors = ["#3b5998", "#3b5998", "#C5CAE9", "#f2f2f2", "3b5998", "#f4f4f4",
  "#212121", "#757575", "#3b5998", "#31302e", "#ccc", "url(images/bg_code.jpg)"]

const blueRefresh1 = ["#25274D", "#464866", "#AAABB8", "#FFFFFF", "#2E9CCA", "#FFFFFF", 
  "#212121", "#29648A", "#25274D", "#464866", "#AAABB8", "url(images/bg_code_blue_light.jpg)"]
                    
const blueRefresh2 = ["#464866", "#25274D", "#AAABB8", "#FFFFFF", "#2E9CCA", "#FFFFFF", 
  "#212121", "#29648A", "#464866", "#464866", "#AAABB8", "url(images/bg_code_blue_dark.jpg)"] 

const corpSerious1 = ["#022140", "#265077", "#C5CAE9", "#FFFFFF", "#494B68", "#FFFFFF", 
  "#212121", "#1E4258", "#1E4258", "#1E4258", "#ccc", "url(images/bg_code_corp_light.jpg)"] 

const corpSerious2 = ["#265077", "#022140", "#C5CAE9", "#FFFFFF", "#2D5F5D", "#FFFFFF", 
  "#212121", "#1E4258", "#022140", "#1E4258", "#ccc", "url(images/bg_code_corp_dark.jpg)"]
                    
const mdIndigo = ["#303F9F", "#3F51B5", "#C5CAE9", "#FFFFFF", "#03A9F4", "#FFFFFF", 
  "#212121", "#757575", "#303F9F", "#31302e", "#ccc", "url(images/bg_code.jpg)"] 

const colorPalette = {
  "--dark-primary-color": "",
  "--default-primary-color": "",
  "--light-primary-color": "",
  "--text-primary-color": "",
  "--accent-color": "",
  "--primary-bg-color": "",
  "--primary-text-color": "",
  "--secondary-text-color": "",
  "--divider-color": "",
  "--overlay-bg-color": "",
  "--overlay-text-color": "",
  "--background-image": "",
}

const addColors = (arr, obj) => {
  let newArr = arr.slice()
  for (var key in obj) {
    obj[key] = newArr.shift();
  }

  return obj
}

const changeColorScheme = (arr, obj) => {
  // return () => {
    var newObj = addColors(arr, obj)
    for (var key in newObj) {
      document.documentElement.style.setProperty(key, newObj[key])
    }
  // }
}

// document.getElementById('default-color').addEventListener("click", changeColorScheme(defaultColors, colorPalette));
// document.getElementById('blue-refresh-1').addEventListener("click", changeColorScheme(blueRefresh1, colorPalette));
// document.getElementById('blue-refresh-2').addEventListener("click", changeColorScheme(blueRefresh2, colorPalette));
// document.getElementById('corp-serious-1').addEventListener("click", changeColorScheme(corpSerious1, colorPalette));
// document.getElementById('corp-serious-2').addEventListener("click", changeColorScheme(corpSerious2, colorPalette));
// document.getElementById('material-design-1').addEventListener("click", changeColorScheme(mdIndigo, colorPalette))

// Change settings for home page background opacity
var UID = {
  _current: 0,
  getNew: function () {
    this._current++;
    return this._current;
  }
};

HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
  var _this = this;
  var _sheetId = "pseudoStyles";
  var _head = document.head || document.getElementsByTagName('head')[0];
  var _sheet = document.getElementById(_sheetId) || document.createElement('style');
  _sheet.id = _sheetId;
  var className = "pseudoStyle" + UID.getNew();

  _this.className += " " + className;

  _sheet.innerHTML += " ." + className + ":" + element + "{" + prop + ":" + value + "}";
  _head.appendChild(_sheet);
  return this;
};

const changeOpacity = _ => {
  let opacitySetting = prompt("Enter opacity setting (0 - lowest to 1 - highest)")
  document.getElementById('home').pseudoStyle("after", "opacity", opacitySetting);
}

/*-----Card behavior functions-----*/
const openCardDetail = (i) => {
  return () => {
    cardSummary[i].style.display = "none"
    cardDetail[i].style.display = "block"
  }
}

const closeCardDetail = (i) => {
  return () => {
    cardSummary[i].style.display = "block"
    cardDetail[i].style.display = "none"
  }
}

for (let i = 0; i < cardDetail.length; i++) {
  summaryButton[i].addEventListener("click", openCardDetail(i))
  closeCardButton[i].addEventListener("click", closeCardDetail(i))
}

/*-----Contact form handling-----*/
const openContactForm = () => {
  document.getElementById('contact').style.width = '70%'
}

const closeContactForm = () => {
  document.getElementById('contact').style.width = '0'
  document.getElementsByTagName('form')[0].style.display = 'grid'
  removeActiveClass()
}

const hideForm = () => {
  document.getElementById('contact-me').reset()
  document.querySelector('.alert').style.display = 'block'
  document.getElementsByTagName('form')[0].style.display = 'none'
  //Auto close contact form window
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none'
    closeContactForm()
  }, 5000)
}

// Function to get form values
const getInputVal = (id) => {
  return document.getElementById(id).value
}

// Save message to firebase
const saveMessage = (body) => {
  const newMessageRef = messagesRef.push()
  newMessageRef.set({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    phone: body.phone,
    message: body.message
  })
}

// reCAPTCHA request submission
const recaptchaRequest = (body) => {
  fetch(captchaEndpoint, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(body)
  })
    .then((data) => {
      // Send message to firebase
      saveMessage(body);
    })
}

const submitForm = (e) => {
  e.preventDefault();
  // Get input values
  const firstname = getInputVal('first-name')
  const lastname = getInputVal('last-name')
  const email = getInputVal('email')
  const phone = getInputVal('phone')
  const message = getInputVal('message')
  const captcha = getInputVal('g-recaptcha-response')

  if(
    captcha === undefined ||
    captcha === '' ||
    captcha === null
  ) {
    alert('Please select CAPTCHA verification')
  } else {
    const body = {
      "firstname": firstname,
      "lastname": lastname,
      "email": email,
      "phone": phone,
      "subject": 'From WILFREMORGAN.COM',
      "message": message,
      "g-recaptcha-response": captcha
    }
    // reCAPTCHA verification
    recaptchaRequest(body)

    // Hide form
    hideForm()
  }
}

for (let i = 0; i < contactButton.length; i++) {
  contactButton[i].addEventListener("click", openContactForm)
}
closeForm.addEventListener("click", closeContactForm)

document.getElementById('contact-me').addEventListener('submit', submitForm)

