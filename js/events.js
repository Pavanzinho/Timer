
export function Event({timer,sound,Selectors}){

    function clickButtonPlay(){
        Selectors.buttonPlay.onclick=()=>{
            Selectors.buttonPlay.classList.add('hide');
            Selectors.buttonPause.classList.remove('hide');
            Selectors.buttonSet.classList.add('hide');
            Selectors.buttonStop.classList.remove('hide');
            
        
            sound.pressbutton();
            timer.countDown();
        }
    }

    function clickButtonPause(){
        Selectors.buttonPause.onclick=()=>{
            sound.pressbutton();
            timer.hold();
        
        }
    }

    function clickButtonSet(){
        Selectors.buttonSet.onclick=()=>{
    
            timer.defineMinutes() 
        }
    }

    function clickButtonStop(){
        Selectors.buttonStop.onclick=()=>{
            Selectors.buttonSet.classList.remove('hide');
            Selectors.buttonStop.classList.add('hide');
            Selectors.buttonPlay.classList.remove('hide');
            Selectors.buttonPause.classList.add('hide');
        
            sound.pressbutton();
        
            timer.resetTimer();
        
        }
    }   

    function clickButtonSoundOn(){
        Selectors.buttonSoundOn.onclick=()=>{
            Selectors.buttonSoundOn.classList.add('hide');
            Selectors.buttonSoundOff.classList.remove('hide');
        
            sound.bgAudio.play();
        }
    }

    function clickButtonSoundOff(){
        Selectors.buttonSoundOff.onclick=()=>{
            Selectors.buttonSoundOn.classList.remove('hide');
            Selectors.buttonSoundOff.classList.add('hide');
        
            sound.bgAudio.pause();
        }
    }

    return{
        clickButtonPlay,
        clickButtonPause,
        clickButtonSet,
        clickButtonStop,
        clickButtonSoundOn,
        clickButtonSoundOff
    }





}