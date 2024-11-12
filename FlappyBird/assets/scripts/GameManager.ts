import { _decorator, AudioClip, Component, Label, Node } from 'cc';
import { Bird } from './Bird';
import { MoveBg } from './MoveBg';
import { PipeSpawner } from './PipeSpawner';
import { GameReadyUI } from './UI/GameReadyUI';
import { GameData } from './GameData';
import { GameOverUI } from './UI/GameOverUI';
import { AudioMgr } from './AudioMgr';
const { ccclass, property } = _decorator;

enum GameState{
    Ready,
    Gaming,
    GameOver
}
@ccclass("GameManager")
export class GameManager extends Component {
  private static _inst: GameManager = null;
  public static inst() {
    return this._inst;
  }

  @property
  moveSpeed: number = 100;
  @property(Bird)
  bird: Bird = null;
  @property(MoveBg)
  bgMoving: MoveBg = null;
  @property(MoveBg)
  landMoving: MoveBg = null;
  @property(PipeSpawner)
  PipeSpawner: PipeSpawner = null;
  @property(GameReadyUI)
  gameReadyUI: GameReadyUI = null;
  @property(Node)
  gamingUI: Node = null;
  @property(GameOverUI)
  gameOverUI: GameOverUI = null;

  @property(Label)
  scoreLabel: Label = null;

  @property(AudioClip)
  bgAudio: AudioClip = null;
  @property(AudioClip)
  gameOverAudio: AudioClip = null;
  curGS: GameState = GameState.Ready;

  onLoad() {
    GameManager._inst = this;
  }
  protected start(): void {
    this.transitionToReadyState();
    //后面参数是音量
    AudioMgr.inst.play(this.bgAudio, 0.1);
  }
  transitionToReadyState() {
    this.curGS = GameState.Ready;
    this.bird.disableControl();
    this.bgMoving.disableMoving();
    this.landMoving.disableMoving();
    this.PipeSpawner.pause();
    this.gameOverUI.hide();
    this.gamingUI.active = false;
    this.gameReadyUI.node.active = true;
  }
  transitionToGamingState() {
    this.curGS = GameState.Gaming;
    this.bird.enableControl();
    this.bgMoving.enableMoving();
    this.landMoving.enableMoving();
    this.PipeSpawner.start();
    this.gameReadyUI.node.active = false;
    this.gamingUI.active = true;
  }
  transitionToGameOverState() {
    if (this.curGS == GameState.GameOver) return;
    this.curGS = GameState.GameOver;

    this.bird.disableControlNotRGD();
    this.bgMoving.disableMoving();
    this.landMoving.disableMoving();
    this.PipeSpawner.pause();
    this.gamingUI.active = false;
    this.gameOverUI.show(GameData.getScore(), GameData.getBestScore());
    GameData.saveScore();
    AudioMgr.inst.stop()
     AudioMgr.inst.playOneShot(this.gameOverAudio);
  }

  addScore(count: number = 1) {
    GameData.addScore();
    this.scoreLabel.string = GameData.getScore().toString();
  }
}


