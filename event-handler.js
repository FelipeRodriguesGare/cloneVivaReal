import RequestIBGE from './IBGE-Request.js';
import { cityFormater } from './city-Formater.js';
import { houseOfCards } from  './house-Component.js'
import { addFilter } from './filter-Component.js';
import { errorDisplay } from './error-Component.js';

const ibge = new RequestIBGE()

export const clickHandlerMenu = (target, buttonsList, cssClass, type) => {   
    target.addEventListener('click', (evt) => {
        if (evt.target !== target){
            buttonsList.forEach((item)=>{
                item.classList.remove(`${cssClass}`)
                if (item === evt.target) evt.target.classList.add(`${cssClass}`)
                if (item === evt.target && type === 'round') addFilter(evt.target.value)
            })
        }
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

const removeElements = (arr) => arr.filter((value) => value.remove())

const clearPage = () => {
    const houseOfCards = document.querySelectorAll('.houseOfCards')
    const numberTextFound = document.querySelectorAll('.numberTextFound')
    const filterButtons = document.querySelectorAll('.filterButtons')
    const aboveFindButton = document.querySelectorAll('.jsCitySearched')
    const sitePath = document.querySelectorAll('.sitePath')
    const selectionBox =  document.querySelector('#typeSelection')

    selectionBox.classList.remove('typeSelectionWhite')
    let elementsInsidePath = Array.from(sitePath[0].children)
    let elementsInsideNumber = Array.from(numberTextFound[0].children)
    let elementsInsideFilter = Array.from(filterButtons[0].children)
    let elementsInsideSearched = Array.from(aboveFindButton[0].children)
    
    elementsInsidePath.filter((value,index)=>{
        if (index>2) value.remove()
    })

    removeElements(elementsInsideNumber)
    removeElements(elementsInsideSearched)
    removeElements(elementsInsideFilter)

    if (houseOfCards[0].children[0]) houseOfCards[0].children[0].remove()

}

export const inputHandler = async (inputTarget) => {
    inputTarget.addEventListener('focusout' ,(evt) => {
    if (evt.target.value) {
        clearPage()
        try {
            let formatedCity = cityFormater(evt.target.value)
            let cityObj = ibgeResponse(formatedCity)
            houseOfCards(cityObj)
        } catch {
            console.log('brubru')
            errorDisplay()

        }
        evt.target.value = ''
    }    
    })
}

export const clickClearMenuHandler = (target) => {
    target.addEventListener('click', (evt)=> {
        clearPage()
    })
}

export const clickClearFilter = (target) => {
    target.addEventListener('click', (evt)=> {

        evt.target.parentElement.parentElement.remove()
    })
}