System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, Component, Label, Node, Bird, MoveBg, PipeSpawner, GameReadyUI, GameData, GameOverUI, AudioMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3, _crd, ccclass, property, GameState, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBird(extras) {
    _reporterNs.report("Bird", "./Bird", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveBg(extras) {
    _reporterNs.report("MoveBg", "./MoveBg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPipeSpawner(extras) {
    _reporterNs.report("PipeSpawner", "./PipeSpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameReadyUI(extras) {
    _reporterNs.report("GameReadyUI", "./UI/GameReadyUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "./GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameOverUI(extras) {
    _reporterNs.report("GameOverUI", "./UI/GameOverUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "./AudioMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Bird = _unresolved_2.Bird;
    }, function (_unresolved_3) {
      MoveBg = _unresolved_3.MoveBg;
    }, function (_unresolved_4) {
      PipeSpawner = _unresolved_4.PipeSpawner;
    }, function (_unresolved_5) {
      GameReadyUI = _unresolved_5.GameReadyUI;
    }, function (_unresolved_6) {
      GameData = _unresolved_6.GameData;
    }, function (_unresolved_7) {
      GameOverUI = _unresolved_7.GameOverUI;
    }, function (_unresolved_8) {
      AudioMgr = _unresolved_8.AudioMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26381mgZnVMvp521i05hzIe", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["Ready"] = 0] = "Ready";
        GameState[GameState["Gaming"] = 1] = "Gaming";
        GameState[GameState["GameOver"] = 2] = "GameOver";
        return GameState;
      }(GameState || {});

      _export("GameManager", GameManager = (_dec = ccclass("GameManager"), _dec2 = property(_crd && Bird === void 0 ? (_reportPossibleCrUseOfBird({
        error: Error()
      }), Bird) : Bird), _dec3 = property(_crd && MoveBg === void 0 ? (_reportPossibleCrUseOfMoveBg({
        error: Error()
      }), MoveBg) : MoveBg), _dec4 = property(_crd && MoveBg === void 0 ? (_reportPossibleCrUseOfMoveBg({
        error: Error()
      }), MoveBg) : MoveBg), _dec5 = property(_crd && PipeSpawner === void 0 ? (_reportPossibleCrUseOfPipeSpawner({
        error: Error()
      }), PipeSpawner) : PipeSpawner), _dec6 = property(_crd && GameReadyUI === void 0 ? (_reportPossibleCrUseOfGameReadyUI({
        error: Error()
      }), GameReadyUI) : GameReadyUI), _dec7 = property(Node), _dec8 = property(_crd && GameOverUI === void 0 ? (_reportPossibleCrUseOfGameOverUI({
        error: Error()
      }), GameOverUI) : GameOverUI), _dec9 = property(Label), _dec10 = property(AudioClip), _dec11 = property(AudioClip), _dec(_class = (_class2 = (_class3 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);

          _initializerDefineProperty(this, "bird", _descriptor2, this);

          _initializerDefineProperty(this, "bgMoving", _descriptor3, this);

          _initializerDefineProperty(this, "landMoving", _descriptor4, this);

          _initializerDefineProperty(this, "PipeSpawner", _descriptor5, this);

          _initializerDefineProperty(this, "gameReadyUI", _descriptor6, this);

          _initializerDefineProperty(this, "gamingUI", _descriptor7, this);

          _initializerDefineProperty(this, "gameOverUI", _descriptor8, this);

          _initializerDefineProperty(this, "scoreLabel", _descriptor9, this);

          _initializerDefineProperty(this, "bgAudio", _descriptor10, this);

          _initializerDefineProperty(this, "gameOverAudio", _descriptor11, this);

          this.curGS = GameState.Ready;
        }

        static inst() {
          return this._inst;
        }

        onLoad() {
          GameManager._inst = this;
        }

        start() {
          this.transitionToReadyState(); //后面参数是音量

          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.play(this.bgAudio, 0.1);
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
          this.gameOverUI.show((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getScore(), (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getBestScore());
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).saveScore();
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.stop();
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.playOneShot(this.gameOverAudio);
        }

        addScore(count = 1) {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).addScore();
          this.scoreLabel.string = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getScore().toString();
        }

      }, _class3._inst = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bird", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgMoving", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "landMoving", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "PipeSpawner", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameReadyUI", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gamingUI", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameOverUI", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bgAudio", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "gameOverAudio", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b145beb491ce2af97f664b673226544960ac721.js.map