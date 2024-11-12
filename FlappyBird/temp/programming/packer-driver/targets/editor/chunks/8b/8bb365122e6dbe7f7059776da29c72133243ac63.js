System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, AudioSource, AudioClip, resources, director, AudioMgr, _crd;

  _export("AudioMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      AudioSource = _cc.AudioSource;
      AudioClip = _cc.AudioClip;
      resources = _cc.resources;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d65c90NMZNCJJEyYRAIixr7", "AudioMgr", undefined); //AudioMgr.ts


      /**
       * @en
       * this is a sington class for audio play, can be easily called from anywhere in you project.
       * @zh
       * 这是一个用于播放音频的单件类，可以很方便地在项目的任何地方调用。
       */
      __checkObsolete__(['Node', 'AudioSource', 'AudioClip', 'resources', 'director']);

      _export("AudioMgr", AudioMgr = class AudioMgr {
        static get inst() {
          if (this._inst == null) {
            this._inst = new AudioMgr();
          }

          return this._inst;
        }

        constructor() {
          this._audioSource = void 0;
          //@en create a node as audioMgr
          //@zh 创建一个节点作为 audioMgr
          let audioMgr = new Node();
          audioMgr.name = "__audioMgr__"; //@en add to the scene.
          //@zh 添加节点到场景

          director.getScene().addChild(audioMgr); //@en make it as a persistent node, so it won't be destroied when scene change.
          //@zh 标记为常驻节点，这样场景切换的时候就不会被销毁了

          director.addPersistRootNode(audioMgr); //@en add AudioSource componrnt to play audios.
          //@zh 添加 AudioSource 组件，用于播放音频。

          this._audioSource = audioMgr.addComponent(AudioSource);
        }

        get audioSource() {
          return this._audioSource;
        }
        /**
         * @en
         * play short audio, such as strikes,explosions
         * @zh
         * 播放短音频,比如 打击音效，爆炸音效等
         * @param sound clip or url for the audio
         * @param volume
         */


        playOneShot(sound, volume = 1.0) {
          if (sound instanceof AudioClip) {
            this._audioSource.playOneShot(sound, volume);
          } else {
            resources.load(sound, (err, clip) => {
              if (err) {
                console.log(err);
              } else {
                this._audioSource.playOneShot(clip, volume);
              }
            });
          }
        }
        /**
         * @en
         * play long audio, such as the bg music
         * @zh
         * 播放长音频，比如 背景音乐
         * @param sound clip or url for the sound
         * @param volume
         */


        play(sound, volume = 1.0) {
          if (sound instanceof AudioClip) {
            this._audioSource.stop();

            this._audioSource.clip = sound; //设置循环播放

            this._audioSource.loop = true;

            this._audioSource.play();

            this.audioSource.volume = volume;
          } else {
            resources.load(sound, (err, clip) => {
              if (err) {
                console.log(err);
              } else {
                this._audioSource.stop();

                this._audioSource.clip = clip;
                this._audioSource.loop = true;

                this._audioSource.play();

                this.audioSource.volume = volume;
              }
            });
          }
        }
        /**
         * stop the audio play
         */


        stop() {
          this._audioSource.stop();
        }
        /**
         * pause the audio play
         */


        pause() {
          this._audioSource.pause();
        }
        /**
         * resume the audio play
         */


        resume() {
          this._audioSource.play();
        }

      });

      AudioMgr._inst = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8bb365122e6dbe7f7059776da29c72133243ac63.js.map