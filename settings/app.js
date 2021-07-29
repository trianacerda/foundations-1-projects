import { changeColorSchemeToBnw, changeColorSchemeToPastel, changeColorSchemeToWashout, changeColorSchemeToDefault  } from './settings.js';
const form1 = document.getElementById('form1');
console.log(form1)
form1.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const formData = new FormData(form1);
    console.log(formData)
    let selected = Number(formData.get('styles'));
    console.log(selected)
    
    if ( selected === 1 ) {
        // changeColorSchemeToPastel();
        const doc = document.getElementsByTagName('body');
        console.log(doc[0])
        doc[0].style.backgroundColor = '#a2d2ffff'
    }
    if ( selected === 2 ) {
        changeColorSchemeToWashout();
    }
    if ( selected === 3 ) {
        changeColorSchemeToBnw();
    }
    if ( selected === 4 ) {
        changeColorSchemeToDefault();
    }    
})
