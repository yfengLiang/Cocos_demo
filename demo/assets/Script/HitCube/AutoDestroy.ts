import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("AutoDestroy")
export class AutoDestroy extends Component {
  start() {}

  update(deltaTime: number) {
    const pos = this.node.position;
    if (pos.y <= -10) {
      this.node.destroy();
    }
  }
}
