async function məhsullarıAl() {
  const api_key = "a7ca99e33706483b07a3cb83d57c6c42";
  const cavab = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=tr-TR&page=1`
  );
  const məlumat = await cavab.json();
  return məlumat.results;
}

async function slayderYarat() {
  const məhsullar = await məhsullarıAl();
  const slayderContainer = document.createElement("div");
  slayderContainer.classList.add("slider");
  const slidesContainer = document.createElement("div");
  slidesContainer.classList.add("slides");
  slayderContainer.append(slidesContainer);
  document.body.append(slayderContainer);

  məhsullar.forEach((məhsul) => {
    const sliyad = document.createElement("div");
    sliyad.classList.add("slide");
    const şəkil = document.createElement("img");
    şəkil.src = `https://image.tmdb.org/t/p/w500/${məhsul.poster_path}`;
    sliyad.append(şəkil);
    slidesContainer.append(sliyad);
  });

  let slideIndex = 0;
  setInterval(function () {
    const slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
  }, 3000);
}

slayderYarat();
