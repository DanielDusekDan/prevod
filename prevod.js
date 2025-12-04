document.addEventListener('DOMContentLoaded', function() {
    
    const formular = document.querySelector('#prevodFormular');
    
    formular.onsubmit = prevestTeplotu;
    
});


function prevestTeplotu(event) {
    
    event.preventDefault(); 
    
    const celsiaInput = document.querySelector('#celsia');
    const celsia = parseFloat(celsiaInput.value);
    
    const vysledekH1 = document.querySelector('#vysledek');
    
    if (isNaN(celsia)) {
        vysledekH1.innerHTML = 'CHYBA: Zadejte prosím platné číslo.';
        vysledekH1.classList.remove('zvýraznit');
        vysledekH1.style.color = 'red';
        return;
    }
    
    const fahrenheit = (celsia * 9/5) + 32;
    
    vysledekH1.innerHTML = `${celsia.toFixed(2)} °C je ${fahrenheit.toFixed(2)} °F`;
    
    if (celsia > 0) {
        vysledekH1.classList.add('zvýraznit');
        vysledekH1.style.color = '';
    } else {
        vysledekH1.classList.remove('zvýraznit');
        vysledekH1.style.color = 'darkblue';
    }
}