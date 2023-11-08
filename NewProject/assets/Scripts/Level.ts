import { _decorator, Component, Node, systemEvent, SystemEvent, EventMouse, debug } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Level')
export class Level extends Component {

    @property
    clickCount = 3.;

    gameEnded = false;
    EventSystem = systemEvent;
    
    start() {
        this.EventSystem.on(SystemEvent.EventType.MOUSE_DOWN, this.mouseClick, this);
    }
    
    mouseClick(event: MouseEvent) {
        this.clickCount--;
        console.log("minus click")

        if(this.clickCount <= 0) {
            this.EventSystem.off(SystemEvent.EventType.MOUSE_DOWN);
            this.EventSystem.on(SystemEvent.EventType.MOUSE_DOWN, this.installFullGame, this);
            console.log("GameEnded event!1");
        }
    }


    installFullGame(event: MouseEvent) {
        console.log("InstallFullGame")
    }

    update(deltaTime: number) {
        
    }
}


