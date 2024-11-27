import { _decorator , CCInteger, Component, director, instantiate, Label, Node, NodePool, Prefab, repeat, tween, UITransform, v3, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import { AppNotification } from './AppNotification';
@ccclass("CoinDrop")
export class CoinDrop extends Component {
  //coinCount，金币数量，金币爆开时的总数。
  // minRadius，最小半径，金币爆开的最近距离。
  // maxRadius，最大半径，金币爆开的最远距离。
  // duration1，下落动画持续时间。
  // duration2，到达目标动画持续时间

  /** 金币预制节点 */
  @property(Prefab)
  coinPrefab: Prefab = null;

  /** 金币节点池 */
  coinPool: NodePool = null;
  @property(Node)
  startNode: Node = null;
  /** 金币动画终点 */
  @property(Node)
  endNode: Node = null;

  onLoad() {
    this.initPool();
  }
  // 先预设放入节点池
  initPool(count: number = 20) {
    this.coinPool = new NodePool();
    for (let i = 0; i < count; i++) {
      let coin = instantiate(this.coinPrefab);
      this.coinPool.put(coin);
    }
    AppNotification.on("triggerCoinAnimation", this.palyAnim, this);
    console.log("2");
  }

  //   从节点池取出节点
  getCoinNode() {
    let coin = null;
    if (this.coinPool.size() > 0) {
      coin = this.coinPool.get();
    } else {
      coin = instantiate(this.coinPrefab);
    }
    return coin;
  }
  /**
   * 金币飞向钱包的动画
   *
   * @param {number} count 金币数量
   * @param {cc.Vec2} stPos 金币起始位置
   * @param {cc.Vec2} edPos 金币终点位置
   * @param {number} [r=130] 金币飞行的半径
   */
  public palyAnim() {
    const r: number = 100;
    let count = Math.random() * 10 + 10;
    // let stPos = this.startNode.getPosition();
    // let edPos = this.endNode.getPosition();
    const stPos = this.node
      .getComponent(UITransform)
      .convertToNodeSpaceAR(this.startNode.worldPosition);
    const edPos = this.node
      .getComponent(UITransform)
      .convertToNodeSpaceAR(this.endNode.worldPosition);
    // let stPos = this.startNode.getPosition();
    // let edPos = this.endNode.getPosition();
    // 生成圆并对圆上的点进行排序
    let points = this.getCirclePoints(r, stPos, count);
    console.log("1111", count, stPos, edPos, this.startNode.position);

    let coinNodeList = points.map((pos) => {
      let coin = this.getCoinNode(); // 从对象池中获取或创建金币节点
      coin.setPosition(stPos); // 初始位置设置为起点
      this.node.addChild(coin); // 将金币节点添加到当前节点

      return {
        node: coin, // 金币节点
        stPos: stPos, // 起点
        mdPos: pos, // 中间点（圆周上的点）
        edPos: edPos, // 终点
        dis: pos.subtract(edPos).length(), // 中间点到终点的距离
      };
    });

    // 按照每个金币中间点到终点的距离（dis）从小到大排序，确保飞行时较远的金币稍后到达终点，增强视觉效果。
    coinNodeList = coinNodeList.sort((a, b) => {
      if (a.dis - b.dis > 0) return 1;
      if (a.dis - b.dis < 0) return -1;
      return 0;
    });
    // 执行金币落袋的动画
    coinNodeList.forEach((item, idx) => {
      tween(item.node)
        .to(0.3, { position: item.mdPos }) // 第一段动画：移动到中间点
        .delay(idx * 0.01) // 按顺序稍作延迟
        .to(0.5, { position: item.edPos }) // 第二段动画：移动到终点
        .call(() => {
          this.coinPool.put(item.node); // 动画完成后将金币放回对象池
        })
        .start();
    });

    // eventTarget.off("triggerCoinAnimation");
    // console.log("3");
  }

  /**
   * 以某点为圆心，生成圆周上等分点的坐标
   *
   * @param {number} r 半径
   * @param {Vec2} pos 圆心坐标
   * @param {number} count 等分点数量
   * @param {number} [randomScope=80] 等分点的随机波动范围
   * @returns {Vec2[]} 返回等分点坐标
   */
  getCirclePoints(
    r: number,
    stPos: Vec3,
    count: number,
    randomScope: number = 60
  ) {
    let points = [];
    // 将角度转换为弧度的公式是“弧度 = 角度 × (π/180)”，计算每个等分点的坐标
    let randians = (Math.PI / 180) * Math.round(360 / count);
    console.log(randians, stPos);

    for (let i = 0; i < count; i++) {
      //生成的点 x=圆心的 x 坐标+r⋅sin(θ)
      let x = stPos.x + r * Math.sin(randians * i);
      let y = stPos.y + r * Math.cos(randians * i);
      points.unshift(
        v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0)
      );
    }

    return points;
  }

  protected onDestroy(): void {
    AppNotification.targetOff(this);
  }
}
