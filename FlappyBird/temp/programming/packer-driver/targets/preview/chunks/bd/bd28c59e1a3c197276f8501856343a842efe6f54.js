System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Label, Node, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GameOverUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Label = _cc.Label;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "310ebrEitJNgIXEre9Wp2AB", "GameOverUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameOverUI", GameOverUI = (_dec = ccclass("GameOverUI"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property([Node]), _dec(_class = (_class2 = class GameOverUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "curScoreLabel", _descriptor, this);

          _initializerDefineProperty(this, "bestScoreLabel", _descriptor2, this);

          _initializerDefineProperty(this, "newSprite", _descriptor3, this);

          _initializerDefineProperty(this, "medalArray", _descriptor4, this);
        }

        show(curScore, bestScore) {
          this.node.active = true; //分数更新

          this.curScoreLabel.string = curScore.toString();
          this.bestScoreLabel.string = bestScore.toString();

          if (curScore > bestScore) {
            this.newSprite.active = true;
          } else {
            this.newSprite.active = false;
          } //0-9


          var index = curScore / 10;
          var indexInt = Math.floor(index);

          if (indexInt > 3) {
            indexInt = 3;
          }

          this.medalArray[indexInt].active = true;
        }

        hide() {
          this.node.active = false;
        }

        onPlayButtonClick() {
          console.log("Current scene name:", director.getScene().name);
          director.loadScene(director.getScene().name);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "curScoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bestScoreLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "newSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "medalArray", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd28c59e1a3c197276f8501856343a842efe6f54.js.map