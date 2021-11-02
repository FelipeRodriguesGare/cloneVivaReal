import {clickHandlerMenu, clickHandlerMenuFocus, inputHandler, clickClearMenuHandler} from './event-handler.js'
import RequestIBGE from './IBGE-Request.js';

const menuNavButtonsRadioContainer = document.querySelector('.radioMenuContainer')
const menuNavButtonsRadio = document.querySelectorAll('.radioButtonsMenu')

const menuNavBarDireta = document.querySelector('.menuTabsOutContainer')
const menuNavDireitaButtons = document.querySelectorAll('.mainRightMenuButtons')
const roomFilter = document.querySelector('#roomsFilter')
const roomFilterButtons = document.querySelectorAll('#roomsFilter button')
const parkingFilter = document.querySelector('#parkingFilter')
const parkingFilterButtons = document.querySelectorAll('#parkingFilter button')
const bathFilter = document.querySelector('#bathFilter')
const bathFilterButtons = document.querySelectorAll('#bathFilter button')
const cityInput = document.getElementById('locationSearch')
const buttonBellowFind = document.querySelector('.jsCitySearched')

clickHandlerMenu(menuNavBarDireta, menuNavDireitaButtons, 'mainRightMenuButtonsActive', 'menu')
clickHandlerMenu(roomFilter, roomFilterButtons, 'roundButtonClicked', 'round')
clickHandlerMenu(bathFilter, bathFilterButtons, 'roundButtonClicked', 'round')
clickHandlerMenu(parkingFilter, parkingFilterButtons, 'roundButtonClicked', 'round')

clickClearMenuHandler(buttonBellowFind, roomFilterButtons ,'roundButtonClicked')

// clickHandlerMenuFocus(menuNavButtonsRadioContainer, menuNavButtonsRadio)
// ESSE RADIO BUTTON É B.O. PRA MAIS TARDE /\

const ibge = new RequestIBGE()

inputHandler(cityInput)
