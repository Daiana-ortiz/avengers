const nav = document.getElementById("navbar")

document.getElementById("hamburger").addEventListener("click", e => {
  e.preventDefault()

  if (nav.classList.contains("open")) {
    nav.classList.remove("open")
  } else {
    nav.classList.add("open")
  }
})


let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

document.
  getElementById('carousel-button-next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel-button-prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove('carousel-item-visible');
      slide.classList.add('carousel-item-hidden');
    }

    slides[slidePosition].classList.add('carousel-item-visible');
  }

  function moveToPrevSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition ++;
    }

    updateSlidePosition();
  }

  function moveToNextSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition --;
    }

    updateSlidePosition();
  }


// MARVEL API 

const marvel = {
  render: () => {
    const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=thor&ts=1&apikey=f1c50c9a6917b8f09f5e68d9adebf69d&hash=721cf87c33af1246d1b0e9b8307fb546";
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        console.log(json,)
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="character">
              <div class="imagen">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3>${hero.name}</h3>
                </div>
            </div>`;
        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();