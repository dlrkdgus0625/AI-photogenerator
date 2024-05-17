const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    const imgUrl = 'https://picsum.photos/500?random=${randomNumber}'

    const img = document.createElement('img')
    img.src = 'https://picsum.photos/500/500?random=${Math.floor(Math.random() * 1000) + 1}'
    console.log(randomNumber)
    gridContainer.appendChild(img)
})