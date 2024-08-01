<script lang="ts" setup>
import { ref, toRefs, onMounted, onUpdated} from 'vue'
import BaseModal from '@/components/modals/BaseModal.vue'
import {formatDate, reactifyObject, toReactive} from '@vueuse/core'
import CalcularTiempo from '@/utils/Calcular'
import {date} from "yup";

const showModal = ref(false)

const props = defineProps(["vehiculo"]);
let minutosTranscurridos = ref('');
const costoSugerido = ref(0);

//calculando los minutos transcurridos
function calculaCosto() {

    const {fechaEntrada} = toRefs(props.vehiculo);

    const diferenciaEnMilisegundos = CalcularTiempo.tiempoEntreFechas(fechaEntrada.value);
    const data = CalcularTiempo.tiempoTranscurridoPreciso(diferenciaEnMilisegundos);
    minutosTranscurridos.value = (data.dias > 0 ? ' Dias: ' + data.dias : '') + ' Hrs: ' + data.horas + ' Min: ' + data.minutos;
    const calcularCosto = CalcularTiempo.calcularCosto(data, 20, 100, 10);
    costoSugerido.value = calcularCosto;
}

onUpdated(() => {
  if (showModal.value) {
    calculaCosto();
  }


})
</script>

<template>
  <button type="button" class="bg-green-200 px-3 py-1 font-medium" @click="showModal = true">
    Cobrar
  </button>

  <BaseModal :show="showModal">
    <!-- Modal body -->
    <div class="max-w-md mx-auto rounded-lg shadow-lg mt-5 dark:bg-gray-700 dark:shadow-blue-100">
      <div class="px-6 py-4">
        <div class="flex flex-col w-30">
          <h2 class="font-bold text-xl dark:text-gray-100">Detalles</h2>
          <div class="border-2 border-blue-500 mb-3 text"></div>
        </div>
        <div class="text-gray-500 dark:text-gray-200">
          <p class="font-bold text-2xl mb-2">{{ props.vehiculo.placas }}</p>
          <ul class="text-gray-900 mb-2 text-md font-semibold">
            <li>Propietario: {{ props.vehiculo.propietario }}</li>
            <li>
              Fecha entrada:
              {{ formatDate(new Date(props.vehiculo.fechaEntrada), 'dddd, D MMMM YYYY HH:mm') }}
            </li>
            <li>Transcurrido
              <span class="text-xl">{{ minutosTranscurridos }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-gray-100 px-6 py-3 rounded-t-lg dark:bg-blue-100">
        <span class="font-bold text-2xl mb-2">$ <input  v-model="costoSugerido"/></span>
        <p class="text-gray-600 dark:text-gray-600">Costo sugerido</p>
        <button
            class="bg-gray-500 mt-3 mr-2 px-4 py-2 rounded font-semibold text-white"
            @click="showModal = false"
        >
          Cancelar
        </button>
        <button
            class="bg-blue-600 px-4 py-2 mt-3 rounded font-semibold text-white hover:bg-blue-700"
            @click="calculaCosto()"
        >
          Cobrar
        </button>
      </div>
    </div>
  </BaseModal>
</template>
