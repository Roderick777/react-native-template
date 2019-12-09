import axios from 'axios';

const Api = {
    constructor() {
        this.rutaBase = 'https://redcollege.net/api/';
    },

    async login(correo, clave) {
        try {
            let ruta = this.rutaBase +'?user='+ correo +'&password='+ clave;
            let response = await axios.get(ruta);

            return response.data;
        } catch (e) {
            console.log(e);
            return 'error';
        }
    }
};

export default Api;