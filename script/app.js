// MENU
const btnMenu = document.querySelector(".menu__hamburguer");
const menu = document.querySelector(".menu ul");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  btnMenu.classList.toggle("ri-close-line");
  btnMenu.classList.toggle("ri-menu-line");
});

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  btnMenu.classList.toggle("ri-close-line");
  btnMenu.classList.toggle("ri-menu-line");
});

// FORM
const btnActiveForm = document.querySelector(".icon__user");
const boxForm = document.querySelector(".box__form");
const btnCloseForm = document.querySelector(".close__form");

btnCloseForm.addEventListener("click", () => {
  boxForm.classList.toggle("active");
});
btnActiveForm.addEventListener("click", () => {
  boxForm.classList.toggle("active");
});

const btnFormLogin = document.querySelector(".btn__form__login");
const btnFormRegister = document.querySelector(".btn__form__register");
const btnForm = document.querySelectorAll(".btn__checked");
const formLogin = document.querySelector(".box__login");
const formRegister = document.querySelector(".box__register");

for (let i = 0; i < btnForm.length; i++) {
  btnForm[i].addEventListener("click", () => {
    if (btnForm[i] === btnForm[0]) {
      btnFormLogin.classList.add("active");
      btnFormRegister.classList.remove("active");
      formLogin.classList.add("active");
      formRegister.classList.remove("active");
    } else if (btnForm[i] === btnForm[1]) {
      btnFormRegister.classList.add("active");
      btnFormLogin.classList.remove("active");
      formRegister.classList.add("active");
      formLogin.classList.remove("active");
    }
  });
}

// CHANGE IMAGE HEADER
let image = document.querySelectorAll(".img__slide__home");
let time = 3000;
let indexImage = 0;
let maxImages = image.length;

function nextImage() {
  image[indexImage].classList.remove("selected");
  indexImage++;

  if (indexImage >= maxImages) {
    indexImage = 0;
  }

  image[indexImage].classList.add("selected");
}

function slideHeader() {
  setInterval(() => {
    nextImage();
  }, time);
}
window.addEventListener("load", slideHeader);

// CARD COURSES

const imagesCourses = [
  {
    id: 0,
    url: "../images/course-1-1.png",
  },
  {
    id: 1,
    url: "../images/course-1-2.png",
  },
  {
    id: 2,
    url: "../images/course-1-3.png",
  },
  {
    id: 3,
    url: "../images/course-1-4.png",
  },
  {
    id: 4,
    url: "../images/course-1-5.png",
  },
  {
    id: 5,
    url: "../images/course-1-6.png",
  },
  {
    id: 6,
    url: "../images/course-2-1.jpg",
  },
  {
    id: 7,
    url: "../images/course-2-2.jpg",
  },
  {
    id: 8,
    url: "../images/course-2-3.jpg",
  },
  {
    id: 9,
    url: "../images/course-2-4.jpg",
  },
  {
    id: 10,
    url: "../images/course-2-5.jpg",
  },
  {
    id: 11,
    url: "../images/course-2-6.jpg",
  },
  {
    id: 12,
    url: "../images/course-2-7.jpg",
  },
  {
    id: 13,
    url: "../images/course-2-8.jpg",
  },
  {
    id: 14,
    url: "../images/course-2-9.jpg",
  },
];

courses = () => {
  let boxImage = document.querySelector(".slides");
  imagesCourses.map((val) => {
    boxImage.innerHTML +=
      `
    <div class="swiper-slide box">
      <strong class="strong">Web Development</strong>
      <img src=` +
      val.url +
      ` alt="" class="img" />
      <div class="box__absolut">
        <strong>Web Development</strong>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          perspiciatis fuga exercitationem eum delectus id in odit.
        </span>
        <button class="btn">Read More</button>
      </div>
    </div>;
          `;
  });
};
courses();

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

{
  /* <div class="box">
  <strong class="strong">Web Development</strong>
  <img src="images/course-1-1.png" alt="" class="img" />
  <div class="box__absolut">
    <strong>Web Development</strong>
    <span>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
      perspiciatis fuga exercitationem eum delectus id in odit.
    </span>
    <button class="btn">Read More</button>
  </div>
</div>; */
}
