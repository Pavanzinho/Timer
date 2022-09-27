const buttonPlay=document.querySelector('.play')
const buttonPause=document.querySelector('.pause')
const buttonSet=document.querySelector('.set')
const buttonStop=document.querySelector('.stop')
const buttonSoundOn=document.querySelector('.sound-on')
const buttonSoundOff=document.querySelector('.sound-off')
let controlMinutes=document.querySelector('.minutes')
let controlSeconds=document.querySelector('.seconds')
let textMinutes=controlMinutes.textContent; 
let textSeconds=controlSeconds.textContent; 


export const Selectors={
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    controlMinutes,
    controlSeconds,
    textMinutes,
    textSeconds
}

