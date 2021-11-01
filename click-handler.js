import RequestIBGE from './IBGE-Request.js';
import { cityFormater } from './city-Formater.js';
import {houseOfCards} from  './house-Component.js'

const ibge = new RequestIBGE()

export const clickHandlerMenu = (target, buttonsList, cssClass) => {   
    target.addEventListener('click', (evt) => {
        buttonsList.forEach((item)=>{
            item.classList.remove(`${cssClass}`)
        })
        buttonsList.forEach((item)=>{
            if (item == evt.target) evt.target.classList.add(`${cssClass}`)
        })
    })
}

export const clickHandlerMenuFocus = (target, buttonsList) => {
    target.addEventListener('click', (evt) => {
        console.log(evt.target.value)

        buttonsList.forEach((item)=>{
            if (item== evt.target) evt.target.focus()
        })
    })
}

const ibgeResponse = async (City) => await ibge.getCityObject(cityFormater(City))

export const inputHandler = async (inputTarget) => {
    inputTarget.addEventListener('focusout' ,(evt) => {
    let formatedCity = cityFormater(evt.target.value)
    let cityObj = ibgeResponse(formatedCity)
    houseOfCards(cityObj)
    })
}
