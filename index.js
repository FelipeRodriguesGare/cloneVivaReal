import {clickHandlerMenu, clickHandlerMenuFocus, inputHandler} from './click-handler.js'
import RequestIBGE from './IBGE-Request.js';

const menuNavBarDireta = document.querySelector('.menuTabsOutContainer')
const menuNavDireitaButtons = document.querySelectorAll('.mainRightMenuButtons')
const menuNavButtonsRadioContainer = document.querySelector('.radioMenuContainer')
const menuNavButtonsRadio = document.querySelectorAll('.radioButtonsMenu')
const yellowBoxRoundButtonsContainer = document.querySelector('.roundButtonsContainer')
const yellowBoxRoundButtons = document.querySelectorAll('.roundButtonsContainer button')
const cityInput = document.getElementById('locationSearch')

clickHandlerMenu(menuNavBarDireta, menuNavDireitaButtons, 'mainRightMenuButtonsActive')
clickHandlerMenu(yellowBoxRoundButtonsContainer, yellowBoxRoundButtons, 'roundButtonClicked')

// clickHandlerMenuFocus(menuNavButtonsRadioContainer, menuNavButtonsRadio)
// ESSE RADIO BUTTON É B.O. PRA MAIS TARDE /\

const ibge = new RequestIBGE()

inputHandler(cityInput)
