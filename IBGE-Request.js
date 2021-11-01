import { cityFormater } from "./city-Formater.js";

class RequestIBGE {

    async makeRequest(url) {
        try{
            const response = await fetch(url)
            return await response.json();
        } catch {
            throw new Error ("Server request failed!")
        }
    }

    async getCityObject(city) {
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${city}`
        try {
            const response = await this.makeRequest(url);
            let final = {city: city, UF: (response.microrregiao.mesorregiao.UF.sigla).toLowerCase()}
            return final
        } catch (err) {
            console.log(err)
        }
    }
}

export default RequestIBGE