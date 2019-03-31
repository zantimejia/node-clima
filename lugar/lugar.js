const axios = require('axios')

const getLugarLatLng = async(direccion) => {
    const encodedURL = encodeURI(direccion)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': '368be19603msh2f2f6f47f8b1827p157e27jsn4403ee7018a6' }
    })
    const resp = await instance.get()
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }
    const data = resp.data.Results[0]
    const addres = data.name
    const lat = data.lat
    const lng = data.lon
    return {
        addres,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}