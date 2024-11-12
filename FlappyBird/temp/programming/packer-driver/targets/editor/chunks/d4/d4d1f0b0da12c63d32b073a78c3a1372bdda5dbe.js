System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, GameManager, _dec, _class, _crd, ccclass, property, GameReadyUI;

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
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
      input = _cc.input;
      Input = _cc.Input;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37e9etX7t9ErKI57ahWGmP1", "GameReadyUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'Input']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameReadyUI", GameReadyUI = (_dec = ccclass("GameReadyUI"), _dec(_class = class GameReadyUI extends Component {
        start() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }

        onDestroy() {
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }

        onTouchStart() {
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).inst().transitionToGamingState();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4d1f0b0da12c63d32b073a78c3a1372bdda5dbe.js.map