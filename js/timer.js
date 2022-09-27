import { Selectors } from "./selectors.js"



export function Timer({
    currentMinutes,
    minutes,
    currentSeconds,
    timerTimeOut,
    seconds
})
{
    
 
    function defineMinutes(){
        minutes=currentMinutes=Number(prompt("Quantos minutos ?"));
        updateDisplay(currentMinutes,0)
    }
    
    function updateDisplay(currentMinutes,currentSeconds){
        
        currentMinutes=currentMinutes===undefined ? 0:currentMinutes;
        seconds=currentSeconds=currentSeconds===undefined? 0: currentSeconds;
    
        Selectors.controlMinutes.textContent=String(currentMinutes).padStart(2, "0");
        Selectors.controlSeconds.textContent=String(currentSeconds).padStart(2, "0");
    }
    
    
    
    
    function countDown(){
       timerTimeOut=setTimeout(function(){
           
        
        let finish= currentMinutes<=0 && currentSeconds<=0
            if(finish){
                return
            }
    
        if(currentSeconds<=0){
            
            currentSeconds=60;
    
    
            --currentMinutes
        }
    
        currentSeconds=currentSeconds-1
        updateDisplay(currentMinutes,currentSeconds)
    
        countDown(); //tentar entenderi isso melhor.
    
        },1000 )
    }
    
    function resetTimer(){
        clearTimeout(timerTimeOut);
        updateDisplay(minutes,0)
        currentSeconds=0
        currentMinutes=minutes

    }

    function hold(){
        clearTimeout(timerTimeOut)
        Selectors.buttonPlay.classList.remove('hide');
        Selectors.buttonPause.classList.add('hide');
    }

    return{
        defineMinutes,
        updateDisplay,
        countDown,
        resetTimer,
        hold
    }
}