// Select movie poster original image
let moviePoster = document.querySelector('.movie-poster');
// Select modal window layer
let modal = document.querySelector('#myModal');
// Select close button
let closeBtn = document.querySelector('.closeBtn');
// Select modal window image
let modalImage = document.querySelector('.movie-poster-modal');

moviePoster.addEventListener("click", () => {
    console.log("image clicked");
    modal.style.display = "block";
    modalImage.src = moviePoster.src;
    modalImage.style.right = 0;
    modalImage.style.animation = 0;
    modalImage.style.transform = "none";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if(event.target === modal) {
        modal.style.display = "none";
    }
});

