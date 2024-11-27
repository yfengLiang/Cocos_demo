import { _decorator, Button, Component, log,director, game, Node } from "cc";
import { eventTarget } from './zhuanpan/gameMap';
const { ccclass, property } = _decorator;

@ccclass("goHome")
export class goHome extends Component {
  // 创建单例
  //   static instance: goHome = null;
    @property(Button)
    btnHome:Button=null
  protected onLoad(): void {
    this.toggleActive(false);
    director.addPersistRootNode(this.node);
    eventTarget.on("setBackBtnVisibility", this.toggleActive.bind(this));
  }

  toggleActive(flag: boolean) {
    this.node.active = flag;
  }
    backToHome() {
      this.toggleActive(false)
      director.loadScene('Home')
    }
}


