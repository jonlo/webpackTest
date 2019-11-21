import '../styles/index.scss';

console.log('webpack starterkit');

window.addEventListener('load', function () {
    addActionListeners();
})

function addActionListeners() {
    document.getElementById('aboutBtn').addEventListener('click', () => {
        console.log("click button");
        window.location.href = 'about';
    });
}