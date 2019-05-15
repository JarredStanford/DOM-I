const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let newNavLinks = document.querySelector("header nav");
newNavLinks.appendChild(document.createElement("a")).textContent = "Hi";
newNavLinks.appendChild(document.createElement("a")).textContent = "No";

let navLinks = document.querySelectorAll("header nav a");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];
navLinks[6].setAttribute("href", "#");
navLinks[7].setAttribute("href", "#");

navLinks.forEach(a => (a.style.color = "green"));

let ctaHeader = document.querySelector(".cta-text h1");
let ctaButton = document.querySelector(".cta-text button");
let ctaImg = document.getElementById("cta-img");
ctaHeader.textContent = "DOM";
ctaHeader.appendChild(document.createElement("br"));
ctaHeader.appendChild(document.createTextNode("Is"));
ctaHeader.appendChild(document.createElement("br"));
ctaHeader.appendChild(document.createTextNode("Awesome"));
ctaButton.textContent = siteContent["cta"]["button"];
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let mainContentH4 = document.querySelectorAll(".text-content h4");
let mainContentP = document.querySelectorAll(".text-content p");
mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];
mainContentP[4].textContent = siteContent["main-content"]["vision-content"];

//stretch
let newContactP = document.createElement("p");
let contact = document.querySelector(".contact");
contact
  .appendChild(newContactP)
  .appendChild(document.createElement("button")).textContent = "Click!";
contact
  .appendChild(document.createElement("div"))
  .appendChild(document.createElement("div"));

let contactDiv = document.querySelector(".contact div");
contactDiv.style.cssText =
  "width: 400px; height: 400px; position: relative; background: yellow";
let contactInnerDiv = document.querySelector(".contact div div");
contactInnerDiv.style.cssText =
  "width: 50px; height: 50px; position: absolute; background-color: red;";
contactInnerDiv.classList.add("animation");
let contactButton = document.querySelector(".contact p button");
contactButton.onclick = function() {
  var elem = contactInnerDiv;
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
};
//end stretch

let contactHeader = document.querySelector(".contact h4");
let contactP = document.querySelectorAll(".contact p");
contactHeader.textContent = siteContent["contact"]["contact-h4"];
contactP[0].textContent = "123 Way 456 Street";
contactP[0].appendChild(document.createElement("br"));
contactP[0].appendChild(document.createTextNode("Somewhere, USA"));
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

let footerP = document.querySelectorAll("footer p");
footerP[0].textContent = siteContent["footer"]["copyright"];
