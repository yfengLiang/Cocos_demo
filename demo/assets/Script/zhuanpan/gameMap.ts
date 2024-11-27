import { _decorator,EventTarget, Component, Label, Node, Prefab, Sprite, SpriteFrame, sys, UITransform, director } from 'cc';
import { CoinDrop } from './CoinDrop';
import { AppNotification } from './AppNotification';
const { ccclass, property } = _decorator;
export const eventTarget = new EventTarget();
@ccclass("gameMap")
export class gameMap extends Component {
  @property(SpriteFrame)
  num: SpriteFrame[] = [];
  @property(SpriteFrame)
  bg: SpriteFrame[] = [];
  @property(Node)
  betTypeList: Node = null;
  @property(Node)
  timeContainer: Node = null;
  currentIndex: number = 0;
  @property(Label)
  selected: Label = null;
  timeData: number = 3;
  @property(Node)
  historyList: Node = null;
  @property(Label)
  historyItem: Label = null;
  /** 金币数值Label */
  @property(Label)
  coinNumLabel: Label = null;
  // weights: number[] = [9, 9, 1, 9, 9, 4, 9, 3];
  weights: number[] = [0, 0, 0, 0, 0, 9, 0, 0];
  new: string[] = [];

  @property(Label)
  Round: Label = null;
 

  onLoad() {
    // director.emit("setBackBtnVisibility", true);
    this.initBat();
    this.startTImer();
    if (!sys.localStorage.getItem("myHistory")) {
      this.new = [];
    }
//  eventTarget.on(
//    "MyEvent1",
//    (arg) => {
//      console.log("收到MyEvent事件:" + arg);
//    },
//    this
//  );

    // let timeData = 29
  }
  startTImer() {
    let timer = setInterval(() => {
      if (this.timeData > -1) {
        let data = this.setTime(this.timeData);
        this.timeData--;
        let time = this.timeContainer.children;
        data.forEach((item, index) => {
          time[index].getComponent(Sprite).spriteFrame = this.num[item];
        });
      } else {
        clearInterval(timer);
        this.updataeBg();
      }
    }, 1000);
  }
  initBat() {
    let betList = this.betTypeList.children;
    betList.forEach((node) => {
      node.getComponent(Sprite).spriteFrame = this.bg[0];
    });
  }
  updataeBg() {
    let betList = this.betTypeList.children;
    // 随机化旋转圈数
    let minRotations = 3; // 最小圈数
    let maxRotations = 5; // 最大圈数
    let randomRotations = Math.floor(
      Math.random() * (maxRotations - minRotations) + minRotations
    );
    // 旋转的总时长等于圈数 × 每圈格子数量 × 每次旋转间隔
    let rotationDuration = randomRotations * betList.length * 200; // 每格 200ms，完整圈数时间
    let intervalDuration = 200; // 每次旋转间隔
    // 确保旋转的总步数与随机的圈数匹配;
    let rotations = Math.ceil(rotationDuration / intervalDuration); // 总旋转次数

    let counter = 0;
    let timer = setInterval(() => {
      // 每次清除所有格子的背景
      betList.forEach((node) => {
        node.getComponent(Sprite).spriteFrame = this.bg[0];
      });

      // 更新当前的选中索引
      if (this.currentIndex === 7) {
        this.currentIndex = 0; // 回到初始状态
      } else {
        this.currentIndex++; // 正常递增
      }

      // 设置当前选中的格子背景
      betList[this.currentIndex].getComponent(Sprite).spriteFrame = this.bg[1];

      counter++;
      // 旋转结束前最后一圈设定停止位置
      if (counter >= rotations) {
        clearInterval(timer); // 停止旋转

        // 根据权重随机确定最终停下的位置
        let totalWeight = this.weights.reduce((sum, w) => sum + w, 0);
        let randomValue = Math.random() * totalWeight;
        let cumulative = 0;
        for (let i = 0; i < this.weights.length; i++) {
          cumulative += this.weights[i];
          if (randomValue < cumulative) {
            this.currentIndex = i; // 确定权重选中索引
            break;
          }
        }

        // 设置最终选中的格子背景
        betList.forEach((node) => {
          node.getComponent(Sprite).spriteFrame = this.bg[0];
        });
        betList[this.currentIndex].getComponent(Sprite).spriteFrame =
          this.bg[1];

        // this.selected.string = (this.currentIndex + 1).toString();
        this.selected.string = betList[this.currentIndex]
          .getChildByName("Label")
          .getComponent(Label).string;

        this.new.push(this.selected.string);
        sys.localStorage.setItem("myHistory", JSON.stringify(this.new));
        this.historyItem.string = JSON.parse(
          sys.localStorage.getItem("myHistory")
        )
          .reverse()
          .join(" ");
          
        if (this.currentIndex === 5) {
          // this.triggerCoinAnimation();
          //  eventTarget.on("triggerCoinAnimation", ()=>{});
          //  eventTarget.emit("triggerCoinAnimation");
          //  console.log('1');
            // eventTarget.on(
            //   "triggerCoinAnimation",
            //   ()=>{
            //     this.node.getComponent(CoinDrop).palyAnim();
            //   }
            // );
            //  eventTarget.on(
            //    "MyEvent1",
            //    (arg) => {
            //      console.log("收到MyEvent事件:" + arg);
            //    },
            //    this
            //  );
            // AppNotification.emit(
            //   "triggerCoinAnimation"
            // );
            AppNotification.emit(
              "triggerCoinAnimation"
            );
           
        }
        this.coinNumLabel.string = (
          Number(this.coinNumLabel.string) + 1
        ).toString();
        this.Round.string =(Number(this.Round.string)+1).toString();
        
        // 旋转完成后重启计时器
        this.timeData = 3; // 重置时间
        this.startTImer(); // 重新启动倒计时
       
      }
    }, intervalDuration);
  }

  loadCoin() {
    const value = sys.localStorage.getItem("myHistory");

    if (value) {
      console.log(value);
    } else {
      console.log("is not exist");
    }
  }
  setTime(num) {
    let numStr: string[] = [];
    if (num < 10) {
      numStr = ["0", num.toString()];
    } else {
      numStr = num.toString().split("");
    }
    return numStr;
  }
}


