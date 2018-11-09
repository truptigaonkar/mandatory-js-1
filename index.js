// Changing company name //
let header = document.querySelector('h1');
header.innerHTML = '<h1>Fruits &amp; Vegetables Corp</h1>';
//header.textContent = "Fruits & Vegetables Corp";

// Change last a tag textContent and href attribute //
let tagA = document.getElementsByTagName('a');
//let tagA = document.querySelector("ul li:last-child a");
tagA[2].textContent = "Vegetables";
tagA[2].setAttribute("href", "#vegetables");

// The section #contact and #about are in the wrong order. Swap them //
let mainId = document.getElementById('main');
let contactId = document.getElementById('contact');
let aboutId = document.getElementById('about');
mainId.insertBefore(aboutId, contactId);

// Adding about and contact h2 //
let aboutH2 = document.createElement('h2');
aboutH2.textContent = "About";
aboutId.appendChild(aboutH2);

let contactH2 = document.createElement('h2');
contactH2.textContent = "Contact";
contactId.appendChild(contactH2);

// Bringing Contact h2 header above table content and p tag content // 
let contactPTag = document.getElementsByTagName('p');
contactId.insertBefore(contactH2, contactPTag[0]);

// Include main.css file to head e.g.<link rel="stylesheet" href="main.css"> //
let head = document.querySelector('head');
let link = document.createElement('link');
/*
// Det funkar också
link.setAttribute('rel','stylesheet');
link.setAttribute('href','main.css');
*/
link.innerHTML = '<link rel="stylesheet" href="main.css">';
head.appendChild(link);

// Changing title //
let title = document.querySelector('h1');
title.textContent = "Fruits & Vegetables Corp";




