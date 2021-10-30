import {clickHandlerMenu, clickHandlerMenuFocus} from './click-handler.js'
import Request from "./Api-Request.js";
import {houseOfCards} from './house-Component.js'

const menuNavBarDireta = document.querySelector('.menuTabsOutContainer')
const menuNavDireitaButtons = document.querySelectorAll('.mainRightMenuButtons')
const menuNavButtonsRadioContainer = document.querySelector('.radioMenuContainer')
const menuNavButtonsRadio = document.querySelectorAll('.radioButtonsMenu')
const yellowBoxRoundButtonsContainer = document.querySelector('.roundButtonsContainer')
const yellowBoxRoundButtons = document.querySelectorAll('.roundButtonsContainer button')

clickHandlerMenu(menuNavBarDireta, menuNavDireitaButtons, 'mainRightMenuButtonsActive')
clickHandlerMenu(yellowBoxRoundButtonsContainer, yellowBoxRoundButtons, 'roundButtonClicked')

// clickHandlerMenuFocus(menuNavButtonsRadioContainer, menuNavButtonsRadio)
// ESSE RADIO BUTTON É B.O. PRA MAIS TARDE /\

// const brubru = new Request()
// brubru.getHouseObject('sp', 'sao-paulo')

houseOfCards('sp','sao-paulo')
