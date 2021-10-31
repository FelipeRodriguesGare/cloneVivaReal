import Request from "./Api-Request.js";
import { amenites } from "./parse-Amenities.js";

export const houseOfCards = async (state, city) => {
    try{
        const houseRequest = new Request()
        const houseObject = await houseRequest.getHouseObject(state, city)
        const cardContainer = document.querySelector('.houseOfCards')
        houseObject.map((house)=>{
            const card = document.createElement('article')
            card.append(imgFactory(house))
            card.append(infoFactory(house))
            card.append(mountPricing(house))
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
    divOutContainer.append(mountHousePerks(obj))
    divOutContainer.append(mountHouseAmenities(obj))
    
    // divOutContainer.append(mountPricing(obj))

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

const mountHousePerks = (obj) => {
    let perksContainer = document.createElement('ul')
    perksContainer.classList.add('perksContainer')
    perksContainer.innerHTML = `
        <li><span class="perkNumber">${obj.houseSize}</span><span> m² </span></li>    
        <li><span class="perkNumber">${obj.bedrooms}</span><span> Quartos </span></li>    
        <li><span class="perkNumber">${obj.bathroom}</span><span> Banheiros </span></li>    
        <li><span class="perkNumber">${obj.parking}</span><span> Vaga </span></li>    
    `
    return perksContainer
}

const formatNumber = (number) => new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL', maximumFractionDigits: 0,}).format(number)

const mountPricing = (obj) => {
    let housePrice = document.createElement('div')
    let price = document.createElement('p')
    let formatedPrice = formatNumber(obj.price)
    price.innerText = formatedPrice
    price.classList.add('priceContainer')
    housePrice.append(price)
    housePrice.classList.add('priceBlockContainer')
    if (obj.type === "APARTMENT" || obj.type === "CONDOMINIUM") {
        let condo = document.createElement('div')
        condo.classList.add('condoContainer')
        condo.innerHTML = `<span>Condomínio: </span> <span class='perkNumber'> --- </span>`
        if (obj.condoFee) condo.innerHTML = `<span>Condomínio: </span> <span class='perkNumber'> ${formatNumber(obj.condoFee)} </span>`
        housePrice.append(condo)
    } 
    return housePrice
}
