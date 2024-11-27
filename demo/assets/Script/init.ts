import { _decorator, Component, director, Node, ProgressBar, Button, instantiate, Prefab, Label, NodeEventType, tween, Vec3, resources, find } from "cc";
const { ccclass, property } = _decorator;

enum sceneList {
  "HitCube" = "打砖块",
  "Turntable"="转盘抽奖",
}

@ccclass("init")
export class init extends Component {
  @property(Node)
  scrollContent: Node = null;
  @property(Prefab)
  item: Prefab = null;
  onLoad() {
    this.initScrollItem();
  }
  initScrollItem(){
      for (let key in sceneList) {
        let scrollItem = instantiate(this.item);
        scrollItem.getChildByName("Label").getComponent(Label).string =
          sceneList[key];
        scrollItem.on(
          NodeEventType.TOUCH_END,
          () => {
            tween(scrollItem)
              .to(0.1, { scale: new Vec3(1.05, 1.05, 1.05) })
              .to(0.1, { scale: new Vec3(1, 1, 1) })
              .start();
            director.loadScene("Init");
            this.createUI(key);
          },
          this
        );
        this.scrollContent.addChild(scrollItem);
      }
  }
  // createUI(name) {
  //   let percent = 0;
  //   const interval = 0.05;
  //   const increment = 0.02;

  //   const timer = setInterval(() => {
  //     if (percent < 1) {
  //       percent += increment;
  //       this.setBar(percent);
  //     }
  //   }, interval * 1000);

  //   // 模拟加载时间
  //   this.scheduleOnce(() => {
  //     clearInterval(timer);
  //     this.setBar(1);
  //     resources.load("prefabs/" + name, Prefab, (err, prefab) => {
  //       if (err) {
  //         console.error("加载 Home 预制体出错:", err);
  //         return;
  //       }
  //       const n = instantiate(prefab);
  //       n.parent = find("Canvas/Game");
  //     });
  //   }, 1);
  // }
  // setBar(num: number) {
  //   this.progressBar.progress = num;
  // }
  // onLoad() {
  //   for (let key in sceneList) {
  //     let scrollItem = instantiate(this.item);
  //     scrollItem.getChildByName("Label").getComponent(Label).string =
  //       sceneList[key];
  //     scrollItem.on(
  //       NodeEventType.TOUCH_END,
  //       () => {
  //         tween(scrollItem)
  //           .to(0.1, { scale: new Vec3(1.05, 1.05, 1.05) })
  //           .to(0.1, { scale: new Vec3(1, 1, 1) })
  //           .start();
  //         director.loadScene("Init");
  //         this.createUI(key);
  //       },
  //       this
  //     );
  //     this.scrollContent.addChild(scrollItem);
  //   }
  // }
}
