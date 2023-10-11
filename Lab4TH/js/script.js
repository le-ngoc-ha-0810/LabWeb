const buttonsContainer = document.querySelector('.buttons');
const totalButtons = 64;
let currentNumber = 1;

// // Tạo các nút với số từ 1 đến 64 theo thứ tự
// for (let i = 1; i <= totalButtons; i++) {
//     const button = document.createElement('button');
//     button.innerText = i;
//     buttonsContainer.appendChild(button);
// }
// Tạo một mảng các số từ 1 đến 64
const numbers = Array.from({ length: totalButtons }, (_, i) => i + 1);

// Trộn ngẫu nhiên mảng số
shuffleArray(numbers);

// Tạo các nút với số ngẫu nhiên
numbers.forEach((number) => {
    const button = document.createElement('button');
    button.innerText = number;
    buttonsContainer.appendChild(button);
    button.addEventListener('click', () => handleButtonClick(number));
});
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
buttonsContainer.addEventListener('click', (event) => {
    const clickedButton = event.target;
    const buttonNumber = parseInt(clickedButton.innerText);

    if (buttonNumber === currentNumber) {
        buttonsContainer.removeChild(clickedButton);
        currentNumber++;

        if (currentNumber > totalButtons) {
            alert('Chuc mung! Ban da hoan thanh tro choi');
        }
    } else {
        alert('Ban da nhan sai button. Vui long thu lai');
    }
});
