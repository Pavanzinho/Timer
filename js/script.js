import { Sound } from "./sounds.js"
import { Selectors } from "./selectors.js"
import { Timer } from "./timer.js";
import {Event} from "./events.js"

//VARIÁVEIS
let currentMinutes=0;
let currentSeconds=0;
let timerTimeOut;

let minutes=Selectors.textMinutes;
/*OBS: AO UTILIZAR O BUTTON "STOP", PRECISA-SE FAZER COM QUE O TEMPO MOSTRADO NO DISPLAY VOLTE A SER O INICIAL, DEFINIDO NO
PROMPT NA FUNÇÃO "difineMinutes". EXECUTAR "updateDisplay(currentMinutes,currentSeconds) vai fazer com que o display seja
mostrado na tela com o valor ATUALIZADO de "currentMinutes", já que a função do cronometro "countDown" foi executada antes 
do evento "buttonStop.onclick", ou seja, o display não irá mudar o valor de minutos. Dessa forma, na função que os minutos 
são definidos ("defineMinutes"), igualei o valor de "currentMinutes" a uma variável global "minutes". Dessa forma, quando
a função que gira o cronômetro("countDown") for executada, o valor de "minutes" continuára sendo o definido no prompt.
Contudo, no evento do botão play ( buttonPlay.onclick), precisa-se igualar essa variável "minutes" e a igualar com "currentMinutes"
, pois assim, o countDown reconhece o valor de "currentMinutes" como o inicial novamente, e não como o valor atualizado.
Se não fizer isso, quando clicar em play de novo, logo após clicar em stop, o display de minutes voltara instantaneamente para o
valor onde voce clicou no stop. */



//VARIÁVEIS COM FUNÇÕES IMPORTADAS.

let sound=Sound();
let timer=Timer(
    {
        currentMinutes,
        minutes,
        currentSeconds,
        timerTimeOut,
    }
);

//EVENTOS.

const event=Event(
    {
        timer,
        sound,
        Selectors
    }
)

event.clickButtonPlay();
event.clickButtonPause();
event.clickButtonSet();
event.clickButtonSoundOn();
event.clickButtonStop();
event.clickButtonSoundOff();
