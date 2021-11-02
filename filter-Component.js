import { clickClearFilter } from './event-handler.js'

export const addFilter = (value, buttonList) => {
    const filterButtons = document.querySelector('.filterButtons')
    const hasFilter = document.querySelectorAll('.filterButtons div')
    if (hasFilter.length != '0') {
        const arr = Array.from(hasFilter)
        const hasAlready = arr.map((item)=>{
            if (item.className == buttonList[0].parentElement.id) {
                item.children[0].children[0].innerText = value
            }
            return item.className == buttonList[0].parentElement.id
        })
        if (hasAlready.includes(true)) return
    }
    filterButtons.append(mountOtherFilterButton(value, buttonList))
    
}

const mountOtherFilterButton = (value, buttonList) => {
    let buttonContainer = document.createElement('div')
    let button = document.createElement('button')
    let text = document.createElement('span')
    button.type = 'button'
    button.classList.add('jsNumberFoundButton')
    text.innerText = `${value}`
    text.classList.add('isFilter')
    clickClearFilter(button, buttonList)
    button.append(text)
    buttonContainer.append(button)
    buttonContainer.classList.add(`${buttonList[0].parentElement.id}`)
    return buttonContainer
}