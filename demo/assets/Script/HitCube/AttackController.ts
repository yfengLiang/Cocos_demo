import { _decorator, Component, EventTouch, Input, input, Node,Prefab,instantiate, RigidBody, Vec3} from "cc";
const { ccclass, property } = _decorator;

@ccclass("AttackController")
export class AttackController extends Component {
  @property(Prefab) //加这个就可以直接在cocos里面改了
  public bulletPrefab: Prefab = null;
  @property(Node)
  public bulletParent:Node=null;
  @property
  public bulletSpeed: number = 30;
  // 预制体Prefab 实例Instan
  start() {
    input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
  }
  onTouchStart(event: EventTouch) {
    const bullet = instantiate(this.bulletPrefab);
    bullet.setParent(this.bulletParent);
    //设置子弹位置
    bullet.setPosition(0,0,0);
    // 设置世界坐标
    bullet.setWorldPosition(
      this.node.position.x,
      this.node.position.y,
      this.node.position.z-10);
    //设置子弹速度，通过刚体组件
    const rgd = bullet.getComponent(RigidBody);
    //设置速度
    rgd.setLinearVelocity(new Vec3(0, 0, -this.bulletSpeed));
  }
  update(deltaTime: number) {}
}
