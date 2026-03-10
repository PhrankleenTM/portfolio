const home = document.getElementById("home");
const about = document.getElementById("about");
const services = document.getElementById("services");
const work = document.getElementById("work");
const contact = document.getElementById("contact");
const socials = document.getElementById("socials");
const homeBar = document.getElementById("home-tab");
const aboutBar = document.getElementById("about-tab");
const servicesBar = document.getElementById("services-tab");
const workBar = document.getElementById("work-tab");
const contactBar = document.getElementById("contact-tab");
const socialsBar = document.getElementById("socials-tab");
const resumeBtn = document.getElementById("resume");

const main = document.getElementById("main");
const introduction = document.getElementById("introduction");
const serviceTab = document.getElementById("service-tab");
const portfolio = document.getElementById("portfolio");
const connect = document.getElementById("connect");
const footer = document.getElementById("footer");

home.addEventListener("click", function (e) {
  e.preventDefault();
  main.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
});

about.addEventListener("click", function (e) {
  e.preventDefault();
  introduction.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
});

services.addEventListener("click", function (e) {
  e.preventDefault();
  serviceTab.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
});

work.addEventListener("click", function (e) {
  e.preventDefault();
  portfolio.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
});

contact.addEventListener("click", function (e) {
  e.preventDefault();
  connect.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
});

socials.addEventListener("click", function (e) {
  e.preventDefault();
  footer.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
});

homeBar.addEventListener("click", function (e) {
  e.preventDefault();
  main.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
  hideSidebar();
});

aboutBar.addEventListener("click", function (e) {
  e.preventDefault();
  introduction.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
  hideSidebar();
});

servicesBar.addEventListener("click", function (e) {
  e.preventDefault();
  serviceTab.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
  hideSidebar();
});

workBar.addEventListener("click", function (e) {
  e.preventDefault();
  portfolio.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
  hideSidebar();
});

contactBar.addEventListener("click", function (e) {
  e.preventDefault();
  connect.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
  hideSidebar();
});

socialsBar.addEventListener("click", function (e) {
  e.preventDefault();
  footer.scrollIntoView({
    behavior: "smooth",
    // block: "start",
  });
  hideSidebar();
});

resumeBtn.addEventListener("click", function () {
  downloadPDF();
});

function downloadPDF() {
  window.location.href = "myfiles/"
}

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
