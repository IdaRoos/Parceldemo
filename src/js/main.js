const img = document.createElement("img");

const imgUrl = new URL("../media/scissor.png", import.meta.url);

// console.log(import.meta);
// console.log(imgUrl.href);
img.src = imgUrl.href;
document.body.append(img);
