import { _decorator, Component, EventTouch, Input, input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass("Ca")
export class Ca extends Component {
  start() {
    input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
  }
  onTouchStart(event: EventTouch) {
    console.log("touchStart" + event.getLocation());
  }
  onTouchEnd(event: EventTouch) {
    console.log("touchEnd" + event.getLocation());
  }
  onTouchMove(event: EventTouch) {
    // console.log("touchMove" + event.getLocation());
    // 获得移动距离
    // console.log("touchMove" + event.getDelta());
    //因为position以像素为单位移动太快了 乘以这个减慢点
    const moveScale=0.1
    const pos=this.node.position;
    //原坐标加上触摸偏移
    this.node.setPosition(
      pos.x + event.getDeltaX() * moveScale,
      pos.y + event.getDeltaY() * moveScale,
      pos.z
    );
    
  }
  update(deltaTime: number) {}
}


