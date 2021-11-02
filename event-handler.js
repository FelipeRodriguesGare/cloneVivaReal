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
                if (item === evt.target && type === 'round') {
                    addFilter(evt.target.value, buttonsList)
                }
            })
        }
    })
}

export const clickHandlerToggleButton = (target, buttonsList) => {
    buttonsList.forEach((item)=>{
        item.style.background = `url(https://cdn1.vivareal.com/p/1-9637c62/v/static/app/svg/results/summary/visualization-toggle/${item.parentElement.children[0].value}-black.svg)`
    })
    target.addEventListener('click', (evt) => {
        buttonsList.forEach((item)=>{
            item.style.background = `url(https://cdn1.vivareal.com/p/1-9637c62/v/static/app/svg/results/summary/visualization-toggle/${item.parentElement.children[0].value}-black.svg)`
            item.parentElement.style.backgroundColor = 'white'
            item.parentElement.classList.add('radioButtonLabel')
        })
        buttonsList.forEach((item)=>{
            if (item == evt.target.parentElement.children[1]) {
                item.style.background = `url(https://cdn1.vivareal.com/p/1-9637c62/v/static/app/svg/results/summary/visualization-toggle/${item.parentElement.children[0].value}-blue.svg)`
                evt.target.parentElement.style.backgroundColor = '#1190cd14'
                item.parentElement.classList.add('radioButtonLabel')
            } 
        })
    })
}

const ibgeResponse = async (City) => await ibge.getCityObject(cityFormater(City))

const removeElements = (arr) => arr.filter((value) => value.remove())

const clearPage = () => {
    const houseOfCards = document.querySelectorAll('.houseOfCards')
    const numberTextFound = document.querySelectorAll('.numberTextFound')
    const filterButtons = document.querySelectorAll('.cityFilter')
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

export const clickClearFilter = (target, buttonList) => {
    target.addEventListener('click', (evt)=> {
        buttonList.forEach((item)=>{
            item.classList.remove('roundButtonClicked')
        })
        if (evt.target.parentElement.parentElement.className != 'filterButtons') evt.target.parentElement.parentElement.remove()
    })
}