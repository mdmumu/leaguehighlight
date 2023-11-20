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

document.getElementById('redirectButton').addEventListener('click', function() {
    // Redirect to the home page URL
    window.location.href = 'file:///C:/Users/User/Desktop/HTML%20TEMPLATES/web.html'; // Change this to your home page URL
  });
