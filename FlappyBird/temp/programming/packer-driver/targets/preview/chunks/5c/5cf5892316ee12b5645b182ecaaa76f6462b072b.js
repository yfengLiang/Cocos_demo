System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, GameManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MoveBg;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c9f91T/RPdIM7X7gmaHCBAU", "MoveBg", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MoveBg", MoveBg = (_dec = ccclass("MoveBg"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class MoveBg extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "target1ToMove", _descriptor, this);

          _initializerDefineProperty(this, "target2ToMove", _descriptor2, this);

          this.moveSpeed = 100;
          this._canMoving = false;
        }

        start() {
          this.moveSpeed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).inst().moveSpeed;
        }

        update(deltaTime) {
          if (this._canMoving == false) return;
          var moveDistance = this.moveSpeed * deltaTime;
          var p1 = this.target1ToMove.getPosition();
          this.target1ToMove.setPosition(p1.x - moveDistance, p1.y);
          var p2 = this.target2ToMove.getPosition();
          this.target2ToMove.setPosition(p2.x - moveDistance, p2.y);

          if (p1.x < -728) {
            p2 = this.target2ToMove.getPosition();
            this.target1ToMove.setPosition(p2.x + 728, p2.y);
          }

          if (p2.x < -728) {
            p1 = this.target1ToMove.getPosition();
            this.target2ToMove.setPosition(p1.x + 728, p1.y);
          }
        }

        enableMoving() {
          this._canMoving = true;
        }

        disableMoving() {
          this._canMoving = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target1ToMove", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "target2ToMove", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5cf5892316ee12b5645b182ecaaa76f6462b072b.js.map