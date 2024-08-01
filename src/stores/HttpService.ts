const RUTA_SERVIDOR = 'http://localhost:5000'

const manejarRespuesta = async (respuesta : any) => {
  const respuestaDecodificada = await respuesta.json();
  if (respuestaDecodificada.error  ) {
    throw new Error(JSON.stringify(respuestaDecodificada.error))
  }

  return respuestaDecodificada.data;
}
const HttpService = {
  post: async (ruta: string, datos: any ) => {
    const respuestaRaw = await fetch(RUTA_SERVIDOR + ruta, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })

    return await manejarRespuesta(respuestaRaw)
  },
  put: async (ruta: string, datos: object) => {
    const respuestaRaw = await fetch(RUTA_SERVIDOR + ruta, {
      credentials: 'include',
      method: 'PUT',
      body: JSON.stringify(datos)
    })
    return await manejarRespuesta(respuestaRaw)
  },
  get: async (ruta: string) => {
    const respuestaRaw = await fetch(RUTA_SERVIDOR + ruta, {
      method: 'GET'
    })

    return await manejarRespuesta(respuestaRaw)
  },
  delete: async (ruta: string) => {
    const respuestaRaw = await fetch(RUTA_SERVIDOR + ruta, {
      credentials: 'include',
      method: 'DELETE'
    })
    return await manejarRespuesta(respuestaRaw)
  }
}
export default HttpService
