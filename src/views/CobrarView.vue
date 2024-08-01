<template>
  <button
    data-modal-target="static-modal"
    data-modal-toggle="static-modal"
    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    Cobrar
  </button>

  <!-- Main modal -->
  <div
    id="static-modal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="false"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Static modal</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="static-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <div
            class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                  />
                </svg>
              </div>

              <div class="flex-1 min-w-0 ms-4">
                <label class="text-md text-gray-600"
                  >Propietario:
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{ vehiculo.propietario }}
                  </p></label
                >

                <label class="text-md text-gray-600">Descripcion: </label>
                <p class="inline-flex text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ vehiculo.descripcion }}
                </p>
              </div>
              <div class="inline-flex items-center text-gray-900 dark:text-white">
                <p class="text-xl font-bold">{{ vehiculo.placas }}</p>
              </div>
            </div>
          </div>

          <div
            class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <ul>
              <li class="flex-inline">
                <span class="text-gray-700 text-xl"
                  >Entrada: <span class="text-md">{{ props.vehiculo.fechaEntrada }} </span>
                </span>
              </li>
              <li>
                <span> Transcurrido </span>
              </li>
              <li><span>costo sugerifo</span></li>
            </ul>
          </div>
        </div>

        <div
          class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            data-modal-hide="static-modal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cobrar
          </button>
          <button
            data-modal-hide="static-modal"
            type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(['vehiculo'])
</script>
