import Request from "./Api-Request.js";

export const houseOfCards = async (state, city) => {
    try{
        const houseRequest = new Request()
        const houseObject = await houseRequest.getHouseObject(state, city)
        const cardContainer = document.querySelector('.houseOfCards')
        houseObject.map((house)=>{
            const card = document.createElement('article')
            card.append(imgFactory(house))
            card.append(infoFactory(house))
            cardContainer.append(card);
        })

    } catch(error){
        return error
    }
}

const imgFactory = (obj) => {
    let imgContainer = document.createElement('div')
    let imgElement = document.createElement('img')
    imgContainer.classList.add('imageWrapper')
    imgElement.src = `${obj.mediaUrl}`
    imgContainer.append(imgElement)
    return imgContainer
}

const infoFactory = (obj) => {
    let divOutContainer = document.createElement('div')
    divOutContainer.append(mountCardHeaderElement(obj))
    divOutContainer.append(mountHouseAmenities(obj))
    // divOutContainer.append(addressElement(obj))
    // divOutContainer.append(nameElement(obj))
    // divOutContainer.append(amenites(obj))
    // divOutContainer.append(housePerks(obj))
    // divOutContainer.append(pricing(obj))
    divOutContainer.classList.add('infoOutContainer')
    return divOutContainer
}

const mountCardHeaderElement = (obj) => {
    let adr = document.createElement('div')
    adr.classList.add('divHeader')
    adr.append(addressElement(obj))
    adr.append(nameElement(obj))
    return adr
}

const addressElement = (obj) => {
    let adr = document.createElement('span')
    adr.innerText = obj.address
    adr.classList.add('addressContainer')
    return adr
}

const nameElement = (obj) => {
    let name = document.createElement('span')
    name.innerText = obj.houseName
    name.classList.add('nameContainer')
    return name
}

const amenites = (item) => {
    const parseToPortuguese = {
        PARTY_HALL: 'Salão de Festas',
        FURNISHED: 'Mobiliado',
        FIREPLACE: 'Lareira',
        POOL: 'Piscina',
        BARBECUE_GRILL: 'Churrasqueira',
        AIR_CONDITIONING: 'Ar Condicionado',
        ELEVATOR: 'Elevador',
        BICYCLES_PLACE: 'Bicicletário',
        GATED_COMMUNITY: 'Condomínio Fechado',
        PLAYGROUND: 'Playground',
        SPORTS_COURT: 'Área de Esportes',
        PETS_ALLOWED: 'Animais Permitidos',
        AMERICAN_KITCHEN: 'Cusinha Americana',
        TENNIS_COURT: 'Quadra de Tennis',
        LAUNDRY: 'Lavanderia',
        GYM: 'Academia'
    } 
    return parseToPortuguese[item]
}

const mountHouseAmenities = (obj) => {
    let amenitiesContainer = document.createElement('ul')
    obj.amenities.forEach((item)=>{
        let amenitiesElement = document.createElement('li')
        let parsedAmenities = amenites(item)
        amenitiesElement.append(parsedAmenities)
        amenitiesContainer.append(amenitiesElement)
    })
    amenitiesContainer.classList.add('amenitiesContainer')
    return amenitiesContainer
}


const housePerks = (obj) => {

}


const pricing = (obj) => {

}