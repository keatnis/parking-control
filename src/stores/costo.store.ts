import {defineStore} from "pinia";
import HttpService from "@/stores/HttpService";

export interface ICosto {
    _id?: Int8Array
    costoHora: number
    minutosRedondear: number
    tolerancia: number

}
interface IState {
    costCurrent: ICosto,
    listCosto: ICosto[]
}

export const useCostStore= defineStore('costStore' ,
    {
      state: (): IState => {
          return {
              costCurrent: {
                  costoHora: 0,
                  minutosRedondear:0,
                  tolerancia: 0
              },
              listCosto: []
          }

      },
      actions: {
          async addCosto(costo : ICosto) {
              const resp = await HttpService.post('/ajustes_costos',costo);
                console.log(resp)

          },
          async getDataCost() {
              const data = await HttpService.get('/ajustes_costos');
              this.listCosto =data;
          }

      }
    })