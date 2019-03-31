const { getLugarLatLng } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

const getInfo = async(direccion) => {
    try {
        const coords = await getLugarLatLng(direccion)
        const temp = await getClima(coords.lat, coords.lng)
        return `El clima de ${coords.addres} es de ${temp}°C`
    } catch (error) {
        return `No se pudo obtener el clima de  ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)