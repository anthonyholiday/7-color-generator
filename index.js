const generateBtn = document.getElementById('get-color-btn')
const selectedScheme = document.getElementById('scheme-select')
const selectedColor = document.getElementById('color-select')

console.log(selectedColor.value.replace('#', ''))

generateBtn.addEventListener('click', function() {
    document.getElementById('colors').innerHTML = ""
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor.value.replace('#', '')}&mode=${selectedScheme.value}&count=5`)
    .then(response => response.json())
    .then(data => {
        data.colors.forEach(color => {
            document.getElementById('colors').innerHTML += `
            <div class="color-wrap">
                <div id="${color.hex.value}" class="color-col"></div>
                <div>${color.hex.value}</div>
            </div>
            `
            document.getElementById(`${color.hex.value}`).style.backgroundColor = color.hex.value
            })
    })
})