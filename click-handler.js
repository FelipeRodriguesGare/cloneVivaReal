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