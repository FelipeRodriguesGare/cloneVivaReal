
export const errorDisplay = (err) => {

    const cardPlacement = document.querySelector('.houseOfCards')
    const errorContainer = document.createElement('div')
    const ops = document.createElement('span')
    ops.innerText = 'OOOOPS!'

    const algo = document.createElement('span')
    algo.innerText = 'ALGO DEU ERRADO NA SUA BUSCA.'

    const tente = document.createElement('spoan')
    tente.innerText = 'POR FAVOR, TENTE NOVAMENTE'
    
    const errorMsg = document.createElement('span')
    errorMsg.innerText = err.message
    errorMsg.classList.add('errorMsg')

    errorContainer.classList.add('errorContainer')
    errorContainer.append(ops, algo, errorMsg, tente)

    cardPlacement.append(errorContainer)
}