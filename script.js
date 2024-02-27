const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const DIA = document.getElementById("dia");
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const PESO = document.getElementById('peso');

CALCULAR.addEventListener('click', () => {
    const DATO = parseFloat(PESO.value);
    if (DATO > 0) {
        ERROR.style.display = 'none';
        ERROR.innerHTML = "Debe completar todos los datos";

        let flujo, mantenimiento, volDiario, sc;
        if (DATO <= 30) {
             volDiario = calcFlujoHollidaySegar(DATO);
             flujo = Math.round(volDiario/24)
            mantenimiento = Math.round(flujo);
            FLU.innerHTML = flujo + ' cc/hr';
            DIA.innerHTML =  volDiario + ' cc/dia';
            MAN.innerHTML = 'm+m/2: ' + Math.floor(mantenimiento*1.5) + ' cc/hr';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
            DIA.style.display = "block";
        } else {
            sc = superficie(DATO);
            r1= Math.round(sc * 1500);
            r2= Math.round(sc * 2000);
            FLU.innerHTML = "SC * 1500: " + r1  + " cc";
            MAN.innerHTML = "SC * 2000: " + r2 + " cc";
            FLU.style.display = "block";
            MAN.style.display = "block"
        }
    } else {
        ERROR.style.display = 'block';
        ERROR.innerHTML = "Debe completar todos los datos";
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        DIA.style.display = "none";
    }
});

function superficie(valor) {
    return ((valor * 4) + 7) / (valor + 90);
}

function calcFlujoHollidaySegar(valor) {
    let resultado = 0;
    if (valor <= 10) {
        resultado = valor * 100;
    } else if (valor <= 20) {
        resultado = 1000 + ((valor - 10) * 50);
    } else {
        resultado = 1000 + 500 + ((valor - 20) * 20);
    }
    return resultado;
}

/*let button = document.getElementById ("calcular");

button.addEventListener("click", calcular);

function calcular(){
    console.log ("calcular")
}*/ 