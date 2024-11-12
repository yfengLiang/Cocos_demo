import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


export class GameData{
    private static readonly BESTSCORE:string="BestScore"
    private static _score:number=0;

    public static addScore(count:number=1){
        this._score += count;
    }

    // 获得当前分数
    public static getScore():number{
        return this._score
    }

    // 本地存储
    public static getBestScore(){
        let score=localStorage.getItem(this.BESTSCORE);
        if(score){
            return parseInt(score)
        }else{
            return 0
        }
    }

    public static saveScore(){
        let curScore=this.getScore();
        let bestScore=this.getBestScore()
        if(curScore>bestScore){
            localStorage.setItem(this.BESTSCORE,curScore.toString())
        }
    }
}


