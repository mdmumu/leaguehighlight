const button = document.querySelector("button");
const loader = document.querySelector('.loading-screen');

function showLoadingScreen() {
    loader.style.display = 'flex';
}

function hideLoadingScreen() {
    loader.style.display = 'none';
}

button.addEventListener('click', function () {
    showLoadingScreen();
    setTimeout(function () {
        hideLoadingScreen();
        window.location.href = "https://drive.google.com/file/d/1R0Jrvpb9YS_Lamq_OO9IhamW4PZPOfiC/view?usp=sharing";
    }, 4000);
});




