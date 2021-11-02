import { clickClearFilter } from './event-handler.js'

export const addFilter = (value) => {
    const filterButtons = document.querySelector('.filterButtons')
    filterButtons.append(mountOtherFilterButton(value))
}

const mountOtherFilterButton = (value) => {
    let buttonContainer = document.createElement('div')
    let button = document.createElement('button')
    let text = document.createElement('span')
    button.type = 'button'
    button.classList.add('jsNumberFoundButton')
    text.innerText = `${value}`
    text.classList.add('isFilter')
    clickClearFilter(button)
    button.append(text)
    buttonContainer.append(button)
    return buttonContainer
}