const numOfImage = 6;
const num = Math.floor(Math.random()*numOfImage);

const bgImage = document.createElement("img");
//bgImage class 추가, 후에 css 적용
bgImage.classList.add("bgImage");
bgImage.src = `img/${num}.jpeg`;
document.body.appendChild(bgImage);