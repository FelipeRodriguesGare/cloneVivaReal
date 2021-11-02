import {clickHandlerMenu, inputHandler, clickClearMenuHandler, clickHandlerToggleButton} from './event-handler.js'
import RequestIBGE from './IBGE-Request.js';


const menuNavBarDireta = document.querySelector('.menuTabs')
const menuNavDireitaButtons = document.querySelectorAll('.mainRightMenuButtons')
const roomFilter = document.querySelector('#roomsFilter')
const roomFilterButtons = document.querySelectorAll('#roomsFilter button')
const parkingFilter = document.querySelector('#parkingFilter')
const parkingFilterButtons = document.querySelectorAll('#parkingFilter button')
const bathFilter = document.querySelector('#bathFilter')
const bathFilterButtons = document.querySelectorAll('#bathFilter button')
const cityInput = document.getElementById('locationSearch')
const buttonBellowFind = document.querySelector('.jsCitySearched')


const radioContainer = document.querySelector('.radioContainer')
const radioLabel = document.querySelectorAll('.radioButtonLabel')

clickHandlerToggleButton(radioContainer, radioLabel)

clickHandlerMenu(menuNavBarDireta, menuNavDireitaButtons, 'mainRightMenuButtonsActive', 'menu')
clickHandlerMenu(roomFilter, roomFilterButtons, 'roundButtonClicked', 'round')
clickHandlerMenu(bathFilter, bathFilterButtons, 'roundButtonClicked', 'round')
clickHandlerMenu(parkingFilter, parkingFilterButtons, 'roundButtonClicked', 'round')

clickClearMenuHandler(buttonBellowFind, roomFilterButtons ,'roundButtonClicked')

const ibge = new RequestIBGE()

inputHandler(cityInput)


