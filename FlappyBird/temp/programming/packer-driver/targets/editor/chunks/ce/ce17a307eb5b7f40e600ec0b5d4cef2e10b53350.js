System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, Input, input, RigidBody2D, Vec2, Contact2DType, Collider2D, AudioClip, Tags, GameManager, AudioMgr, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Bird;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTags(extras) {
    _reporterNs.report("Tags", "./Tags", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
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
      Animation = _cc.Animation;
      Component = _cc.Component;
      Input = _cc.Input;
      input = _cc.input;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
      Contact2DType = _cc.Contact2DType;
      Collider2D = _cc.Collider2D;
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      Tags = _unresolved_2.Tags;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      AudioMgr = _unresolved_4.AudioMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94d96qJgA1JS5Cppqx2wLpJ", "Bird", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'Node', 'Input', 'input', 'RigidBody2D', 'Vec2', 'Contact2DType', 'Collider2D', 'IPhysics2DContact', 'AudioClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bird", Bird = (_dec = ccclass("Bird"), _dec2 = property(AudioClip), _dec(_class = (_class2 = class Bird extends Component {
        constructor(...args) {
          super(...args);
          this.rgb2D = null;

          _initializerDefineProperty(this, "rotateSpeed", _descriptor, this);

          this._canControl = false;

          _initializerDefineProperty(this, "clickAudio", _descriptor2, this);
        }

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
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.playOneShot(this.clickAudio);
        }

        update(deltaTime) {
          if (this._canControl == false) return;
          this.node.angle -= this.rotateSpeed * deltaTime;

          if (this.node.angle < -40) {
            this.node.angle = -40;
          }
        }

        enableControl() {
          this.getComponent(Animation).enabled = true;
          this.rgb2D.enabled = true;
          this._canControl = true;
        }

        disableControl() {
          this.getComponent(Animation).enabled = false;
          this.rgb2D.enabled = false;
          this._canControl = false;
        }

        disableControlNotRGD() {
          this.getComponent(Animation).enabled = false;
          this._canControl = false;
        } // 只禁用控制 不禁用刚体


        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          if (otherCollider.tag === (_crd && Tags === void 0 ? (_reportPossibleCrUseOfTags({
            error: Error()
          }), Tags) : Tags).LAND || otherCollider.tag === (_crd && Tags === void 0 ? (_reportPossibleCrUseOfTags({
            error: Error()
          }), Tags) : Tags).PIPE) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).inst().transitionToGameOverState();
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体结束接触时被调用一次
          if (otherCollider.tag === (_crd && Tags === void 0 ? (_reportPossibleCrUseOfTags({
            error: Error()
          }), Tags) : Tags).PIPE_MIDDLE) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).inst().addScore();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 30;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickAudio", [_dec2], {
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
//# sourceMappingURL=ce17a307eb5b7f40e600ec0b5d4cef2e10b53350.js.map