System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GameManager, _dec, _class, _crd, ccclass, property, Pipe;

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
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "018bbOq3xtHDbINYul8b0A3", "Pipe", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Pipe", Pipe = (_dec = ccclass("Pipe"), _dec(_class = class Pipe extends Component {
        constructor(...args) {
          super(...args);
          this.moveSpeed = 100;
        }

        start() {
          this.moveSpeed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).inst().moveSpeed;
        }

        update(deltaTime) {
          const p = this.node.position; //

          this.node.setPosition(p.x - this.moveSpeed * deltaTime, p.y);

          if (p.x < -829) {
            this.node.destroy();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db4f1dc3d98a7e8593beaca95c492c9f2fd77cb5.js.map