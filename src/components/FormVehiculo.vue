<template>
  <h1 class="block text-center text-xl font-bold text-gray-900">Registrar Vehiculo</h1>

  <form class="max-w-sm mx-auto pt-11">
    <div
      class="flex text-center items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
      role="alert"
    >
      <svg
        class="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <span class="sr-only">Info</span>
      <div><span class="font-medium">Aviso!</span> Verifique los datos antes de guardar</div>
    </div>

    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Placa</label>

      <input
        v-model="vehicleCurrent.placas"
        type="text"
        class="rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="HFC-000"
        required
      />
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Propetario</label>
      <input
        type="text"
        v-model="vehicleCurrent.propietario"
        class="rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="nombre"
        required
      />

      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Descripcion</label
      >
      <textarea
        id="message"
        rows="4"
        v-model="vehicleCurrent.descripcion"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Color, marca u otra descripcion"
      ></textarea>
      <label class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
        Establecer fecha y hora de entrada
      </label>

      <input
        type="datetime-local"
        v-model="vehicleCurrent.fechaEntrada"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <div class="flex flex-inline center">
      <button
        @click.prevent="saveVehicle"
        class="w-full my-4 text-white bg-blue-700 hover:bg-blue-800 font-bold focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Registrar
      </button>
      <button
        type="button"
        class="w-full my-4 text-white bg-gray-400 hover:bg-red-700 font-bold focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Cancelar
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

import { mapState, mapActions } from 'pinia'
import { useVehicleStore } from '@/stores/vehicle.store'

export default defineComponent({
  components: {
    // VueDatePicker
  },

  setup() {
    const showAlert = ref(true)

    // let today = new Date().toISOString().substr(0, 16)
    // const timestamp = today
    var tzoffset = new Date().getTimezoneOffset() * 60000 //offset in milliseconds
    const localISOTime = new Date(Date.now() - tzoffset).toISOString().slice(0, 16)
    return {
      showAlert,

      vehicleCurrent: {
        fechaEntrada: localISOTime
      }
    }
  },
  methods: {
    ...mapActions(useVehicleStore, ['addVehicle']),
    saveVehicle() {
      this.addVehicle(this.vehicleCurrent)
    }
  },
  computed: {
    ...mapState(useVehicleStore, ['vehicleCurrent'])
  }
})
</script>
