import { projects } from "./hero-carousel.js";

//Append social media icons
const leader = [...document.querySelectorAll(".leader")];

leader.forEach((x) => {
  const linkedin = document.createElement("a");
  const twitter = document.createElement("a");

  x.appendChild(linkedin);
  x.appendChild(twitter);

  linkedin.href = "https://www.linkedin.com";
  linkedin.className = "social-icon-tablet";
  linkedin.target = "_blank";
  linkedin.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                  <path
                        fill="#1b1d23"
                        d="M36 0H4C1.8 0 0 1.8 0 4v32c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM12 34H6V16h6v18zM9 12.6C7 12.6 5.4 11 5.4 9S7 5.4 9 5.4 12.6 7 12.6 9 11 12.6 9 12.6zM34 34h-6V23.4c0-1.6-1.4-3-3-3s-3 1.4-3 3V34h-6V16h6v2.4c1-1.6 3.2-2.8 5-2.8 3.8 0 7 3.2 7 7V34z"
                  /></svg>`;

  twitter.href = "https://www.twitter.com";
  twitter.className = "social-icon-tablet";
  twitter.target = "_blank";
  twitter.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="33">
                <path
                  fill="#1b1d23"
                  d="M40 4.262a16.384 16.384 0 01-4.713 1.291 8.22 8.22 0 003.608-4.54 16.44 16.44 0 01-5.212 1.992 8.193 8.193 0 00-5.99-2.592c-5.298 0-9.191 4.944-7.995 10.075C12.88 10.147 6.833 6.88 2.785 1.915.635 5.603 1.67 10.428 5.323 12.872a8.172 8.172 0 01-3.715-1.027c-.09 3.802 2.635 7.358 6.582 8.15a8.225 8.225 0 01-3.707.14 8.213 8.213 0 007.667 5.698A16.5 16.5 0 010 29.233a23.232 23.232 0 0012.58 3.687c15.237 0 23.845-12.868 23.325-24.41A16.708 16.708 0 0040 4.262z"
                /></svg>`;
});

// Home Hero Carousel

const heroHeading = document.querySelector("#hero-heading");
const heroCopy = document.querySelector("#hero-copy");
const heroButtons = [...document.querySelectorAll(".hero-btn")];
const heroSection = document.querySelector("#home-hero");
let index = 0;

let carousel = () => {
  heroHeading.textContent = projects[index].project;
  heroCopy.textContent = projects[index].description;
  heroSection.style.backgroundImage = `url("${projects[index].url}")`;
  heroSection.style.backgroundPosition = `center bottom`;
  heroSection.style.backgroundSize = `cover`;
  heroButtons
    .filter((x, idx) => idx !== index)
    .forEach((x) => (x.className = "btn btn-icon hero-btn inactive-btn"));
  heroButtons[index].className = "btn btn-icon hero-btn";
};

if (heroHeading !== null) {
  carousel();
  index = 1;
  heroButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      index = heroButtons.indexOf(btn);
      carousel();
    })
  );
  setInterval(() => {
    carousel();
    index !== 3 ? index++ : (index = 0);
  }, 7500);
}

// Mobile Navigation

const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", () => {
  if (document.querySelector(".dropdown") == null) {
    const dropdown = document.querySelector("header ul").cloneNode(true);
    dropdown.className = "dropdown";
    document.querySelector("body").appendChild(dropdown);
    menuButton.classList.toggle("close-btn");
  } else {
    menuButton.classList.toggle("close-btn");
    document.querySelector(".dropdown").remove();
  }
});

// Form Validation
const submit = document.querySelector("#submit");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const nameLabel = document.querySelector("#name-label");
const emailLabel = document.querySelector("#email-label");
const messageLabel = document.querySelector("#message-label");
const nameRegex = /^\w{2,}\s\w{2,}/gi;
const emailRegex = /\w{2,}\@\w{2,}\./gi;

submit.addEventListener("click", (event) => {
  nameLabel.className = "";
  emailLabel.className = "";
  messageLabel.className = "";
  name.className = "";
  email.className = "";
  message.className = "";

  name.value == ""
    ? (event.preventDefault(),
      nameLabel.classList.add("invalid-label"),
      name.classList.add("invalid-border"))
    : email.value == ""
    ? (event.preventDefault(),
      emailLabel.classList.add("invalid-label"),
      email.classList.add("invalid-border"))
    : message.value == ""
    ? (event.preventDefault(),
      messageLabel.classList.add("invalid-label"),
      message.classList.add("invalid-border"))
    : !nameRegex.test(name.value)
    ? (event.preventDefault(),
      (nameLabel.textContent = `Please provide your full name`),
      nameLabel.classList.add("invalid-label"),
      name.classList.add("invalid-border"))
    : !emailRegex.test(email.value)
    ? (event.preventDefault(),
      (emailLabel.textContent = `Please provide a valid email address`),
      emailLabel.classList.add("invalid-label"),
      email.classList.add("invalid-border"))
    : true;
});
