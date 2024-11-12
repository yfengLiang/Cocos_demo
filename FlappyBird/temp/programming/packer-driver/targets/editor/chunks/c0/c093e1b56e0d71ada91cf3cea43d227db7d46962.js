System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GameData, _crd, ccclass, property;

  _export("GameData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e23dZsFyZN3qmx9mNMfhnn", "GameData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameData", GameData = class GameData {
        static addScore(count = 1) {
          this._score += count;
        } // 获得当前分数


        static getScore() {
          return this._score;
        } // 本地存储


        static getBestScore() {
          let score = localStorage.getItem(this.BESTSCORE);

          if (score) {
            return parseInt(score);
          } else {
            return 0;
          }
        }

        static saveScore() {
          let curScore = this.getScore();
          let bestScore = this.getBestScore();

          if (curScore > bestScore) {
            localStorage.setItem(this.BESTSCORE, curScore.toString());
          }
        }

      });

      GameData.BESTSCORE = "BestScore";
      GameData._score = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c093e1b56e0d71ada91cf3cea43d227db7d46962.js.map