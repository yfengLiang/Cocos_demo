import {
  _decorator,
  Animation,Component,
  Node,
  Input,
  input,
  RigidBody2D,
  Vec2,
  Contact2DType,
  Collider2D,
  IPhysics2DContact,
  AudioClip,
} from "cc";
import { Tags } from "./Tags";
import { GameManager } from "./GameManager";
import { AudioMgr } from "./AudioMgr";
const { ccclass, property } = _decorator;

@ccclass("Bird")
export class Bird extends Component {
  private rgb2D: RigidBody2D = null;
  @property
  rotateSpeed: number = 30;
  private _canControl: boolean = false;
  @property(AudioClip)
  clickAudio: AudioClip = null;
  onLoad() {
    input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    let collider = this.getComponent(Collider2D);
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
      collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
    }
    this.rgb2D = this.getComponent(RigidBody2D);
  }
  onDestroy() {
    input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
    let collider = this.getComponent(Collider2D);
    if (collider) {
      collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
      collider.off(Contact2DType.END_CONTACT, this.onEndContact, this);
    }
  }
  onTouchStart() {
    if (this._canControl == false) return;
    this.rgb2D.linearVelocity = new Vec2(0, 10);
    this.node.angle = 30;
    AudioMgr.inst.playOneShot(this.clickAudio);
  }

  protected update(deltaTime: number): void {
    if (this._canControl == false) return;
    this.node.angle -= this.rotateSpeed * deltaTime;
    if (this.node.angle < -40) {
      this.node.angle = -40;
    } 
  }

  public enableControl() {
    this.getComponent(Animation).enabled = true;
    this.rgb2D.enabled = true;
    this._canControl = true;
  }
  public disableControl() {
    this.getComponent(Animation).enabled = false;
    this.rgb2D.enabled = false;
    this._canControl = false;
  }
  public disableControlNotRGD() {
    this.getComponent(Animation).enabled = false;
    this._canControl = false;
  }
  // 只禁用控制 不禁用刚体
  onBeginContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {
    // 只在两个碰撞体开始接触时被调用一次
    if (otherCollider.tag === Tags.LAND || otherCollider.tag === Tags.PIPE) {
      GameManager.inst().transitionToGameOverState();
    }
  }
  onEndContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {
    // 只在两个碰撞体结束接触时被调用一次
    if (otherCollider.tag === Tags.PIPE_MIDDLE) {
      GameManager.inst().addScore();
    }
  }
}


