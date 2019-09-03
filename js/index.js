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
    "h1": "DOM\n Is \n Awesome",
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
nav1.textContent = siteContent["nav"]["nav-item-1"];;
nav1.setAttribute("id", "nav-item-1");

let nav2 = document.querySelector('nav a:nth-child(2)');
nav2.textContent = siteContent["nav"]["nav-item-2"];;
nav2.setAttribute("id", "nav-item-2");

let nav3 = document.querySelector('nav a:nth-child(3)');
nav3.textContent = siteContent["nav"]["nav-item-3"];;
nav3.setAttribute("id", "nav-item-3");

let nav4 = document.querySelector('nav a:nth-child(4)');
nav4.textContent = siteContent["nav"]["nav-item-4"];;
nav4.setAttribute("id", "nav-item-4");

let nav5 = document.querySelector('nav a:nth-child(5)');
nav5.textContent = siteContent["nav"]["nav-item-5"];;
nav5.setAttribute("id", "nav-item-5");

let nav6 = document.querySelector('nav a:nth-child(6)');
nav6.textContent = siteContent["nav"]["nav-item-6"];
nav6.setAttribute("id", "nav-item-6");

let h123= document.getElementsByTagName("h1")[0];
h123.innerText = siteContent["cta"]["h1"];


let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];
button.style.boxShadow = "5px 8px #888888";

let topImg = document.querySelector("#cta-img");
topImg.setAttribute("src",siteContent["cta"]["img-src"]);

let topInfo = document.querySelectorAll('.top-content h4');
topInfo[0].textContent = siteContent["main-content"]["features-h4"];
topInfo[1].textContent = siteContent["main-content"]["about-h4"];

let topPara = document.querySelectorAll('.top-content p');
topPara[0].textContent = siteContent["main-content"]["features-content"]
topPara[1].textContent = siteContent["main-content"]["about-content"]

let midImg = document.querySelector(".middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let midInfo = document.querySelectorAll('.bottom-content h4');
midInfo[0].textContent = siteContent["main-content"]["services-h4"];
midInfo[1].textContent = siteContent["main-content"]["product-h4"];
midInfo[2].textContent = siteContent["main-content"]["vision-h4"];

let midPara = document.querySelectorAll('.bottom-content p');
midPara[0].textContent = siteContent["main-content"]["services-content"];
midPara[1].textContent = siteContent["main-content"]["product-content"];
midPara[2].textContent = siteContent["main-content"]["vision-content"];

let lowerInfo = document.querySelectorAll('.contact h4');
lowerInfo.textContent = siteContent["contact"]["contact-h4"];

let lowerPara = document.querySelectorAll('.contact p');
lowerPara[0].textContent = siteContent["contact"]["address"];
lowerPara[1].textContent = siteContent["contact"]["phone"];
lowerPara[2].textContent = siteContent["contact"]["email"];

let copyRight = document.querySelector('footer p:nth-child(1)');
copyRight.textContent = siteContent["footer"]["copyright"];
let foot = document.querySelector("footer");
foot.style.background = "#999999";
foot.style.padding = "12px 0";

let navBar = document.querySelector('nav');
let begining = document.createElement("a");
begining.textContent = "Home";
navBar.prepend(begining);

let end = document.createElement("a");
end.textContent = "Career";
navBar.appendChild(end);

let navColor = document.querySelectorAll('a');
navColor[0].style.color = "green";
navColor[1].style.color = "green";
navColor[2].style.color = "green";
navColor[3].style.color = "green";
navColor[4].style.color = "green";
navColor[5].style.color = "green";
navColor[6].style.color = "green";
navColor[7].style.color = "green";