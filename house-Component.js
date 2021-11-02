import { clickClearMenuHandler } from './event-handler.js'
import Request from "./Api-Request.js";
import { amenites } from "./parse-Amenities.js";

export const houseOfCards = async (obj) => {
    try{
        const cityObj = await obj
        const houseRequest = new Request()
        const houseObjectResponse = await houseRequest.getHouseObject(cityObj.UF, cityObj.city)
        
        const selectionBox =  document.querySelector('#typeSelection')
        selectionBox.classList.add('typeSelectionWhite')

        const cardPlacement = document.querySelector('.houseOfCards')
        const numberTextFound = document.querySelector('.numberTextFound')
        const filterButtons = document.querySelector('.filterButtons')
        const filterButtonPlacement = document.querySelector('.jsCitySearched')
        const headerPathPlacement = document.querySelector('.sitePath')
        
        mountHeaderPath(headerPathPlacement, houseObjectResponse)
        mountFindBoxButton(filterButtonPlacement, houseObjectResponse)
        mountSectionHeader(filterButtons, numberTextFound, houseObjectResponse)
        mountHouseObject(cardPlacement, houseObjectResponse)
        
    } catch(error){
        return error
    }
}


const mountHeaderPath = (placement, obj) => {
    let link = document.createElement('a')
    link.innerText = `${obj[0].stateAcronym}`
    let linkText = document.createElement('a')
    linkText.innerText = `Imóveis à venda em ${obj[0].state}`
    let point = document.createElement('span')
    let point2 = document.createElement('span')
    point.classList.add('point')
    point2.classList.add('point')
    clickClearMenuHandler(link)
    clickClearMenuHandler(linkText)
    placement.append(point)
    placement.append(link, point2, linkText)
}

const mountFindBoxButton = (filterButtonPlacement, obj) => {
    let label = document.createElement('label')
    let span = document.createElement('span')
    let button = document.createElement('button')
    span.innerText = `${obj[0].state} - ${obj[0].stateAcronym}`
    label.append(span)
    button.classList.add('jsclearSearch')
    filterButtonPlacement.append(label, button)
}

const mountSectionHeader = (filterButtons, numberTextFound, houseObject) => {
    numberTextFound.append(mountHousesFound(houseObject))
    filterButtons.append(mountFilterButton(houseObject))
}

const mountHouseObject = (cardPlacement, houseObject) => {
    const cardContainer = document.createElement('div') 
    houseObject.map((house)=>{
        const card = document.createElement('article')
        card.append(imgFactory(house))
        card.append(infoFactory(house))
        card.append(mountPricing(house))
        card.append(mountButtonsOrange(house))
        cardContainer.append(card);
        cardPlacement.append(cardContainer)
    })
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

const mountButtonsOrange = (obj) => {
    let buttonContainer = document.createElement('div')
    let telButton = document.createElement('button')
    let msgButton = document.createElement('button')
    
    buttonContainer.classList.add('buttonContainer')
    telButton.innerText = 'TELEFONE'
    msgButton.innerText = 'ENVIAR MENSAGEM'
    buttonContainer.append(telButton, msgButton)
    return buttonContainer
}

const mountHousesFound = (obj) => {
    const numberFound = document.createElement('div')
    const text = document.createElement('h1')
    text.innerHTML = `<strong>${obj.length}</strong> Imóveis à venda em ${obj[0].state} - ${obj[0].stateAcronym}`
    numberFound.append(text)
    return numberFound
}

const mountFilterButton = (obj) => {
    let buttonContainer = document.createElement('div')
    let button = document.createElement('button')
    let text = document.createElement('span')
    button.type = 'button'
    button.classList.add('jsNumberFoundButton')
    text.innerText = `${obj[0].state} - ${obj[0].stateAcronym}`
    clickClearMenuHandler(button)
    button.append(text)
    buttonContainer.append(button)
    return buttonContainer
}
