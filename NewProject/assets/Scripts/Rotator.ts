import { _decorator, Component, math, Node, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Rotator')
export class Rotator extends Component {
    rotateSpeed;
    start() {
    }

    update(deltaTime: number) {
        this.rotateSpeed = deltaTime * 10;
        this.node.eulerAngles = new Vec3(this.node.eulerAngles.x + this.rotateSpeed, this.node.eulerAngles.y + this.rotateSpeed, 40);
    }
}


