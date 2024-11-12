import { _decorator, Component, instantiate, math, Node, Prefab } from 'cc';
import { Pipe } from './Pipe';
const { ccclass, property } = _decorator;

@ccclass('PipeSpawner')
export class PipeSpawner extends Component {
    @property(Prefab)
    pipePrefab:Prefab=null

    @property
    spawnRate:number=2

    private timer:number=0
    private _isSpawning:boolean=false
    update(deltaTime: number) {
    if(this._isSpawning==false) return
     this.timer+=deltaTime
     if(this.timer>this.spawnRate){
        this.timer=0
        const pipeInst=instantiate(this.pipePrefab);
        this.node.addChild(pipeInst)
        // 管道可以上下改变高度
        const p=this.node.getWorldPosition()
        pipeInst.setWorldPosition(p)
        const y = math.randomRangeInt(-250, 50);
        const pLoca=pipeInst.getPosition()
        pipeInst.setPosition(pLoca.x, y-619);
     }   
    }
    public pause(){
        this._isSpawning=false
        const nodeArray=this.node.children
        for(let i=0;i<nodeArray.length;i++){
            const pipe=nodeArray[i].getComponent(Pipe)
            if(pipe){
                // 禁用组件
                pipe.enabled=false
            }
        }
    }
    public start(){
        this._isSpawning=true
    }
}


