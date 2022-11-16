// currentYear

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// mobile navigation

const btnNavEl = document.querySelector(".btn-icn");
const headerEl = document.querySelector(".header-container");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Fixing flexbox gap property in some browsers like Safari
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

!important;
