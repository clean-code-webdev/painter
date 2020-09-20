function fillPaletteColorsWithItsRespectiveColor(color) {
    let colors = document.querySelectorAll('.color');

    for (let i = 0; i < colors.length; i++) {
        colors[i].style.background = color[i];
    }
}


function createColorOptionInsideColorPalette(color) {
    let palette = document.querySelector('#palette');

    color.forEach(() => {
        let div = document.createElement('div');

        div.classList = 'color';
        palette.appendChild(div);
    });
}


function getPaletteColorOnClick() {
    let colors = document.querySelectorAll('.color');

    colors.forEach(color => {
        color.addEventListener('click', () => {
            let currentColor = document.querySelector('#curr-color');
            currentColor.style.background = color.style.background;
        })
    })
}


export {
    fillPaletteColorsWithItsRespectiveColor,
    createColorOptionInsideColorPalette,
    getPaletteColorOnClick,
};