// Patagonia assignment, works on http://eu.patagonia.com/gb/en/home/
// by Martijn van Loon

// find the navbar
var navbar = document.getElementById("navbar");

// create a document fragment, we use this to store our html before we insert it all into the page at once.
var fragment = document.createDocumentFragment();

(function() {
  // create a figure for the banner
  var bannerDiv = document.createElement("figure");
  // a caption for the text
  var textDiv = document.createElement("figcaption");
  // and a div for the chevron because we can't style pseudo elements properly with js
  var chevronDiv = document.createElement("div");

  // caption
  textDiv.textContent = "Click here to read our blog";
  textDiv.setAttribute("id", "patagonia-text");
  textDiv.style.cssText =
    'height: 80px;background-color: #ef4923;color: #fff;font-size: 24px;text-transform: uppercase;letter-spacing: 1px;padding: 0 20px;display: flex;margin: 0 5% 0 0;max-width: 90%;align-self: center;text-align: center;align-items: center;font-family: "Avenir Next LT W02 Bold";';

  // chevron
  chevronDiv.classList.add("glyphicon-chevron-right");
  chevronDiv.style.cssText =
    'content: "e080";font-size: 32px;font-family: "Glyphicons Halflings";margin: 0 0 2px 10px';

  // banner and background
  bannerDiv.setAttribute("id", "patagonia-banner");
  bannerDiv.style.cssText =
    "height: 160px;display: flex;flex-direction: row-reverse;background: linear-gradient(0deg, rgba(255,255,255,0.4), rgba(255,255,255,0.7)), url(https://patagonia.wpengine.com/wp-content/uploads/2017/08/20170715_scotland0158_featured-1404x778-c-default.jpg) no-repeat center 24%;";

  // add the chevron to the caption
  textDiv.appendChild(chevronDiv);
  // add the caption to the banner
  bannerDiv.appendChild(textDiv);
  // add the banner to the fragment
  fragment.appendChild(bannerDiv);
  // And finally we insert the fragment before the navbar
  navbar.insertBefore(fragment, navbar.firstChild);
})();

// some fancy js media query's
var patagoniaBanner = document.getElementById("patagonia-banner");
var patagoniaText = document.getElementById("patagonia-text");

// media query for 600px
(function() {
  if (matchMedia) {
    // check if the window is more or less then 600px
    const mq = window.matchMedia("(min-width: 600px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // change the style of two elements depending on the size of the window
  function WidthChange(mq) {
    if (mq.matches) {
      patagoniaBanner.style.height = "160px";
      patagoniaText.style.fontSize = "24px";
    } else {
      patagoniaBanner.style.height = "100px";
      patagoniaText.style.fontSize = "21px";
    }
  }
})();

// media query 1200px
(function() {
  if (matchMedia) {
    // check if the window is more or less then 1200px
    const mqLg = window.matchMedia("(min-width: 1200px)");
    mqLg.addListener(WidthChange);
    WidthChange(mqLg);
  }
  function WidthChange(mqLg) {
    if (mqLg.matches) {
      patagoniaBanner.style.backgroundSize = "cover";
    } else {
      patagoniaBanner.style.backgroundSize = "auto";
    }
  }
})();
