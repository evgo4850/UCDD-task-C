let photos = document.querySelector("#image")

let ArrayOfPhotos = [
    "url(images/1.jpg)", 
    "url(images/2.jpg)", 
    "url(images/3.jpg)", 
    "url(images/4.jpg)",
    "url(images/5.jpg)",
    "url(images/6.jpg)",
    "url(images/7.jpg)",
    "url(images/8.jpg)",
    "url(images/9.jpg)",
    "url(images/10.jpg)",
    "url(images/11.jpg)",
    "url(images/12.jpg)",
    "url(images/13.jpg)"
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