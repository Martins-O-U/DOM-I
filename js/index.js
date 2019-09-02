const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav1 = document.querySelector('nav a:nth-child(1)');
nav1.textContent = "Services";
nav1.setAttribute("id", "nav-item-1");

let nav2 = document.querySelector('nav a:nth-child(2)');
nav2.textContent = "Product";
nav2.setAttribute("id", "nav-item-2");

let nav3 = document.querySelector('nav a:nth-child(3)');
nav3.textContent = "Vision";
nav3.setAttribute("id", "nav-item-3");

let nav4 = document.querySelector('nav a:nth-child(4)');
nav4.textContent = "Features";
nav4.setAttribute("id", "nav-item-4");

let nav5 = document.querySelector('nav a:nth-child(5)');
nav5.textContent = "About";
nav5.setAttribute("id", "nav-item-5");

let nav6 = document.querySelector('nav a:nth-child(6)');
nav6.textContent = "Contact";
nav6.setAttribute("id", "nav-item-6");

let h123= document.getElementsByTagName("h1")[0];
h123.innerText = "DOM\n Is \n Awesome"

// let button = document.getElementsByTagName('button');
// button.textContent = "Get Started"
// console.log(button);

let topImg = document.querySelector("#cta-img");
topImg.setAttribute("src","img/header-img.png");
console.log(topImg);