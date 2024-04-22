import { defineStore } from 'pinia'
import HttpService from './HttpService'

export interface IVehicle {
  _id?: Int32Array
  placas: string
  descripcion: string
  propietario: string
  fechaEntrada: Date
  fechaSalida?: Date
}

interface IState {
  vehicleCurrent: IVehicle
  listVehicle: IVehicle[]
}

export const useVehicleStore = defineStore('vehicleStore', {
  state: (): IState => {
    return {
      vehicleCurrent: {
        placas: '',
        descripcion: '',
        propietario: '',
        fechaEntrada: new Date()
      },
      listVehicle: []
    }
  },
  actions: {
    async addVehicle(vehicle: IVehicle) {
      const re = await HttpService.post('/addVehiculo', vehicle)

      if (re) {
        alert('registrado')
        this.vehicleCurrent = {
          placas: '',
          descripcion: '',
          propietario: '',
          fechaEntrada: new Date()
        }
      } else {
        alert('error al registar vejiculo')
      }
    },

    async getAllVehiculos(fechaInicio: string, fechaFin: string) {
      const data = await HttpService.get(
        `/vehiculos?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
      )
      this.listVehicle = data
    },

    async updateTask(vehicle: IVehicle) {
      try {
        const data = await HttpService.post('/vehiculoUpdate', vehicle)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
