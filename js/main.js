let photos = document.querySelector("#image")

let ArrayOfPhotos = [
    "url(images/1.png)", 
    "url(images/2.png)", 
    "url(images/3.png)", 
    "url(images/4.png)",
    "url(images/5.png)",
    "url(images/6.png)",
    "url(images/7.png)",
    "url(images/8.png)",
    "url(images/9.png)",
    "url(images/10.png)",
    "url(images/11.png)",
    "url(images/12.png)",
    "url(images/13.png)"
]

let index = 0;

photos.style.backgroundImage = ArrayOfPhotos[index];

function changePhotos(){
    index = (index + 1) % ArrayOfPhotos.length;
    photos.style.backgroundImage = ArrayOfPhotos[index];  
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault();
        changePhotos();
    }
});