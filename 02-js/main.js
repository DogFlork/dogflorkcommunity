"use strict";

//
// *
// !
// ?
// TODO

// Colors:
// #0385FF - Main
// #389EFF - Main más claro
// #046BCC - Main más oscuro
// #7FC1FF - Main ultra claro
// #035399 - Main ultra oscuro
// #0F0C34 - Secundario
// #1A1742 - Secundario más claro
// #EFF1FF - Main casi blanco

// Variables
let contract = document.querySelector('.what-is-p-3');
let copyAlert = document.getElementById('copy-alert');

contract.addEventListener('click', function () {
    let copyText = contract.textContent;
    navigator.clipboard.writeText(copyText);

    // Mostrar mensaje
    copyAlert.classList.remove('hidden');
    copyAlert.classList.add('visible');

    // Ocultar mensaje después de 2 segundos
    setTimeout(() => {
        copyAlert.classList.remove('visible');
        setTimeout(() => {
            copyAlert.classList.add('hidden');
        }, 300); // Esperar el tiempo de transición antes de ocultar completamente
    }, 2000);
});

// Change language
let changeLanguage = document.querySelector('.change-language');
let hidden = document.querySelector('.hidden');
let languageLogo = document.querySelector('.change-language-img');
let headerText = document.querySelector('.header-text');
let headerDivRight2 = document.querySelector('.header-div-right-h2');
let mainSpan1 = document.querySelector('.main-span1');
let mainSpan2 = document.querySelector('.main-span2');
let whatIsH1 = document.querySelector('.what-is-h-1');
let whatIsH2 = document.querySelector('.what-is-h-2');
let whatIsH3 = document.querySelector('.what-is-h-3');
let whatIsH4 = document.querySelector('.what-is-h-4');
let whatIsP1 = document.querySelector('.what-is-p-part1');
let whatIsP2 = document.querySelector('.what-is-p-part2');
let whatIsP3 = document.querySelector('.what-is-p-part3');
let whatIsP4 = document.querySelector('.what-is-p-part4');
let whatIsP5 = document.querySelector('.what-is-p-part5');
let whatIsP6 = document.querySelector('.what-is-p-part6');
let whatIsP7 = document.querySelector('.what-is-p-part7');
let whatIsP8 = document.querySelector('.what-is-p-part8');
let whatIsP9 = document.querySelector('.what-is-p-part9');
let whatIsP10 = document.querySelector('.what-is-p-part10');
let whatIsP11 = document.querySelector('.what-is-p-part11');

changeLanguage.addEventListener('click', function () {
    let lang = localStorage.getItem('lang');
    if (lang === 'en') {
        localStorage.setItem('lang', 'es');
        languageLogo.src = '../03-assets/img/10-eng_flag.png';
        hidden.textContent = 'Contrato copiado';
        //!
        headerText.textContent = 'DogFlork - Comunidad';
        headerDivRight2.textContent = 'Comprar $DogFlork';
        headerDivRight2.style.fontSize = '2rem';
        mainSpan1.textContent = 'BIENVENIDO A LA';
        mainSpan2.textContent = 'COMUNIDAD DE DOGFLORK';
        whatIsH1.textContent = '¿Qué es DogFlork?';
        whatIsP1.textContent = 'DogFlork es un token meme impulsado por Solana, el cual pertenece 100% a su comunidad.';
        whatIsP2.textContent = 'En DogFlork, todo gira en torno a su comunidad, sin impuestos, sin comisiones. Juntos podemos llegar mucho más lejos de lo que imaginamos.';
        whatIsH2.textContent = '¿Qué pasó con el proyecto?';
        whatIsP3.textContent = 'El proyecto fue creado por un chico de 15 años, quien, después de varios días, decidió abandonarlo debido a las amenazas que estaba recibiendo.';
        whatIsP4.textContent = 'En ese momento, la comunidad tomó la iniciativa de recrear una página web, junto con nuevas cuentas de redes sociales activas, para revivir el proyecto y, juntos, llevarlo a la luna.';
        whatIsP5.textContent = "El creador original conservó solo el 1.44% del suministro del token y, antes de abandonar el proyecto, dijo que no movería los tokens de su billetera.";
        whatIsP6.textContent = "Suministro total: 1.000.000.000 (1 billón)";
        whatIsP7.textContent = "En circulación: 100%";
        whatIsP8.textContent = "0% de impuesto por compra/venta en DEX";
        whatIsP9.textContent = "Contrato:";
        whatIsH3.textContent = 'Compra $DogFlork';
        whatIsP10.textContent = "¡Juntos llevaremos a $DogFlork a la luna!";
        whatIsH4.textContent = 'Únete a la comunidad de DogFlork';
        whatIsP11.textContent = "Ayuda a $DogFlork a llegar a la luna";
    } else {
        localStorage.setItem('lang', 'en');
        languageLogo.src = '../03-assets/img/09-esp_flag.png';
        hidden.textContent = 'Contract copied';
        //!
        headerText.textContent = 'DogFlork - Community';
        headerDivRight2.textContent = 'Buy $DogFlork';
        mainSpan1.textContent = 'WELCOME TO';
        mainSpan2.textContent = 'DOGFLORK COMMUNITY';
        whatIsH1.textContent = 'What is DogFlork?';
        whatIsP1.textContent = 'DogFlork is a Solana-powered meme token, the token is 100% owned by its community.';
        whatIsP2.textContent = "At DogFlork, it's all about the community, no taxes, no fees. Together, we can go much further than we think.";
        whatIsH2.textContent = 'What happened with the project?';
        whatIsP3.textContent = 'The project was created by a 15 years old boy, who, after several days, decided to abandon it due to the threats he was receiving.';
        whatIsP4.textContent = 'At that moment, the community took the initiative to recreate a website, along with new active social media accounts, to revive the project and together take it to the moon.';
        whatIsP5.textContent = "The original creator kept only 1,44% of the token supply, and before leaving, he stated that he wouldn't move the tokens from his wallet.";
        whatIsP6.textContent = "Total supply: 1,000,000,000 (1 billion)";
        whatIsP7.textContent = "Circulation: 100%";
        whatIsP8.textContent = "0% buy/sell tax on DEX";
        whatIsP9.textContent = "Contract:";
        whatIsH3.textContent = 'Buy $DogFlork';
        whatIsP10.textContent = "Together, we will take $DogFlork to the moon!";
        whatIsH4.textContent = 'Join the DogFlork community';
        whatIsP11.textContent = "Help $DogFlork to reach the moon";
    }
});

function checkLanguage() {
    let lang = localStorage.getItem('lang');
    if (lang === 'es') {
        languageLogo.src = '../03-assets/img/10-eng_flag.png';
        hidden.textContent = 'Contrato copiado';
        //!
        headerText.textContent = 'DogFlork - Comunidad';
        headerDivRight2.textContent = 'Comprar $DogFlork';
        headerDivRight2.style.fontSize = '2rem';
        mainSpan1.textContent = 'BIENVENIDO A LA';
        mainSpan2.textContent = 'COMUNIDAD DE DOGFLORK';
        whatIsH1.textContent = '¿Qué es DogFlork?';
        whatIsP1.textContent = 'DogFlork es un token meme impulsado por Solana, el cual pertenece 100% a su comunidad.';
        whatIsP2.textContent = 'En DogFlork, todo gira en torno a su comunidad, sin impuestos, sin comisiones. Juntos podemos llegar mucho más lejos de lo que imaginamos.';
        whatIsH2.textContent = '¿Qué pasó con el proyecto?';
        whatIsP3.textContent = 'El proyecto fue creado por un chico de 15 años, quien, después de varios días, decidió abandonarlo debido a las amenazas que estaba recibiendo.';
        whatIsP4.textContent = 'En ese momento, la comunidad tomó la iniciativa de recrear una página web, junto con nuevas cuentas de redes sociales activas, para revivir el proyecto y, juntos, llevarlo a la luna.';
        whatIsP5.textContent = "El creador original conservó solo el 1.44% del suministro del token y, antes de abandonar el proyecto, dijo que no movería los tokens de su billetera.";
        whatIsP6.textContent = "Suministro total: 1.000.000.000 (1 billón)";
        whatIsP7.textContent = "En circulación: 100%";
        whatIsP8.textContent = "0% de impuesto por compra/venta en DEX";
        whatIsP9.textContent = "Contrato:";
        whatIsH3.textContent = 'Compra $DogFlork';
        whatIsP10.textContent = "¡Juntos llevaremos a $DogFlork a la luna!";
        whatIsH4.textContent = 'Únete a la comunidad de DogFlork';
        whatIsP11.textContent = "Ayuda a $DogFlork a llegar a la luna";
    } else {
        localStorage.setItem('lang', 'en');
        languageLogo.src = '../03-assets/img/09-esp_flag.png';
        hidden.textContent = 'Contract copied';
        //!
        headerText.textContent = 'DogFlork - Community';
        headerDivRight2.textContent = 'Buy $DogFlork';
        mainSpan1.textContent = 'WELCOME TO';
        mainSpan2.textContent = 'DOGFLORK COMMUNITY';
        whatIsH1.textContent = 'What is DogFlork?';
        whatIsP1.textContent = 'DogFlork is a Solana-powered meme token, the token is 100% owned by its community.';
        whatIsP2.textContent = "At DogFlork, it's all about the community, no taxes, no fees. Together, we can go much further than we think.";
        whatIsH2.textContent = 'What happened with the project?';
        whatIsP3.textContent = 'The project was created by a 15 years old boy, who, after several days, decided to abandon it due to the threats he was receiving.';
        whatIsP4.textContent = 'At that moment, the community took the initiative to recreate a website, along with new active social media accounts, to revive the project and together take it to the moon.';
        whatIsP5.textContent = "The original creator kept only 1,44% of the token supply, and before leaving, he stated that he wouldn't move the tokens from his wallet.";
        whatIsP6.textContent = "Total supply: 1,000,000,000 (1 billion)";
        whatIsP7.textContent = "Circulation: 100%";
        whatIsP8.textContent = "0% buy/sell tax on DEX";
        whatIsP9.textContent = "Contract:";
        whatIsH3.textContent = 'Buy $DogFlork';
        whatIsP10.textContent = "Together, we will take $DogFlork to the moon!";
        whatIsH4.textContent = 'Join the DogFlork community';
        whatIsP11.textContent = "Help $DogFlork to reach the moon";
    }
}

checkLanguage();