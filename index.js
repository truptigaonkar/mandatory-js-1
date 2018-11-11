// Changing company name //
let headerH1 = document.querySelector('h1');
headerH1.textContent = "Fruits & Vegetables Corp";

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

// Adding contact h2 //
let contactH2 = document.createElement('h2');
contactH2.textContent = "Contact";
contactId.appendChild(contactH2);

// Bringing Contact h2 header above table content and p tag content // 
let contactPTag = document.getElementsByTagName('p');
contactId.insertBefore(contactH2, contactPTag[0]);

//set text in about section into p-tag by creating it //
let AboutPTag = document.createElement("p");
AboutPTag.textContent = aboutId.textContent;
aboutId.textContent = "";
aboutId.appendChild(AboutPTag);

// Adding about h2 //
let aboutH2 = document.createElement('h2');
aboutH2.textContent = "About";
aboutId.appendChild(aboutH2);

// Bringing About h2 header above p tag content // 
let aboutPTag = document.getElementsByTagName('p')[0];
aboutId.insertBefore(aboutH2, aboutPTag);  

// Replace all td elements in thead to th
let td1 = document.getElementsByTagName('td')[0];
let td2 = document.getElementsByTagName('td')[1];
let th1 = document.createElement('th');
let th2 = document.createElement('th');
th1.textContent = td1.textContent;
th2.textContent = td2.textContent;
td1.replaceWith(th1);
td2.replaceWith(th2); 
/* let replaceElement = document.querySelectorAll("thead td");
for (let td of replaceElement) {
  let th = document.createElement("th");
  th.textContent = td.textContent;
  td.replaceWith(th);
} */

// Include main.css file to head //
let head = document.querySelector('head');
let link = document.createElement('link');
link.setAttribute('rel','stylesheet');
link.setAttribute('type', 'text/css'); 
link.setAttribute('href','main.css'); 
console.log(link);
//link.innerHTML = '<link rel="stylesheet" type="text/css" href="main.css">';
head.appendChild(link);

// Changing title //
let title = document.querySelector('title');
title.textContent = "Fruits & Vegetables Corp";




