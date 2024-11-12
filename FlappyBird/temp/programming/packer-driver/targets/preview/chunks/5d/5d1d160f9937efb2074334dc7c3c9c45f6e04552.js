System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, math, Prefab, Pipe, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PipeSpawner;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPipe(extras) {
    _reporterNs.report("Pipe", "./Pipe", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      math = _cc.math;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Pipe = _unresolved_2.Pipe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "025b8R8mbhDebkjZdLEnddy", "PipeSpawner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'math', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PipeSpawner", PipeSpawner = (_dec = ccclass('PipeSpawner'), _dec2 = property(Prefab), _dec(_class = (_class2 = class PipeSpawner extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pipePrefab", _descriptor, this);

          _initializerDefineProperty(this, "spawnRate", _descriptor2, this);

          this.timer = 0;
          this._isSpawning = false;
        }

        update(deltaTime) {
          if (this._isSpawning == false) return;
          this.timer += deltaTime;

          if (this.timer > this.spawnRate) {
            this.timer = 0;
            var pipeInst = instantiate(this.pipePrefab);
            this.node.addChild(pipeInst); // 管道可以上下改变高度

            var p = this.node.getWorldPosition();
            pipeInst.setWorldPosition(p);
            var y = math.randomRangeInt(-250, 50);
            var pLoca = pipeInst.getPosition();
            pipeInst.setPosition(pLoca.x, y - 619);
          }
        }

        pause() {
          this._isSpawning = false;
          var nodeArray = this.node.children;

          for (var i = 0; i < nodeArray.length; i++) {
            var pipe = nodeArray[i].getComponent(_crd && Pipe === void 0 ? (_reportPossibleCrUseOfPipe({
              error: Error()
            }), Pipe) : Pipe);

            if (pipe) {
              // 禁用组件
              pipe.enabled = false;
            }
          }
        }

        start() {
          this._isSpawning = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pipePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spawnRate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5d1d160f9937efb2074334dc7c3c9c45f6e04552.js.map