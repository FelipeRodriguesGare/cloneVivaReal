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
    // console.log(obj)
    divOutContainer.append(addressElement(obj))
    // divOutContainer.append(nameElement(obj))
    // divOutContainer.append(amenites(obj))
    // divOutContainer.append(housePerks(obj))
    // divOutContainer.append(pricing(obj))
    divOutContainer.classList.add('infoOutContainer')
    return divOutContainer
}

const addressElement = (obj) => {
    let adr = document.createElement('p')
    adr.innerText = obj.address
    adr.classList.add('addressContainer')
    return adr
}
const nameElement = (obj) => {

}

const housePerks = (obj) => {

}

const amenites = (obj) => {
    
}

const pricing = (obj) => {

}