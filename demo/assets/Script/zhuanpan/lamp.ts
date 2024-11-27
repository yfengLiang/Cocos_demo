import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('lamp')
export class lamp extends Component {
    @property(SpriteFrame)
    lamp:SpriteFrame[]=[]
    @property(Node)
    lampNode:Node=null
    onLoad(){
        let inx=0
        let timer=setInterval(()=>{
            inx=inx==1?0:1
            this.lampNode.getComponent(Sprite).spriteFrame=this.lamp[inx]
        },500)
    }
}


