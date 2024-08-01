const CalcularTiempo = {
    calcularCosto(tiempoTransc, costoHora, costoDia, tolerancia) {

        const tiempos = tiempoTransc;
        let costo = 0 ;
        if (tiempos.dias > 0) {
            costo = tiempos.dias * costoDia;
        }
        if (tiempos.horas > 0) {
            costo += tiempos.horas * costoHora;
        }
        if (tiempos.minutos > tolerancia) {
            //comprobar el cobro al sobrepasar el limite de tolerancia
            costo += costoHora * 1;

        }
        console.log(tiempos);

        return costo;
    },
    tiempoEntreFechas (inicio) {
        return new Date().getTime() - new Date(inicio).getTime();
    },
    tiempoTranscurridoPreciso (diferenciaEnMilisegundos) {
        // const diasEnUnAño = 365.25;
        // const diasEnUnMes = 30.437;
        const milisegundosEnUnSegundo = 1000;
        const milisegundosEnUnMinuto = milisegundosEnUnSegundo * 60;
        const milisegundosEnUnaHora = milisegundosEnUnMinuto * 60;
        const milisegundosEnUnDia = milisegundosEnUnaHora * 24;
        // const milisegundosEnUnMes = milisegundosEnUnDia * diasEnUnMes;
        // const milisegundosEnUnAño = milisegundosEnUnDia * diasEnUnAño;
        // const años = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnAño);
        // diferenciaEnMilisegundos -= años * milisegundosEnUnAño;
        // const meses = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnMes);
        // diferenciaEnMilisegundos -= meses * milisegundosEnUnMes;
        const dias = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnDia);
        diferenciaEnMilisegundos -= dias * milisegundosEnUnDia;
        const horas = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnaHora);
        diferenciaEnMilisegundos -= horas * milisegundosEnUnaHora;
        const minutos = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnMinuto);
        diferenciaEnMilisegundos -= minutos * milisegundosEnUnMinuto;
        const segundos = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnSegundo);
        diferenciaEnMilisegundos -= segundos * milisegundosEnUnSegundo;
        return {dias,horas, minutos, segundos};
    }
}

// const tiempoEntreFechas = (inicio) => {
//     return new Date().getTime() - new Date(inicio).getTime();
// }



export default CalcularTiempo;
