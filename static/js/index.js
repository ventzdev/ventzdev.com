let itemsProjectMedia = document.querySelectorAll(".itemsProjectMediaplay");

for (let i = 0; i < itemsProjectMedia.length; i++) {
  itemsProjectMedia[i].addEventListener("mouseover", () => {
    let vid = document.querySelectorAll(".video-mounseover");
    for (let v = 0; v < vid.length; v++) {
      vid[i].play();
    }
  });
}
