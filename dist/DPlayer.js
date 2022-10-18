/******/ var __webpack_modules__ = ({

/***/ 368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $imports = __webpack_require__(3153);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $$blocks = arguments[1] || {}, include = function (content) {
            $$out += content;
            return $$out;
        }, video = $data.video, options = $data.options, $escape = $imports.$escape, tran = $data.tran, icons = $data.icons, index = $data.index, $each = $imports.$each, $value = $data.$value, $index = $data.$index;
    $$out += '<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    ';
    include(__webpack_require__(6953)(video));
    $$out += '\n    ';
    if (options.logo) {
        $$out += '\n    <div class="dplayer-logo">\n        <img src="';
        $$out += $escape(options.logo);
        $$out += '">\n    </div>\n    ';
    }
    $$out += '\n    <div class="dplayer-danmaku"';
    if (options.danmaku && options.danmaku.bottm) {
        $$out += ' style="margin-bottom:';
        $$out += $escape(options.danmaku.bottm);
        $$out += '"';
    }
    $$out += '>\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="dplayer-subtitle"></div>\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        ';
    if (options.danmaku) {
        $$out += '\n        <span class="dplayer-danloading">';
        $$out += $escape(tran('danmaku-loading'));
        $$out += '</span>\n        ';
    }
    $$out += '\n        <span class="diplayer-loading-icon">';
    $$out += icons.loading;
    $$out += '</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-comment-box">\n        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="';
    $$out += $escape(tran('setting'));
    $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
    $$out += icons.pallette;
    $$out += '</span>\n        </button>\n        <div class="dplayer-comment-setting-box">\n            <div class="dplayer-comment-setting-color">\n                <div class="dplayer-comment-setting-title">';
    $$out += $escape(tran('set-danmaku-color'));
    $$out += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#fff" checked>\n                    <span style="background: #fff;"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#e54256">\n                    <span style="background: #e54256"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#ffe133">\n                    <span style="background: #ffe133"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#64DD17">\n                    <span style="background: #64DD17"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#39ccff">\n                    <span style="background: #39ccff"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#D500F9">\n                    <span style="background: #D500F9"></span>\n                </label>\n            </div>\n            <div class="dplayer-comment-setting-type">\n                <div class="dplayer-comment-setting-title">';
    $$out += $escape(tran('set-danmaku-type'));
    $$out += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-';
    $$out += $escape(index);
    $$out += '" value="1">\n                    <span>';
    $$out += $escape(tran('top'));
    $$out += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-';
    $$out += $escape(index);
    $$out += '" value="0" checked>\n                    <span>';
    $$out += $escape(tran('rolling'));
    $$out += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-';
    $$out += $escape(index);
    $$out += '" value="2">\n                    <span>';
    $$out += $escape(tran('bottom'));
    $$out += '</span>\n                </label>\n            </div>\n        </div>\n        <input class="dplayer-comment-input" type="text" placeholder="';
    $$out += $escape(tran('input-danmaku-enter'));
    $$out += '" maxlength="30">\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="';
    $$out += $escape(tran('send'));
    $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
    $$out += icons.send;
    $$out += '</span>\n        </button>\n    </div>\n    <div class="dplayer-icons dplayer-icons-left">\n        <button class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">';
    $$out += icons.play;
    $$out += '</span>\n        </button>\n        <div class="dplayer-volume">\n            <button class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">';
    $$out += icons.volumeDown;
    $$out += '</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: ';
    $$out += $escape(options.theme);
    $$out += ';">\n                        <span class="dplayer-thumb" style="background: ';
    $$out += $escape(options.theme);
    $$out += '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> /\n            <span class="dplayer-dtime">0:00</span>\n        </span>\n        ';
    if (options.live) {
        $$out += '\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ';
        $$out += $escape(options.theme);
        $$out += ';"></span>';
        $$out += $escape(tran('live'));
        $$out += '</span>\n        ';
    }
    $$out += '\n    </div>\n    <div class="dplayer-icons dplayer-icons-right">\n        ';
    if (options.video.quality) {
        $$out += '\n        <div class="dplayer-quality">\n            <button class="dplayer-icon dplayer-quality-icon">';
        $$out += $escape(options.video.quality[options.video.defaultQuality].name);
        $$out += '</button>\n            <div class="dplayer-quality-mask">\n                <div class="dplayer-quality-list">\n                ';
        $each(options.video.quality, function ($value, $index) {
            $$out += '\n                    <div class="dplayer-quality-item" data-index="';
            $$out += $escape($index);
            $$out += '">';
            $$out += $escape($value.name);
            $$out += '</div>\n                ';
        });
        $$out += '\n                </div>\n            </div>\n        </div>\n        ';
    }
    $$out += '\n        ';
    if (options.screenshot) {
        $$out += '\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="';
        $$out += $escape(tran('screenshot'));
        $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
        $$out += icons.camera;
        $$out += '</span>\n        </div>\n        ';
    }
    $$out += '\n        ';
    if (options.airplay) {
        $$out += '\n        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="';
        $$out += $escape(tran('airplay'));
        $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
        $$out += icons.airplay;
        $$out += '</span>\n        </div>\n        ';
    }
    $$out += '\n        ';
    if (options.chromecast) {
        $$out += '\n        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="';
        $$out += $escape(tran('chromecast'));
        $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
        $$out += icons.chromecast;
        $$out += '</span>\n        </div>\n        ';
    }
    $$out += '\n        <div class="dplayer-comment">\n            <button class="dplayer-icon dplayer-comment-icon" data-balloon="';
    $$out += $escape(tran('send-danmaku'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.comment;
    $$out += '</span>\n            </button>\n        </div>\n        ';
    if (options.subtitle) {
        $$out += '\n        ';
        if (typeof options.subtitle.url === 'string') {
            $$out += '\n        <div class="dplayer-subtitle-btn">\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="';
            $$out += $escape(tran('hide-subs'));
            $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
            $$out += icons.subtitle;
            $$out += '</span>\n            </button>\n        </div>\n        ';
        } else {
            $$out += '\n        <div class="dplayer-subtitles">\n            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="';
            $$out += $escape(tran('subtitle'));
            $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
            $$out += icons.subtitle;
            $$out += '</span>\n            </button>\n            <div class="dplayer-subtitles-box">\n                <div class="dplayer-subtitles-panel">\n                    ';
            $each(options.subtitle.url, function ($value, $index) {
                $$out += '\n                        <div class="dplayer-subtitles-item" data-subtitle="';
                $$out += $escape($value.url);
                $$out += '">\n                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->\n                            <span class="dplayer-label">';
                $$out += $escape($value.lang ? $value.name ? $value.name + ' (' + tran($value.lang) + ')' : tran($value.lang) : $value.name);
                $$out += '</span>\n                        </div>\n                    ';
            });
            $$out += '\n                </div>\n            </div>\n        </div>\n        ';
        }
        $$out += '\n        ';
    }
    $$out += '\n        <div class="dplayer-setting">\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="';
    $$out += $escape(tran('setting'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.setting;
    $$out += '</span>\n            </button>\n            <div class="dplayer-setting-box">\n                <div class="dplayer-setting-origin-panel">\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('speed'));
    $$out += '</span>\n                        <div class="dplayer-toggle">';
    $$out += icons.right;
    $$out += '</div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('loop'));
    $$out += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('show-danmaku'));
    $$out += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danunlimit">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('unlimited-danmaku'));
    $$out += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">\n                            <label for="dplayer-toggle-danunlimit"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('opacity-danmaku'));
    $$out += '</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dplayer-setting-speed-panel">\n                    ';
    $each(options.playbackSpeed, function ($value, $index) {
        $$out += '\n                        <div class="dplayer-setting-speed-item" data-speed="';
        $$out += $escape($value);
        $$out += '">\n                            <span class="dplayer-label">';
        $$out += $escape($value === 1 ? tran('normal') : $value);
        $$out += '</span>\n                        </div>\n                    ';
    });
    $$out += '\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-full">\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="';
    $$out += $escape(tran('web-fullscreen'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.fullWeb;
    $$out += '</span>\n            </button>\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="';
    $$out += $escape(tran('fullscreen'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.full;
    $$out += '</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar-preview"></div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: ';
    $$out += $escape(options.theme);
    $$out += '">\n                <span class="dplayer-thumb" style="background: ';
    $$out += $escape(options.theme);
    $$out += '"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-info-panel dplayer-info-panel-hide">\n    <div class="dplayer-info-panel-close">[x]</div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\n        <span class="dplayer-info-panel-item-title">Player version</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\n        <span class="dplayer-info-panel-item-title">Video type</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\n        <span class="dplayer-info-panel-item-title">Video url</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\n        <span class="dplayer-info-panel-item-title">Video duration</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ';
    if (options.danmaku) {
        $$out += '\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">\n        <span class="dplayer-info-panel-item-title">Danmaku id</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">\n        <span class="dplayer-info-panel-item-title">Danmaku api</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">\n        <span class="dplayer-info-panel-item-title">Danmaku amount</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ';
    }
    $$out += '\n</div>\n<div class="dplayer-menu">\n    ';
    $each(options.contextmenu, function ($value, $index) {
        $$out += '\n        <div class="dplayer-menu-item">\n            <a';
        if ($value.link) {
            $$out += ' target="_blank"';
        }
        $$out += ' href="';
        $$out += $escape($value.link || 'javascript:void(0);');
        $$out += '">';
        if ($value.key) {
            $$out += ' ';
            $$out += $escape(tran($value.key));
        }
        if ($value.text) {
            $$out += ' ';
            $$out += $escape($value.text);
        }
        $$out += '</a>\n        </div>\n    ';
    });
    $$out += '\n</div>\n<div class="dplayer-notice-list"></div>\n<button class="dplayer-mobile-play">\n    ';
    $$out += icons.play;
    $$out += '\n</button>';
    return $$out;
};

/***/ }),

/***/ 6953:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $imports = __webpack_require__(3153);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', enableSubtitle = $data.enableSubtitle, subtitle = $data.subtitle, current = $data.current, airplay = $data.airplay, pic = $data.pic, $escape = $imports.$escape, screenshot = $data.screenshot, preload = $data.preload, url = $data.url;
    var enableSubtitle = subtitle && subtitle.type === 'webvtt';
    $$out += '\n<video\n    class="dplayer-video ';
    if (current) {
        $$out += 'dplayer-video-current';
    }
    $$out += '"\n    webkit-playsinline\n    ';
    if (airplay) {
        $$out += ' x-webkit-airplay="allow" ';
    }
    $$out += '\n    playsinline\n    ';
    if (pic) {
        $$out += 'poster="';
        $$out += $escape(pic);
        $$out += '"';
    }
    $$out += '\n    ';
    if (screenshot || enableSubtitle) {
        $$out += 'crossorigin="anonymous"';
    }
    $$out += '\n    ';
    if (preload) {
        $$out += 'preload="';
        $$out += $escape(preload);
        $$out += '"';
    }
    $$out += '\n    ';
    if (airplay) {
        $$out += '\n    nosrc\n    ';
    } else if (url) {
        $$out += '\n    src="';
        $$out += $escape(url);
        $$out += '"\n    ';
    }
    $$out += '\n    >\n    ';
    if (airplay) {
        $$out += '\n    <source src="';
        $$out += $escape(url);
        $$out += '">\n    ';
    }
    $$out += '\n    ';
    if (enableSubtitle) {
        $$out += '\n    <track class="dplayer-subtrack" kind="metadata" default src="';
        $$out += $escape(typeof subtitle.url === 'string' ? subtitle.url : subtitle.url[subtitle.index].url);
        $$out += '"></track>\n    ';
    }
    $$out += '\n</video>';
    return $$out;
};

/***/ }),

/***/ 7907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9283);
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3884);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --balloon-border-radius: 2px;\n  --balloon-color: rgba(16, 16, 16, 0.95);\n  --balloon-text-color: #fff;\n  --balloon-font-size: 12px;\n  --balloon-move: 4px; }\n\nbutton[aria-label][data-balloon-pos] {\n  overflow: visible; }\n\n[aria-label][data-balloon-pos] {\n  position: relative;\n  cursor: pointer; }\n  [aria-label][data-balloon-pos]:after {\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    text-indent: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-shadow: none;\n    font-size: 12px;\n    font-size: var(--balloon-font-size);\n    background: rgba(16, 16, 16, 0.95);\n    background: var(--balloon-color);\n    border-radius: 2px;\n    color: #fff;\n    color: var(--balloon-text-color);\n    border-radius: var(--balloon-border-radius);\n    content: attr(aria-label);\n    padding: .5em 1em;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-top-color: rgba(16, 16, 16, 0.95);\n    border-top-color: var(--balloon-color);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    content: \"\";\n    position: absolute;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {\n    opacity: 1;\n    pointer-events: none; }\n  [aria-label][data-balloon-pos].font-awesome:after {\n    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }\n  [aria-label][data-balloon-pos][data-balloon-break]:after {\n    white-space: pre; }\n  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {\n    white-space: pre-line;\n    word-break: break-word; }\n  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {\n    transition: none; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"][data-balloon-visible]:after {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"][data-balloon-visible]:before {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-left\"]:after {\n    left: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-left\"]:before {\n    left: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:after {\n    right: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:before {\n    right: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"][data-balloon-visible]:after {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"][data-balloon-visible]:before {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:before, [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:after {\n    bottom: 100%;\n    transform-origin: top;\n    transform: translate(0, 4px);\n    transform: translate(0, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:after {\n    margin-bottom: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:after {\n    left: 50%;\n    transform: translate(-50%, 4px);\n    transform: translate(-50%, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:before, [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:after {\n    top: 100%;\n    transform: translate(0, calc(4px * -1));\n    transform: translate(0, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:after {\n    margin-top: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-bottom-color: rgba(16, 16, 16, 0.95);\n    border-bottom-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:before {\n    left: 50%;\n    transform: translate(-50%, calc(4px * -1));\n    transform: translate(-50%, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"][data-balloon-visible]:after {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"][data-balloon-visible]:before {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:before {\n    right: 100%;\n    top: 50%;\n    transform: translate(4px, -50%);\n    transform: translate(var(--balloon-move), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:after {\n    margin-right: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-left-color: rgba(16, 16, 16, 0.95);\n    border-left-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:before {\n    left: 100%;\n    top: 50%;\n    transform: translate(calc(4px * -1), -50%);\n    transform: translate(calc(var(--balloon-move) * -1), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:after {\n    margin-left: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-right-color: rgba(16, 16, 16, 0.95);\n    border-right-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-length]:after {\n    white-space: normal; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"small\"]:after {\n    width: 80px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"medium\"]:after {\n    width: 150px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"large\"]:after {\n    width: 260px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"xlarge\"]:after {\n    width: 380px; }\n    @media screen and (max-width: 768px) {\n      [aria-label][data-balloon-pos][data-balloon-length=\"xlarge\"]:after {\n        width: 90vw; } }\n  [aria-label][data-balloon-pos][data-balloon-length=\"fit\"]:after {\n    width: 100%; }\n", "",{"version":3,"sources":["webpack://./node_modules/balloon-css/balloon.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE","sourcesContent":[":root {\n  --balloon-border-radius: 2px;\n  --balloon-color: rgba(16, 16, 16, 0.95);\n  --balloon-text-color: #fff;\n  --balloon-font-size: 12px;\n  --balloon-move: 4px; }\n\nbutton[aria-label][data-balloon-pos] {\n  overflow: visible; }\n\n[aria-label][data-balloon-pos] {\n  position: relative;\n  cursor: pointer; }\n  [aria-label][data-balloon-pos]:after {\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    text-indent: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-shadow: none;\n    font-size: var(--balloon-font-size);\n    background: var(--balloon-color);\n    border-radius: 2px;\n    color: var(--balloon-text-color);\n    border-radius: var(--balloon-border-radius);\n    content: attr(aria-label);\n    padding: .5em 1em;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-top-color: var(--balloon-color);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    content: \"\";\n    position: absolute;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {\n    opacity: 1;\n    pointer-events: none; }\n  [aria-label][data-balloon-pos].font-awesome:after {\n    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }\n  [aria-label][data-balloon-pos][data-balloon-break]:after {\n    white-space: pre; }\n  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {\n    white-space: pre-line;\n    word-break: break-word; }\n  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {\n    transition: none; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"][data-balloon-visible]:after {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"][data-balloon-visible]:before {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-left\"]:after {\n    left: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-left\"]:before {\n    left: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:after {\n    right: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:before {\n    right: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"][data-balloon-visible]:after {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"][data-balloon-visible]:before {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:before, [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:after {\n    bottom: 100%;\n    transform-origin: top;\n    transform: translate(0, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:after {\n    margin-bottom: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:after {\n    left: 50%;\n    transform: translate(-50%, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:before, [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:after {\n    top: 100%;\n    transform: translate(0, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:after {\n    margin-top: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-bottom-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:before {\n    left: 50%;\n    transform: translate(-50%, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"][data-balloon-visible]:after {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"][data-balloon-visible]:before {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:before {\n    right: 100%;\n    top: 50%;\n    transform: translate(var(--balloon-move), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:after {\n    margin-right: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-left-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:before {\n    left: 100%;\n    top: 50%;\n    transform: translate(calc(var(--balloon-move) * -1), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:after {\n    margin-left: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-right-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-length]:after {\n    white-space: normal; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"small\"]:after {\n    width: 80px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"medium\"]:after {\n    width: 150px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"large\"]:after {\n    width: 260px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"xlarge\"]:after {\n    width: 380px; }\n    @media screen and (max-width: 768px) {\n      [aria-label][data-balloon-pos][data-balloon-length=\"xlarge\"]:after {\n        width: 90vw; } }\n  [aria-label][data-balloon-pos][data-balloon-length=\"fit\"]:after {\n    width: 100%; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9283);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3884);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_balloon_css_balloon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7907);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5717);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(7831), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_balloon_css_balloon_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.dplayer {\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  line-height: 1;\n}\n.dplayer * {\n  box-sizing: content-box;\n}\n.dplayer svg {\n  width: 100%;\n  height: 100%;\n}\n.dplayer svg path,\n.dplayer svg circle {\n  fill: #fff;\n}\n.dplayer:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transform: translate(0, 0);\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-danmaku {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-time {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-bar-wrap {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-speed {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-loop {\n  display: none;\n}\n.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {\n  display: none;\n}\n.dplayer.dplayer-arrow .dplayer-danmaku {\n  font-size: 18px;\n}\n.dplayer.dplayer-arrow .dplayer-icon {\n  margin: 0 -3px;\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {\n  animation-play-state: running;\n}\n@media (min-width: 900px) {\n  .dplayer.dplayer-playing .dplayer-controller-mask {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing .dplayer-controller {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller-mask {\n    opacity: 1;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller {\n    opacity: 1;\n  }\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {\n  display: block;\n}\n.dplayer.dplayer-loading .dplayer-danmaku,\n.dplayer.dplayer-paused .dplayer-danmaku,\n.dplayer.dplayer-loading .dplayer-danmaku-move,\n.dplayer.dplayer-paused .dplayer-danmaku-move {\n  animation-play-state: paused;\n}\n.dplayer.dplayer-hide-controller {\n  cursor: none;\n}\n.dplayer.dplayer-hide-controller .dplayer-controller-mask {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-hide-controller .dplayer-controller {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-show-controller .dplayer-controller-mask {\n  opacity: 1;\n}\n.dplayer.dplayer-show-controller .dplayer-controller {\n  opacity: 1;\n}\n.dplayer.dplayer-fulled {\n  width: 100% !important;\n  height: 100% !important;\n}\n.dplayer.dplayer-fulled {\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: static;\n  display: inline-block;\n}\n.dplayer.dplayer-mobile .dplayer-bar-time {\n  display: none;\n}\n.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-mobile-play {\n  display: block;\n}\n.dplayer-web-fullscreen-fix {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n[data-balloon]:before {\n  display: none;\n}\n[data-balloon]:after {\n  padding: 0.3em 0.7em;\n  background: rgba(17, 17, 17, 0.7);\n}\n[data-balloon][data-balloon-pos=\"up\"]:after {\n  margin-bottom: 0;\n}\n.dplayer-bezel {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n  height: 52px;\n  width: 52px;\n  padding: 12px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {\n  animation: bezel-hide 0.5s linear;\n}\n@keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.dplayer-bezel .dplayer-danloading {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 14px;\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-bezel .diplayer-loading-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -18px 0 0 -18px;\n  height: 36px;\n  width: 36px;\n  pointer-events: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {\n  display: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {\n  animation: diplayer-loading-dot-fade 0.8s ease infinite;\n  opacity: 0;\n  transform-origin: 4px 4px;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {\n  animation-delay: 0.1s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {\n  animation-delay: 0.2s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {\n  animation-delay: 0.3s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {\n  animation-delay: 0.4s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {\n  animation-delay: 0.5s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {\n  animation-delay: 0.6s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {\n  animation-delay: 0.7s;\n}\n@keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n.dplayer-controller-mask {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") repeat-x bottom;\n  height: 98px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  transition: all 0.3s ease;\n}\n.dplayer-controller {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 41px;\n  padding: 0 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: all 0.3s ease;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons {\n  display: none;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap {\n  padding: 5px 0;\n  cursor: pointer;\n  position: absolute;\n  bottom: 33px;\n  width: calc(100% - 40px);\n  height: 3px;\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {\n  display: block;\n  width: 8px;\n  transform: translateX(-4px);\n  top: 4px;\n  height: 40%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {\n  z-index: 12;\n  position: absolute;\n  top: 5px;\n  width: 6px;\n  height: 20%;\n  border-radius: 6px;\n  background-color: #fff;\n  text-align: center;\n  transform: translateX(-3px);\n  transition: all 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -24px;\n  padding: 5px 8px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  border-radius: 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  transform: translateX(-50%);\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {\n  position: absolute;\n  background: #fff;\n  pointer-events: none;\n  display: none;\n  background-size: 16000px 100%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {\n  position: absolute;\n  left: 0px;\n  top: -20px;\n  border-radius: 4px;\n  padding: 5px 7px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n  word-wrap: normal;\n  word-break: normal;\n  z-index: 2;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar {\n  position: relative;\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  height: 3px;\n  transition: all 0.5s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 3px;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons {\n  height: 38px;\n  position: absolute;\n  bottom: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box {\n  display: none;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  z-index: 2;\n  height: 38px;\n  bottom: 0;\n  left: 20px;\n  right: 20px;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {\n  position: absolute;\n  background: rgba(28, 28, 28, 0.9);\n  bottom: 41px;\n  left: 0;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  padding: 10px 10px 16px;\n  font-size: 14px;\n  width: 204px;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {\n  font-size: 13px;\n  color: #fff;\n  line-height: 30px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {\n  margin-bottom: 6px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {\n  border-radius: 4px 0 0 4px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {\n  border-radius: 0 4px 4px 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {\n  width: 33%;\n  padding: 4px 6px;\n  line-height: 16px;\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-right: -1px;\n  box-sizing: border-box;\n  text-align: center;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {\n  background: #E4E4E6;\n  color: #1c1c1c;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {\n  font-size: 0;\n  padding: 6px;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {\n  width: 22px;\n  height: 22px;\n  display: inline-block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {\n  outline: none;\n  border: none;\n  padding: 8px 31px;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  background: none;\n  margin: 0;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right {\n  right: 20px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {\n  padding: 8px;\n}\n.dplayer-controller .dplayer-icons .dplayer-time,\n.dplayer-controller .dplayer-icons .dplayer-live-badge {\n  line-height: 38px;\n  color: #eee;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  vertical-align: middle;\n  font-size: 13px;\n  cursor: default;\n}\n.dplayer-controller .dplayer-icons .dplayer-live-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  vertical-align: 4%;\n  margin-right: 5px;\n  content: '';\n  border-radius: 6px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon {\n  width: 40px;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {\n  transition: all 0.2s ease-in-out;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {\n  opacity: 1;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {\n  color: #fff;\n  width: auto;\n  line-height: 22px;\n  font-size: 14px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {\n  padding: 10px 9px 9px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {\n  padding-top: 8.5px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {\n  width: 43px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {\n  display: inline-block;\n  margin: 0 10px 0 -5px;\n  vertical-align: middle;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  position: relative;\n  top: 17px;\n  width: 0;\n  height: 3px;\n  background: #aaa;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 240px;\n  min-width: 120px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: auto;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: 150px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {\n  width: 70px;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {\n  padding: 5px 0;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {\n  padding: 0 10px;\n  display: inline;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: none;\n  vertical-align: middle;\n  height: 100%;\n  width: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {\n  position: relative;\n  top: 8.5px;\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  background: #aaa;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  background: #aaa;\n}\n.dplayer-controller .dplayer-icons .dplayer-full {\n  display: inline-block;\n  height: 100%;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: absolute;\n  top: -30px;\n  z-index: 1;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {\n  display: none;\n  position: absolute;\n  bottom: 38px;\n  left: -18px;\n  width: 80px;\n  padding-bottom: 12px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {\n  display: none;\n  font-size: 12px;\n  width: 80px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 5px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {\n  height: 25px;\n  box-sizing: border-box;\n  cursor: pointer;\n  line-height: 25px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-comment {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-label {\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle {\n  width: 32px;\n  height: 20px;\n  text-align: center;\n  font-size: 0;\n  vertical-align: middle;\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input {\n  max-height: 0;\n  max-width: 0;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label {\n  display: inline-block;\n  position: relative;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border: 1px solid #dfdfdf;\n  height: 20px;\n  width: 32px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 18px;\n  width: 18px;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  background: #fff;\n  transition: 0.2s ease-in-out;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 18px;\n  width: 18px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {\n  width: 30px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {\n  left: 12px;\n}\n.dplayer-mobile-play {\n  display: none;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  bottom: 0;\n  opacity: 0.8;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.dplayer-danmaku {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n}\n.dplayer-danmaku .dplayer-danmaku-item {\n  display: inline-block;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: default;\n  white-space: nowrap;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n}\n.dplayer-danmaku .dplayer-danmaku-item--demo {\n  position: absolute;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-right {\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n}\n.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {\n  will-change: transform;\n  animation-name: 'danmaku';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n.dplayer-danmaku .dplayer-danmaku-top,\n.dplayer-danmaku .dplayer-danmaku-bottom {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,\n.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {\n  will-change: visibility;\n  animation-name: 'danmaku-center';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n.dplayer-logo {\n  pointer-events: none;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  max-width: 50px;\n  max-height: 50px;\n}\n.dplayer-logo img {\n  max-width: 100%;\n  max-height: 100%;\n  background: none;\n}\n.dplayer-menu {\n  position: absolute;\n  width: 170px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.85);\n  padding: 5px 0;\n  overflow: hidden;\n  z-index: 3;\n  display: none;\n}\n.dplayer-menu.dplayer-menu-show {\n  display: block;\n}\n.dplayer-menu .dplayer-menu-item {\n  height: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-menu .dplayer-menu-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-menu .dplayer-menu-item a {\n  padding: 0 10px;\n  line-height: 30px;\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-menu .dplayer-menu-item a:hover {\n  text-decoration: none;\n}\n.dplayer-notice-list {\n  position: absolute;\n  bottom: 60px;\n  left: 20px;\n}\n.dplayer-notice-list .dplayer-notice {\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  display: table;\n  pointer-events: none;\n  animation: showNotice 0.3s ease 1 forwards;\n}\n.dplayer-notice-list .remove-notice {\n  animation: removeNotice 0.3s ease 1 forwards;\n}\n@keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n.dplayer-subtitle {\n  position: absolute;\n  bottom: 40px;\n  width: 90%;\n  left: 5%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n}\n.dplayer-subtitle.dplayer-subtitle-hide {\n  display: none;\n}\n.dplayer-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: none;\n}\n.dplayer-mask.dplayer-mask-show {\n  display: block;\n}\n.dplayer-video-wrap {\n  position: relative;\n  background: #000;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n.dplayer-video-wrap .dplayer-video {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.dplayer-video-wrap .dplayer-video-current {\n  display: block;\n}\n.dplayer-video-wrap .dplayer-video-prepare {\n  display: none;\n}\n.dplayer-info-panel {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 400px;\n  background: rgba(28, 28, 28, 0.8);\n  padding: 10px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 2px;\n}\n.dplayer-info-panel-hide {\n  display: none;\n}\n.dplayer-info-panel .dplayer-info-panel-close {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item > span {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-info-panel .dplayer-info-panel-item-title {\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item-data {\n  width: 260px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/notice.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],"names":[],"mappings":"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AD/WC;EIgEmB,qBAAA;AHkTpB;ADlXC;EIgEmB,qBAAA;AHqTpB;ADrXC;EIgEmB,qBAAA;AHwTpB;ADxXC;EIgEmB,qBAAA;AH2TpB;AD3XC;EIgEmB,qBAAA;AH8TpB;AD9XC;EIgEmB,qBAAA;AHiUpB;ADjYC;EIgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AIlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;AJoZJ;AIjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;AJmZJ;AIlZI;EAEQ,aAAA;AJmZZ;AIrZI;EAKQ,cAAA;AJmZZ;AIjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;AJkZR;AIjZQ;EAEQ,mBAAA;AJkZhB;AIpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;AJkZhB;AInbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;AJiZZ;AIhZY;EAEQ,cAAA;AJiZpB;AI/YgB;EACI,UAAA;AJiZpB;AI/YgB;EACI,UAAA;AJiZpB;AIxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;AJgZhB;AIrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AJ+YZ;AI5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AJ+YZ;AIneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AJ4YZ;AI7ZY;EACI,UAAA;AJ+ZhB;AIvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AJ+YZ;AI9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;AJgZhB;AIxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;AJgZhB;AIhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;AJiZpB;AI7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AJ8YR;AI7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AJ+YZ;AIxZQ;EAWQ,YAAA;AJgZhB;AI3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;AJgZhB;AIhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;AJgZhB;AIraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;AJgZhB;AI/YgB;EACI,mBAAA;AJiZpB;AIrbQ;EAuCY,aAAA;AJiZpB;AIxbQ;EA0CY,eAAA;AJiZpB;AI3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;AJiZpB;AIhcQ;EAkDY,YAAA;AJiZpB;AIncQ;EAoDgB,kBAAA;AJkZxB;AI/YwB;EAEQ,0BAAA;AJgZhC;AI7YwB;EAEQ,0BAAA;AJ8YhC;AI5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AJ4YxB;AIzdQ;EAgFgB,mBAAA;EACA,cAAA;AJ4YxB;AI7dQ;EAqFY,YAAA;AJ2YpB;AIheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AJ4YxB;AIreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AJ4YxB;AI3YwB;EACI,0CAAA;AJ6Y5B;AIhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AJ0YhB;AIzYgB;EACI,WAAA;EACA,YAAA;AJ2YpB;AI7YgB;EACI,WAAA;EACA,YAAA;AJ2YpB;AIzYgB;EACI,aAAA;AJ2YpB;AIvYQ;EAEQ,YAAA;AJwYhB;AIrYQ;EACI,WAAA;AJuYZ;AIxYQ;EAGQ,YAAA;AJwYhB;AIpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;AJuYZ;AI7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;AJuYZ;AItrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;AJuYZ;AIjsBA;EA4TgB,gCAAA;EACA,YAAA;AJwYhB;AItYY;EAEQ,UAAA;AJuYpB;AIpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;AJsYhB;AIpYY;EACI,qBAAA;AJsYhB;AIpYY;EACI,kBAAA;AJsYhB;AIpYY;EACI,WAAA;AJsYhB;AIvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;AJqYZ;AIpYY;EAEQ,WAAA;AJqYpB;AIvYY;EAKQ,mBAAA;AJqYpB;AIlYY;EAEQ,WAAA;AJmYpB;AIrYY;EAKQ,mBAAA;AJmYpB;AIzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;AJkYhB;AI/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AJmYpB;AIvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;AJoYxB;AI/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;AJqY5B;AI5wBA;EA8YY,qBAAA;EACA,YAAA;AJiYZ;AIhxBA;EAkZY,qBAAA;EACA,YAAA;AJiYZ;AIpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;AJkYhB;AIjYgB;EACI,cAAA;AJmYpB;AIjYgB;EACI,mBAAA;AJmYpB;AIzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;AJkYhB;AIjYgB;EACI,0CAAA;AJmYpB;AInzBA;EAqbY,qBAAA;EACA,YAAA;AJiYZ;AIvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;AJkYhB;AIjYgB;EACI,aAAA;AJmYpB;AIlYoB;EACI,cAAA;AJoYxB;AIjYgB;EACI,mBAAA;AJmYpB;AIjYgB;EACI,WAAA;EACA,kBAAA;AJmYpB;AIjYgB;EAEQ,aAAA;AJkYxB;AIpYgB;EAKQ,cAAA;AJkYxB;AIv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;AJgYhB;AI/XgB;;EACI,0CAAA;AJkYpB;AIn2BA;EAqegB,cAAA;AJiYhB;AIt2BA;EAueoB,eAAA;EACA,eAAA;AJkYpB;AIhYgB;EAEQ,aAAA;AJiYxB;AInYgB;EAKQ,qBAAA;AJiYxB;AI9XgB;EAEQ,aAAA;AJ+XxB;AIjYgB;EAKQ,qBAAA;AJ+XxB;AIt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AJ8XpB;AI93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AJ+XxB;AIt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AJgY5B;AI/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;AJiYhC;AI55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AJ4XZ;AI3XY;EAEQ,cAAA;AJ4XpB;AIp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AJ2XhB;AI16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AJ0XZ;AIzXY;EAEQ,cAAA;AJ0XpB;AI5XY;EAKQ,cAAA;AJ0XpB;AIt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;AJyXhB;AI97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;AJyXhB;AI18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;AJyXhB;AIxXgB;EACI,0CAAA;AJ0XpB;AIn9BA;EA8lBY,qBAAA;EACA,YAAA;AJwXZ;AIv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;AJwXZ;AI99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;AJwXZ;AIx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;AJyXhB;AI7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;AJyXhB;AIz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;AJyXhB;AIpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;AJyXhB;AIjhCA;EA2pBgB,sCAAA;AJyXhB;AIphCA;EA8pBgB,WAAA;EACA,oCAAA;AJyXhB;AIxhCA;EAkqBgB,UAAA;AJyXhB;AInXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;AJoXJ;AKpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ALsjCJ;AK7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ALujCR;AKtjCQ;EACI,kBAAA;EACA,kBAAA;ALwjCZ;AKzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ALujCR;AKtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ALwjCZ;AKrjCI;EACI;IACI,2BAAA;ELujCV;AACF;AKzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ALujCR;AKtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ALyjCZ;AKtjCI;EACI;IACI,mBAAA;ELwjCV;EKtjCM;IACI,mBAAA;ELwjCV;AACF;AM/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;ANinCJ;AMvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;ANknCR;AO5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AP8nCJ;AO7nCI;EACI,cAAA;AP+nCR;AOzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AP+nCR;AO9nCQ;EACI,0CAAA;APgoCZ;AOjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AP+nCZ;AO9nCY;EACI,qBAAA;APgoChB;AQjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;ARmqCJ;AQtqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;ARmqCR;AQhrCA;EAiBQ,4CAAA;ARkqCR;AQ9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ERgqCN;EQ9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ERgqCN;AACF;AQ7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ER+pCN;EQ7pCE;IACI,eAAA;ER+pCN;EQ7pCE;IACI,YAAA;IACA,iBAAA;ER+pCN;EQ7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ER+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR","sourcesContent":["@keyframes my-face {\n    2% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    4% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    6% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    8% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    10% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    12% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    14% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    16% {\n        transform: translate(0, -0.5px) rotate(-1.5deg);\n    }\n    18% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    20% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    22% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    24% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    26% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    28% {\n        transform: translate(0, 0.5px) rotate(1.5deg);\n    }\n    30% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    32% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    34% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    36% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    38% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    40% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    42% {\n        transform: translate(0, 2.5px) rotate(-1.5deg);\n    }\n    44% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    46% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    48% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    50% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    52% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    54% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    56% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    58% {\n        transform: translate(0, 0.5px) rotate(2.5deg);\n    }\n    60% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    62% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    64% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    66% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    68% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    70% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    72% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    74% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    76% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    78% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    80% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    82% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    84% {\n        transform: translate(0, 1.5px) rotate(2.5deg);\n    }\n    86% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    88% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    90% {\n        transform: translate(0, 2.5px) rotate(-0.5deg);\n    }\n    92% {\n        transform: translate(0, 0.5px) rotate(-0.5deg);\n    }\n    94% {\n        transform: translate(0, 2.5px) rotate(0.5deg);\n    }\n    96% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    98% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    0%,\n    100% {\n        transform: translate(0, 0) rotate(0deg);\n    }\n}","@import '../../node_modules/balloon-css/balloon.css';\n@keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.dplayer {\n  position: relative;\n  overflow: hidden;\n  user-select: none;\n  line-height: 1;\n}\n.dplayer * {\n  box-sizing: content-box;\n}\n.dplayer svg {\n  width: 100%;\n  height: 100%;\n}\n.dplayer svg path,\n.dplayer svg circle {\n  fill: #fff;\n}\n.dplayer:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transform: translate(0, 0);\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-danmaku {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-time {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-bar-wrap {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-speed {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-loop {\n  display: none;\n}\n.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {\n  display: none;\n}\n.dplayer.dplayer-arrow .dplayer-danmaku {\n  font-size: 18px;\n}\n.dplayer.dplayer-arrow .dplayer-icon {\n  margin: 0 -3px;\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {\n  animation-play-state: running;\n}\n@media (min-width: 900px) {\n  .dplayer.dplayer-playing .dplayer-controller-mask {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing .dplayer-controller {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller-mask {\n    opacity: 1;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller {\n    opacity: 1;\n  }\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {\n  display: block;\n}\n.dplayer.dplayer-loading .dplayer-danmaku,\n.dplayer.dplayer-paused .dplayer-danmaku,\n.dplayer.dplayer-loading .dplayer-danmaku-move,\n.dplayer.dplayer-paused .dplayer-danmaku-move {\n  animation-play-state: paused;\n}\n.dplayer.dplayer-hide-controller {\n  cursor: none;\n}\n.dplayer.dplayer-hide-controller .dplayer-controller-mask {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-hide-controller .dplayer-controller {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-show-controller .dplayer-controller-mask {\n  opacity: 1;\n}\n.dplayer.dplayer-show-controller .dplayer-controller {\n  opacity: 1;\n}\n.dplayer.dplayer-fulled {\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100% !important;\n  height: 100% !important;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: static;\n  display: inline-block;\n}\n.dplayer.dplayer-mobile .dplayer-bar-time {\n  display: none;\n}\n.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-mobile-play {\n  display: block;\n}\n.dplayer-web-fullscreen-fix {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n[data-balloon]:before {\n  display: none;\n}\n[data-balloon]:after {\n  padding: 0.3em 0.7em;\n  background: rgba(17, 17, 17, 0.7);\n}\n[data-balloon][data-balloon-pos=\"up\"]:after {\n  margin-bottom: 0;\n}\n.dplayer-bezel {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n  height: 52px;\n  width: 52px;\n  padding: 12px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {\n  animation: bezel-hide 0.5s linear;\n}\n@keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.dplayer-bezel .dplayer-danloading {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 14px;\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-bezel .diplayer-loading-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -18px 0 0 -18px;\n  height: 36px;\n  width: 36px;\n  pointer-events: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {\n  display: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {\n  animation: diplayer-loading-dot-fade 0.8s ease infinite;\n  opacity: 0;\n  transform-origin: 4px 4px;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {\n  animation-delay: 0.1s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {\n  animation-delay: 0.2s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {\n  animation-delay: 0.3s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {\n  animation-delay: 0.4s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {\n  animation-delay: 0.5s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {\n  animation-delay: 0.6s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {\n  animation-delay: 0.7s;\n}\n@keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n.dplayer-controller-mask {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n  height: 98px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  transition: all 0.3s ease;\n}\n.dplayer-controller {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 41px;\n  padding: 0 20px;\n  user-select: none;\n  transition: all 0.3s ease;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons {\n  display: none;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap {\n  padding: 5px 0;\n  cursor: pointer;\n  position: absolute;\n  bottom: 33px;\n  width: calc(100% - 40px);\n  height: 3px;\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {\n  display: block;\n  width: 8px;\n  transform: translateX(-4px);\n  top: 4px;\n  height: 40%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {\n  z-index: 12;\n  position: absolute;\n  top: 5px;\n  width: 6px;\n  height: 20%;\n  border-radius: 6px;\n  background-color: #fff;\n  text-align: center;\n  transform: translateX(-3px);\n  transition: all 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -24px;\n  padding: 5px 8px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  border-radius: 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  transform: translateX(-50%);\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {\n  position: absolute;\n  background: #fff;\n  pointer-events: none;\n  display: none;\n  background-size: 16000px 100%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {\n  position: absolute;\n  left: 0px;\n  top: -20px;\n  border-radius: 4px;\n  padding: 5px 7px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n  word-wrap: normal;\n  word-break: normal;\n  z-index: 2;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar {\n  position: relative;\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  height: 3px;\n  transition: all 0.5s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 3px;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons {\n  height: 38px;\n  position: absolute;\n  bottom: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box {\n  display: none;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  z-index: 2;\n  height: 38px;\n  bottom: 0;\n  left: 20px;\n  right: 20px;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {\n  position: absolute;\n  background: rgba(28, 28, 28, 0.9);\n  bottom: 41px;\n  left: 0;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  padding: 10px 10px 16px;\n  font-size: 14px;\n  width: 204px;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {\n  font-size: 13px;\n  color: #fff;\n  line-height: 30px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {\n  margin-bottom: 6px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {\n  border-radius: 4px 0 0 4px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {\n  border-radius: 0 4px 4px 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {\n  width: 33%;\n  padding: 4px 6px;\n  line-height: 16px;\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-right: -1px;\n  box-sizing: border-box;\n  text-align: center;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {\n  background: #E4E4E6;\n  color: #1c1c1c;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {\n  font-size: 0;\n  padding: 6px;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {\n  width: 22px;\n  height: 22px;\n  display: inline-block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {\n  outline: none;\n  border: none;\n  padding: 8px 31px;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  background: none;\n  margin: 0;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right {\n  right: 20px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {\n  padding: 8px;\n}\n.dplayer-controller .dplayer-icons .dplayer-time,\n.dplayer-controller .dplayer-icons .dplayer-live-badge {\n  line-height: 38px;\n  color: #eee;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  vertical-align: middle;\n  font-size: 13px;\n  cursor: default;\n}\n.dplayer-controller .dplayer-icons .dplayer-live-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  vertical-align: 4%;\n  margin-right: 5px;\n  content: '';\n  border-radius: 6px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon {\n  width: 40px;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {\n  transition: all 0.2s ease-in-out;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {\n  opacity: 1;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {\n  color: #fff;\n  width: auto;\n  line-height: 22px;\n  font-size: 14px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {\n  padding: 10px 9px 9px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {\n  padding-top: 8.5px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {\n  width: 43px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {\n  display: inline-block;\n  margin: 0 10px 0 -5px;\n  vertical-align: middle;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  position: relative;\n  top: 17px;\n  width: 0;\n  height: 3px;\n  background: #aaa;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: fit-content;\n  max-width: 240px;\n  min-width: 120px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: auto;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: 150px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {\n  width: 70px;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {\n  padding: 5px 0;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {\n  padding: 0 10px;\n  display: inline;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: none;\n  vertical-align: middle;\n  height: 100%;\n  width: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {\n  position: relative;\n  top: 8.5px;\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  background: #aaa;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  background: #aaa;\n}\n.dplayer-controller .dplayer-icons .dplayer-full {\n  display: inline-block;\n  height: 100%;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: absolute;\n  top: -30px;\n  z-index: 1;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {\n  display: none;\n  position: absolute;\n  bottom: 38px;\n  left: -18px;\n  width: 80px;\n  padding-bottom: 12px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {\n  display: none;\n  font-size: 12px;\n  width: 80px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 5px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {\n  height: 25px;\n  box-sizing: border-box;\n  cursor: pointer;\n  line-height: 25px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-comment {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-label {\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle {\n  width: 32px;\n  height: 20px;\n  text-align: center;\n  font-size: 0;\n  vertical-align: middle;\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input {\n  max-height: 0;\n  max-width: 0;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label {\n  display: inline-block;\n  position: relative;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border: 1px solid #dfdfdf;\n  height: 20px;\n  width: 32px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 18px;\n  width: 18px;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  background: #fff;\n  transition: 0.2s ease-in-out;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 18px;\n  width: 18px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {\n  width: 30px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {\n  left: 12px;\n}\n.dplayer-mobile-play {\n  display: none;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  bottom: 0;\n  opacity: 0.8;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.dplayer-danmaku {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n}\n.dplayer-danmaku .dplayer-danmaku-item {\n  display: inline-block;\n  pointer-events: none;\n  user-select: none;\n  cursor: default;\n  white-space: nowrap;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n}\n.dplayer-danmaku .dplayer-danmaku-item--demo {\n  position: absolute;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-right {\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n}\n.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {\n  will-change: transform;\n  animation-name: 'danmaku';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n.dplayer-danmaku .dplayer-danmaku-top,\n.dplayer-danmaku .dplayer-danmaku-bottom {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,\n.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {\n  will-change: visibility;\n  animation-name: 'danmaku-center';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n.dplayer-logo {\n  pointer-events: none;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  max-width: 50px;\n  max-height: 50px;\n}\n.dplayer-logo img {\n  max-width: 100%;\n  max-height: 100%;\n  background: none;\n}\n.dplayer-menu {\n  position: absolute;\n  width: 170px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.85);\n  padding: 5px 0;\n  overflow: hidden;\n  z-index: 3;\n  display: none;\n}\n.dplayer-menu.dplayer-menu-show {\n  display: block;\n}\n.dplayer-menu .dplayer-menu-item {\n  height: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-menu .dplayer-menu-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-menu .dplayer-menu-item a {\n  padding: 0 10px;\n  line-height: 30px;\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-menu .dplayer-menu-item a:hover {\n  text-decoration: none;\n}\n.dplayer-notice-list {\n  position: absolute;\n  bottom: 60px;\n  left: 20px;\n}\n.dplayer-notice-list .dplayer-notice {\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  display: table;\n  pointer-events: none;\n  animation: showNotice 0.3s ease 1 forwards;\n}\n.dplayer-notice-list .remove-notice {\n  animation: removeNotice 0.3s ease 1 forwards;\n}\n@keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n.dplayer-subtitle {\n  position: absolute;\n  bottom: 40px;\n  width: 90%;\n  left: 5%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n}\n.dplayer-subtitle.dplayer-subtitle-hide {\n  display: none;\n}\n.dplayer-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: none;\n}\n.dplayer-mask.dplayer-mask-show {\n  display: block;\n}\n.dplayer-video-wrap {\n  position: relative;\n  background: #000;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n.dplayer-video-wrap .dplayer-video {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.dplayer-video-wrap .dplayer-video-current {\n  display: block;\n}\n.dplayer-video-wrap .dplayer-video-prepare {\n  display: none;\n}\n.dplayer-info-panel {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 400px;\n  background: rgba(28, 28, 28, 0.8);\n  padding: 10px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 2px;\n}\n.dplayer-info-panel-hide {\n  display: none;\n}\n.dplayer-info-panel .dplayer-info-panel-close {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item > span {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-info-panel .dplayer-info-panel-item-title {\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item-data {\n  width: 260px;\n}\n",".dplayer {\n    position: relative;\n    overflow: hidden;\n    user-select: none;\n    line-height: 1;\n\n    * {\n        box-sizing: content-box;\n    }\n\n    svg {\n        width: 100%;\n        height: 100%;\n\n        path,\n        circle {\n            fill: #fff;\n        }\n    }\n\n    &:-webkit-full-screen {\n        width: 100%;\n        height: 100%;\n        background: #000;\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        margin: 0;\n        padding: 0;\n        transform: translate(0, 0);\n        \n    }\n\n    &.dplayer-no-danmaku {\n        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n            .dplayer-setting-showdan,\n            .dplayer-setting-danmaku,\n            .dplayer-setting-danunlimit {\n                display: none;\n            }\n        }\n\n        .dplayer-controller .dplayer-icons .dplayer-comment {\n            display: none;\n        }\n\n        .dplayer-danmaku {\n            display: none;\n        }\n    }\n\n    &.dplayer-live {\n        .dplayer-time {\n            display: none;\n        }\n        .dplayer-bar-wrap {\n            display: none;\n        }\n        .dplayer-setting-speed {\n            display: none;\n        }\n        .dplayer-setting-loop {\n            display: none;\n        }\n\n        &.dplayer-no-danmaku {\n            .dplayer-setting {\n                display: none;\n            }\n        }\n    }\n\n    &.dplayer-arrow {\n        .dplayer-danmaku {\n            font-size: 18px;\n        }\n        .dplayer-icon {\n            margin: 0 -3px;\n        }\n    }\n\n    &.dplayer-playing {\n        .dplayer-danmaku .dplayer-danmaku-move {\n            animation-play-state: running;\n        }\n\n        @media (min-width: 900px) {\n            .dplayer-controller-mask {\n                opacity: 0;\n            }\n            .dplayer-controller {\n                opacity: 0;\n            }\n\n            &:hover {\n                .dplayer-controller-mask {\n                    opacity: 1;\n                }\n                .dplayer-controller {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n\n    &.dplayer-loading {\n        .dplayer-bezel .diplayer-loading-icon {\n            display: block;\n        }\n    }\n\n    &.dplayer-loading,\n    &.dplayer-paused {\n        .dplayer-danmaku,\n        .dplayer-danmaku-move {\n            animation-play-state: paused;\n        }\n    }\n\n    &.dplayer-hide-controller {\n        cursor: none;\n\n        .dplayer-controller-mask {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n        .dplayer-controller {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n    }\n    &.dplayer-show-controller {\n        .dplayer-controller-mask {\n            opacity: 1;\n        }\n        .dplayer-controller {\n            opacity: 1;\n        }\n    }\n    &.dplayer-fulled {\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        width: 100% !important;\n        height: 100% !important;\n    }\n    &.dplayer-mobile {\n        .dplayer-controller .dplayer-icons {\n            .dplayer-volume,\n            .dplayer-camera-icon,\n            .dplayer-airplay-icon,\n            .dplayer-chromecast-icon,\n            .dplayer-play-icon {\n                display: none;\n            }\n            .dplayer-full .dplayer-full-in-icon {\n                position: static;\n                display: inline-block;\n            }\n        }\n\n        .dplayer-bar-time {\n            display: none;\n        }\n\n        &.dplayer-hide-controller {\n            .dplayer-mobile-play {\n                display: none;\n            }\n        }\n\n        .dplayer-mobile-play {\n            display: block;\n        }\n    }\n}\n\n// To hide scroll bar, apply this class to <body>\n.dplayer-web-fullscreen-fix {\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n}\n","@import '../../node_modules/balloon-css/balloon.css';\n\n[data-balloon]:before {\n    display: none;\n}\n\n[data-balloon]:after {\n    padding: 0.3em 0.7em;\n    background: rgba(17, 17, 17, 0.7);\n}\n\n[data-balloon][data-balloon-pos=\"up\"]:after {\n    margin-bottom: 0;\n}",".dplayer-bezel {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    pointer-events: none;\n    .dplayer-bezel-icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -26px 0 0 -26px;\n        height: 52px;\n        width: 52px;\n        padding: 12px;\n        box-sizing: border-box;\n        background: rgba(0, 0, 0, .5);\n        border-radius: 50%;\n        opacity: 0;\n        pointer-events: none;\n        &.dplayer-bezel-transition {\n            animation: bezel-hide .5s linear;\n        }\n        @keyframes bezel-hide {\n            from {\n                opacity: 1;\n                transform: scale(1);\n            }\n            to {\n                opacity: 0;\n                transform: scale(2);\n            }\n        }\n    }\n    .dplayer-danloading {\n        position: absolute;\n        top: 50%;\n        margin-top: -7px;\n        width: 100%;\n        text-align: center;\n        font-size: 14px;\n        line-height: 14px;\n        animation: my-face 5s infinite ease-in-out;\n    }\n    .diplayer-loading-icon {\n        display: none;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -18px 0 0 -18px;\n        height: 36px;\n        width: 36px;\n        pointer-events: none;\n        .diplayer-loading-hide {\n            display: none;\n        }\n        .diplayer-loading-dot {\n            animation: diplayer-loading-dot-fade .8s ease infinite;\n            opacity: 0;\n            transform-origin: 4px 4px;\n            each(range(7), {\n                &.diplayer-loading-dot-@{value} {\n                    animation-delay: (@value * 0.1s);\n                }\n            });\n        }\n        @keyframes diplayer-loading-dot-fade {\n            0% {\n                opacity: .7;\n                transform: scale(1.2, 1.2)\n            }\n            50% {\n                opacity: .25;\n                transform: scale(.9, .9)\n            }\n            to {\n                opacity: .25;\n                transform: scale(.85, .85)\n            }\n        }\n    }\n}",".dplayer-controller-mask {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n    height: 98px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    transition: all 0.3s ease;\n}\n\n.dplayer-controller {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 41px;\n    padding: 0 20px;\n    user-select: none;\n    transition: all 0.3s ease;\n    &.dplayer-controller-comment {\n        .dplayer-icons {\n            display: none;\n        }\n        .dplayer-icons.dplayer-comment-box {\n            display: block;\n        }\n    }\n    .dplayer-bar-wrap {\n        padding: 5px 0;\n        cursor: pointer;\n        position: absolute;\n        bottom: 33px;\n        width: calc(100% - 40px);\n        height: 3px;\n        &:hover {\n            .dplayer-bar .dplayer-played .dplayer-thumb {\n                transform: scale(1);\n            }\n            .dplayer-highlight {\n                display: block;\n                width: 8px;\n                transform: translateX(-4px);\n                top: 4px;\n                height: 40%;\n            }\n        }\n        .dplayer-highlight {\n            z-index: 12;\n            position: absolute;\n            top: 5px;\n            width: 6px;\n            height: 20%;\n            border-radius: 6px;\n            background-color: #fff;\n            text-align: center;\n            transform: translateX(-3px);\n            transition: all .2s ease-in-out;\n            &:hover {\n                .dplayer-highlight-text {\n                    display: block;\n                }\n                &~.dplayer-bar-preview {\n                    opacity: 0;\n                }\n                &~.dplayer-bar-time {\n                    opacity: 0;\n                }\n            }\n            .dplayer-highlight-text {\n                display: none;\n                position: absolute;\n                left: 50%;\n                top: -24px;\n                padding: 5px 8px;\n                background-color: rgba(0, 0, 0, .62);\n                color: #fff;\n                border-radius: 4px;\n                font-size: 12px;\n                white-space: nowrap;\n                transform: translateX(-50%);\n            }\n        }\n        .dplayer-bar-preview {\n            position: absolute;\n            background: #fff;\n            pointer-events: none;\n            display: none;\n            background-size: 16000px 100%;\n        }\n        .dplayer-bar-preview-canvas {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n            pointer-events: none;\n        }\n        .dplayer-bar-time {\n            &.hidden {\n                opacity: 0;\n            }\n            position: absolute;\n            left: 0px;\n            top: -20px;\n            border-radius: 4px;\n            padding: 5px 7px;\n            background-color: rgba(0, 0, 0, 0.62);\n            color: #fff;\n            font-size: 12px;\n            text-align: center;\n            opacity: 1;\n            transition: opacity .1s ease-in-out;\n            word-wrap: normal;\n            word-break: normal;\n            z-index: 2;\n            pointer-events: none;\n        }\n        .dplayer-bar {\n            position: relative;\n            height: 3px;\n            width: 100%;\n            background: rgba(255, 255, 255, .2);\n            cursor: pointer;\n            .dplayer-loaded {\n                position: absolute;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                background: rgba(255, 255, 255, .4);\n                height: 3px;\n                transition: all 0.5s ease;\n                will-change: width;\n            }\n            .dplayer-played {\n                position: absolute;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                height: 3px;\n                will-change: width;\n                .dplayer-thumb {\n                    position: absolute;\n                    top: 0;\n                    right: 5px;\n                    margin-top: -4px;\n                    margin-right: -10px;\n                    height: 11px;\n                    width: 11px;\n                    border-radius: 50%;\n                    cursor: pointer;\n                    transition: all .3s ease-in-out;\n                    transform: scale(0);\n                }\n            }\n        }\n    }\n    .dplayer-icons {\n        height: 38px;\n        position: absolute;\n        bottom: 0;\n        &.dplayer-comment-box {\n            display: none;\n            position: absolute;\n            transition: all .3s ease-in-out;\n            z-index: 2;\n            height: 38px;\n            bottom: 0;\n            left: 20px;\n            right: 20px;\n            color: #fff;\n            .dplayer-icon {\n                padding: 7px;\n            }\n            .dplayer-comment-setting-icon {\n                position: absolute;\n                left: 0;\n                top: 0;\n            }\n            .dplayer-send-icon {\n                position: absolute;\n                right: 0;\n                top: 0;\n            }\n            .dplayer-comment-setting-box {\n                position: absolute;\n                background: rgba(28, 28, 28, 0.9);\n                bottom: 41px;\n                left: 0;\n                box-shadow: 0 0 25px rgba(0, 0, 0, .3);\n                border-radius: 4px;\n                padding: 10px 10px 16px;\n                font-size: 14px;\n                width: 204px;\n                transition: all .3s ease-in-out;\n                transform: scale(0);\n                &.dplayer-comment-setting-open {\n                    transform: scale(1);\n                }\n                input[type=radio] {\n                    display: none;\n                }\n                label {\n                    cursor: pointer;\n                }\n                .dplayer-comment-setting-title {\n                    font-size: 13px;\n                    color: #fff;\n                    line-height: 30px;\n                }\n                .dplayer-comment-setting-type {\n                    font-size: 0;\n                    .dplayer-comment-setting-title {\n                        margin-bottom: 6px;\n                    }\n                    label {\n                        &:nth-child(2) {\n                            span {\n                                border-radius: 4px 0 0 4px;\n                            }\n                        }\n                        &:nth-child(4) {\n                            span {\n                                border-radius: 0 4px 4px 0;\n                            }\n                        }\n                    }\n                    span {\n                        width: 33%;\n                        padding: 4px 6px;\n                        line-height: 16px;\n                        display: inline-block;\n                        font-size: 12px;\n                        color: #fff;\n                        border: 1px solid #fff;\n                        margin-right: -1px;\n                        box-sizing: border-box;\n                        text-align: center;\n                        cursor: pointer;\n                    }\n                    input:checked+span {\n                        background: #E4E4E6;\n                        color: #1c1c1c;\n                    }\n                }\n                .dplayer-comment-setting-color {\n                    font-size: 0;\n                    label {\n                        font-size: 0;\n                        padding: 6px;\n                        display: inline-block;\n                    }\n                    span {\n                        width: 22px;\n                        height: 22px;\n                        display: inline-block;\n                        border-radius: 50%;\n                        box-sizing: border-box;\n                        cursor: pointer;\n                        &:hover {\n                            animation: my-face 5s infinite ease-in-out;\n                        }\n                    }\n                }\n            }\n            .dplayer-comment-input {\n                outline: none;\n                border: none;\n                padding: 8px 31px;\n                font-size: 14px;\n                line-height: 18px;\n                text-align: center;\n                border-radius: 4px;\n                background: none;\n                margin: 0;\n                height: 100%;\n                box-sizing: border-box;\n                width: 100%;\n                color: #fff;\n                &::placeholder {\n                    color: #fff;\n                    opacity: 0.8;\n                }\n                &::-ms-clear {\n                    display: none;\n                }\n            }\n        }\n        &.dplayer-icons-left {\n            .dplayer-icon {\n                padding: 7px;\n            }\n        }\n        &.dplayer-icons-right {\n            right: 20px;\n            .dplayer-icon {\n                padding: 8px;\n            }\n        }\n        .dplayer-time,\n        .dplayer-live-badge {\n            line-height: 38px;\n            color: #eee;\n            text-shadow: 0 0 2px rgba(0, 0, 0, .5);\n            vertical-align: middle;\n            font-size: 13px;\n            cursor: default;\n        }\n        .dplayer-live-dot {\n            display: inline-block;\n            width: 6px;\n            height: 6px;\n            vertical-align: 4%;\n            margin-right: 5px;\n            content: '';\n            border-radius: 6px;\n        }\n        .dplayer-icon {\n            width: 40px;\n            height: 100%;\n            border: none;\n            background-color: transparent;\n            outline: none;\n            cursor: pointer;\n            vertical-align: middle;\n            box-sizing: border-box;\n            display: inline-block;\n            .dplayer-icon-content {\n                transition: all .2s ease-in-out;\n                opacity: .8;\n            }\n            &:hover {\n                .dplayer-icon-content {\n                    opacity: 1;\n                }\n            }\n            &.dplayer-quality-icon {\n                color: #fff;\n                width: auto;\n                line-height: 22px;\n                font-size: 14px;\n            }\n            &.dplayer-comment-icon {\n                padding: 10px 9px 9px;\n            }\n            &.dplayer-setting-icon {\n                padding-top: 8.5px;\n            }\n            &.dplayer-volume-icon {\n                width: 43px;\n            }\n        }\n        .dplayer-volume {\n            position: relative;\n            display: inline-block;\n            cursor: pointer;\n            height: 100%;\n            &:hover {\n                .dplayer-volume-bar-wrap .dplayer-volume-bar {\n                    width: 45px;\n                }\n                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n                    transform: scale(1);\n                }\n            }\n            &.dplayer-volume-active {\n                .dplayer-volume-bar-wrap .dplayer-volume-bar {\n                    width: 45px;\n                }\n                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n                    transform: scale(1);\n                }\n            }\n            .dplayer-volume-bar-wrap {\n                display: inline-block;\n                margin: 0 10px 0 -5px;\n                vertical-align: middle;\n                height: 100%;\n                .dplayer-volume-bar {\n                    position: relative;\n                    top: 17px;\n                    width: 0;\n                    height: 3px;\n                    background: #aaa;\n                    transition: all 0.3s ease-in-out;\n                    .dplayer-volume-bar-inner {\n                        position: absolute;\n                        bottom: 0;\n                        left: 0;\n                        height: 100%;\n                        transition: all 0.1s ease;\n                        will-change: width;\n                        .dplayer-thumb {\n                            position: absolute;\n                            top: 0;\n                            right: 5px;\n                            margin-top: -4px;\n                            margin-right: -10px;\n                            height: 11px;\n                            width: 11px;\n                            border-radius: 50%;\n                            cursor: pointer;\n                            transition: all .3s ease-in-out;\n                            transform: scale(0);\n                        }\n                    }\n                }\n            }\n        }\n        .dplayer-subtitle-btn {\n            display: inline-block;\n            height: 100%;\n        }\n        .dplayer-subtitles {\n            display: inline-block;\n            height: 100%;\n            .dplayer-subtitles-box {\n                position: absolute;\n                right: 0;\n                bottom: 50px;\n                transform: scale(0);\n                width: fit-content;\n                max-width: 240px;\n                min-width: 120px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 7px 0;\n                transition: all .3s ease-in-out;\n                overflow: auto;\n                z-index: 2;\n                &.dplayer-subtitles-panel {\n                    display: block;\n                }\n                &.dplayer-subtitles-box-open {\n                    transform: scale(1);\n                }\n            }\n            .dplayer-subtitles-item {\n                height: 30px;\n                padding: 5px 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                position: relative;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n        }\n        .dplayer-setting {\n            display: inline-block;\n            height: 100%;\n            .dplayer-setting-box {\n                position: absolute;\n                right: 0;\n                bottom: 50px;\n                transform: scale(0);\n                width: 150px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 7px 0;\n                transition: all .3s ease-in-out;\n                overflow: hidden;\n                z-index: 2;\n                &>div {\n                    display: none;\n                    &.dplayer-setting-origin-panel {\n                        display: block;\n                    }\n                }\n                &.dplayer-setting-box-open {\n                    transform: scale(1);\n                }\n                &.dplayer-setting-box-narrow {\n                    width: 70px;\n                    text-align: center;\n                }\n                &.dplayer-setting-box-speed {\n                    .dplayer-setting-origin-panel {\n                        display: none;\n                    }\n                    .dplayer-setting-speed-panel {\n                        display: block;\n                    }\n                }\n            }\n            .dplayer-setting-item,\n            .dplayer-setting-speed-item {\n                height: 30px;\n                padding: 5px 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                position: relative;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n            .dplayer-setting-danmaku {\n                padding: 5px 0;\n                .dplayer-label {\n                    padding: 0 10px;\n                    display: inline;\n                }\n                &:hover {\n                    .dplayer-label {\n                        display: none;\n                    }\n                    .dplayer-danmaku-bar-wrap {\n                        display: inline-block;\n                    }\n                }\n                &.dplayer-setting-danmaku-active {\n                    .dplayer-label {\n                        display: none;\n                    }\n                    .dplayer-danmaku-bar-wrap {\n                        display: inline-block;\n                    }\n                }\n                .dplayer-danmaku-bar-wrap {\n                    padding: 0 10px;\n                    box-sizing: border-box;\n                    display: none;\n                    vertical-align: middle;\n                    height: 100%;\n                    width: 100%;\n                    .dplayer-danmaku-bar {\n                        position: relative;\n                        top: 8.5px;\n                        width: 100%;\n                        height: 3px;\n                        background: #fff;\n                        transition: all 0.3s ease-in-out;\n                        .dplayer-danmaku-bar-inner {\n                            position: absolute;\n                            bottom: 0;\n                            left: 0;\n                            height: 100%;\n                            transition: all 0.1s ease;\n                            background: #aaa;\n                            will-change: width;\n                            .dplayer-thumb {\n                                position: absolute;\n                                top: 0;\n                                right: 5px;\n                                margin-top: -4px;\n                                margin-right: -10px;\n                                height: 11px;\n                                width: 11px;\n                                border-radius: 50%;\n                                cursor: pointer;\n                                transition: all .3s ease-in-out;\n                                background: #aaa;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        .dplayer-full {\n            display: inline-block;\n            height: 100%;\n            position: relative;\n            &:hover {\n                .dplayer-full-in-icon {\n                    display: block;\n                }\n            }\n            .dplayer-full-in-icon {\n                position: absolute;\n                top: -30px;\n                z-index: 1;\n                display: none;\n            }\n        }\n        .dplayer-quality {\n            position: relative;\n            display: inline-block;\n            height: 100%;\n            z-index: 2;\n            &:hover {\n                .dplayer-quality-list {\n                    display: block;\n                }\n                .dplayer-quality-mask {\n                    display: block;\n                }\n            }\n            .dplayer-quality-mask {\n                display: none;\n                position: absolute;\n                bottom: 38px;\n                left: -18px;\n                width: 80px;\n                padding-bottom: 12px;\n            }\n            .dplayer-quality-list {\n                display: none;\n                font-size: 12px;\n                width: 80px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 5px 0;\n                transition: all .3s ease-in-out;\n                overflow: hidden;\n                color: #fff;\n                text-align: center;\n            }\n            .dplayer-quality-item {\n                height: 25px;\n                box-sizing: border-box;\n                cursor: pointer;\n                line-height: 25px;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n        }\n        .dplayer-comment {\n            display: inline-block;\n            height: 100%;\n        }\n        .dplayer-label {\n            color: #eee;\n            font-size: 13px;\n            display: inline-block;\n            vertical-align: middle;\n            white-space: nowrap;\n        }\n        .dplayer-toggle {\n            width: 32px;\n            height: 20px;\n            text-align: center;\n            font-size: 0;\n            vertical-align: middle;\n            position: absolute;\n            top: 5px;\n            right: 10px;\n            input {\n                max-height: 0;\n                max-width: 0;\n                display: none;\n            }\n            input+label {\n                display: inline-block;\n                position: relative;\n                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n                border: 1px solid rgb(223, 223, 223);\n                height: 20px;\n                width: 32px;\n                border-radius: 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                transition: .2s ease-in-out;\n            }\n            input+label:before {\n                content: \"\";\n                position: absolute;\n                display: block;\n                height: 18px;\n                width: 18px;\n                top: 0;\n                left: 0;\n                border-radius: 15px;\n                transition: .2s ease-in-out;\n            }\n            input+label:after {\n                content: \"\";\n                position: absolute;\n                display: block;\n                left: 0;\n                top: 0;\n                border-radius: 15px;\n                background: #fff;\n                transition: .2s ease-in-out;\n                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n                height: 18px;\n                width: 18px;\n            }\n            input:checked+label {\n                border-color: rgba(255, 255, 255, 0.5);\n            }\n            input:checked+label:before {\n                width: 30px;\n                background: rgba(255, 255, 255, 0.5);\n            }\n            input:checked+label:after {\n                left: 12px;\n            }\n        }\n    }\n}\n\n.dplayer-mobile-play {\n    display: none;\n    width: 50px;\n    height: 50px;\n    border: none;\n    background-color: transparent;\n    outline: none;\n    cursor: pointer;\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 0;\n    opacity: 0.8;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}",".dplayer-danmaku {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    .dplayer-danmaku-item {\n        display: inline-block;\n        pointer-events: none;\n        user-select: none;\n        cursor: default;\n        white-space: nowrap;\n        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);\n        &--demo {\n            position: absolute;\n            visibility: hidden;\n        }\n    }\n    .dplayer-danmaku-right {\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        &.dplayer-danmaku-move {\n            will-change: transform;\n            animation-name: 'danmaku';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku {\n        from {\n            transform: translateX(100%);\n        }\n    }\n    .dplayer-danmaku-top,\n    .dplayer-danmaku-bottom {\n        position: absolute;\n        width: 100%;\n        text-align: center;\n        visibility: hidden;\n        &.dplayer-danmaku-move {\n            will-change: visibility;\n            animation-name: 'danmaku-center';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku-center {\n        from {\n            visibility: visible;\n        }\n        to {\n            visibility: visible;\n        }\n    }\n}",".dplayer-logo {\n    pointer-events: none;\n    position: absolute;\n    left: 20px;\n    top: 20px;\n    max-width: 50px;\n    max-height: 50px;\n    img {\n        max-width: 100%;\n        max-height: 100%;\n        background: none;\n    }\n}",".dplayer-menu {\n    position: absolute;\n    width: 170px;\n    border-radius: 2px;\n    background: rgba(28, 28, 28, 0.85);\n    padding: 5px 0;\n    overflow: hidden;\n    z-index: 3;\n    display: none;\n    &.dplayer-menu-show {\n        display: block;\n    }\n    .dplayer-menu-item {\n        height: 30px;\n        box-sizing: border-box;\n        cursor: pointer;\n        &:hover {\n            background-color: rgba(255, 255, 255, .1);\n        }\n        a {\n            display: inline-block;\n            padding: 0 10px;\n            line-height: 30px;\n            color: #eee;\n            font-size: 13px;\n            display: inline-block;\n            vertical-align: middle;\n            width: 100%;\n            box-sizing: border-box;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            &:hover {\n                text-decoration: none;\n            }\n        }\n    }\n}",".dplayer-notice-list{\n    position: absolute;\n    bottom: 60px;\n    left: 20px;\n\n    .dplayer-notice {\n        border-radius: 2px;\n        background: rgba(28, 28, 28, 0.9);\n        transition: all .3s ease-in-out;\n        overflow: hidden;\n        color: #fff;\n        display: table;\n        pointer-events: none;\n        animation: showNotice .3s ease 1 forwards;\n    }\n\n    .remove-notice{\n        animation: removeNotice .3s ease 1 forwards;\n    }\n}\n\n@keyframes showNotice {\n    from {\n        padding: 0;\n        font-size: 0;\n        margin-top: 0;\n    }\n    to {\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n}\n\n@keyframes removeNotice {\n    0%{\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n    20%{\n        font-size: 12px;\n    }\n    21%{\n        font-size: 0;\n        padding: 7px 10px;\n    }\n    100%{\n        padding: 0;\n        margin-top: 0;\n        font-size: 0;\n    }\n}\n",".dplayer-subtitle {\n    position: absolute;\n    bottom: 40px;\n    width: 90%;\n    left: 5%;\n    text-align: center;\n    color: #fff;\n    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    &.dplayer-subtitle-hide {\n        display: none;\n    }\n}",".dplayer-mask {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    display: none;\n    &.dplayer-mask-show {\n        display: block;\n    }\n}\n\n.dplayer-video-wrap {\n    position: relative;\n    background: #000;\n    font-size: 0;\n    width: 100%;\n    height: 100%;\n    .dplayer-video {\n        width: 100%;\n        height: 100%;\n        display: none;\n    }\n    .dplayer-video-current {\n        display: block;\n    }\n    .dplayer-video-prepare {\n        display: none;\n    }\n}",".dplayer-info-panel {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 400px;\n    background: rgba(28, 28, 28, 0.8);\n    padding: 10px;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 2px;\n\n    &-hide {\n        display: none;\n    }\n\n    .dplayer-info-panel-close {\n        cursor: pointer;\n        position: absolute;\n        right: 10px;\n        top: 10px;\n    }\n\n    .dplayer-info-panel-item {\n        & > span {\n            display: inline-block;\n            vertical-align: middle;\n            line-height: 15px;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n    }\n\n    .dplayer-info-panel-item-title {\n        width: 100px;\n        text-align: right;\n        margin-right: 10px;\n    }\n    \n    .dplayer-info-panel-item-data {\n        width: 260px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 9216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 3565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 7795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 4589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 3597:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 288 288\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z\"></path></svg>"

/***/ }),

/***/ 6409:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z\"></path></svg>"

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"chromecast\" class=\"svg-inline--fa fa-chromecast fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z\"></path></svg>"

/***/ }),

/***/ 8478:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z\"></path></svg>"

/***/ }),

/***/ 8885:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z\"></path></svg>"

/***/ }),

/***/ 6783:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 33\"><path d=\"M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z\"></path></svg>"

/***/ }),

/***/ 1241:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 33\"><path d=\"M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z\"></path></svg>"

/***/ }),

/***/ 2112:
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" viewBox=\"0 0 22 22\"><svg x=\"7\" y=\"1\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-0\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"11\" y=\"3\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-1\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"13\" y=\"7\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-2\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"11\" y=\"11\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-3\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"7\" y=\"13\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-4\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"3\" y=\"11\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-5\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"1\" y=\"7\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-6\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"3\" y=\"3\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-7\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg></svg>"

/***/ }),

/***/ 3310:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z\"></path></svg>"

/***/ }),

/***/ 2723:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 17 32\"><path d=\"M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z\"></path></svg>"

/***/ }),

/***/ 4007:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 16 32\"><path d=\"M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z\"></path></svg>"

/***/ }),

/***/ 5381:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z\"></path></svg>"

/***/ }),

/***/ 4916:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z\"></path></svg>"

/***/ }),

/***/ 7531:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 28\"><path d=\"M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z\"></path></svg>"

/***/ }),

/***/ 5223:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z\"></path></svg>"

/***/ }),

/***/ 2813:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 21 32\"><path d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z\"></path></svg>"

/***/ }),

/***/ 9480:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 21 32\"><path d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z\"></path></svg>"

/***/ }),

/***/ 6848:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 21 32\"><path d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z\"></path></svg>"

/***/ }),

/***/ 977:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};
var runtime = Object.create(globalThis);
var ESCAPE_REG = /["&'<>]/;
runtime.$escape = function (content) {
    return xmlEscape(toString(content));
};
runtime.$each = function (data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};
function toString(value) {
    if (typeof value !== 'string') {
        if (value === undefined || value === null) {
            value = '';
        } else if (typeof value === 'function') {
            value = toString(value.call(value));
        } else {
            value = JSON.stringify(value);
        }
    }
    return value;
}
function xmlEscape(content) {
    var html = '' + content;
    var regexResult = ESCAPE_REG.exec(html);
    if (!regexResult) {
        return content;
    }
    var result = '';
    var i = void 0, lastIndex = void 0, _char = void 0;
    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
        switch (html.charCodeAt(i)) {
        case 34:
            _char = '&#34;';
            break;
        case 38:
            _char = '&#38;';
            break;
        case 39:
            _char = '&#39;';
            break;
        case 60:
            _char = '&#60;';
            break;
        case 62:
            _char = '&#62;';
            break;
        default:
            continue;
        }
        if (lastIndex !== i) {
            result += html.substring(lastIndex, i);
        }
        lastIndex = i + 1;
        result += _char;
    }
    if (lastIndex !== i) {
        return result + html.substring(lastIndex, i);
    } else {
        return result;
    }
}
module.exports = runtime;

/***/ }),

/***/ 3153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(977);

/***/ }),

/***/ 1116:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1459);

/***/ }),

/***/ 9706:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
var settle = __webpack_require__(4687);
var cookies = __webpack_require__(4216);
var buildURL = __webpack_require__(9123);
var buildFullPath = __webpack_require__(7995);
var parseHeaders = __webpack_require__(4917);
var isURLSameOrigin = __webpack_require__(5277);
var transitionalDefaults = __webpack_require__(7611);
var AxiosError = __webpack_require__(5633);
var CanceledError = __webpack_require__(2296);
var parseProtocol = __webpack_require__(1626);
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) {
                config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
                config.signal.removeEventListener('abort', onCanceled);
            }
        }
        if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
            delete requestHeaders['Content-Type'];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) {
                return;
            }
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            request = null;
        }
        if ('onloadend' in request) {
            request.onloadend = onloadend;
        } else {
            request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                    return;
                }
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                    return;
                }
                setTimeout(onloadend);
            };
        }
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));
            request = null;
        };
        request.onerror = function handleError() {
            reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));
            request = null;
        };
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
            var transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
                timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));
            request = null;
        };
        if (utils.isStandardBrowserEnv()) {
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
        }
        if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                    delete requestHeaders[key];
                } else {
                    request.setRequestHeader(key, val);
                }
            });
        }
        if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== 'json') {
            request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener('progress', config.onUploadProgress);
        }
        if (config.cancelToken || config.signal) {
            onCanceled = function onCanceled(cancel) {
                if (!request) {
                    return;
                }
                reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
                config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
            }
        }
        if (!requestData) {
            requestData = null;
        }
        var protocol = parseProtocol(fullPath);
        if (protocol && [
                'http',
                'https',
                'file'
            ].indexOf(protocol) === -1) {
            reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
            return;
        }
        request.send(requestData);
    });
};

/***/ }),

/***/ 1459:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
var bind = __webpack_require__(2179);
var Axios = __webpack_require__(3095);
var mergeConfig = __webpack_require__(5757);
var defaults = __webpack_require__(8067);
function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    utils.extend(instance, Axios.prototype, context);
    utils.extend(instance, context);
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
var axios = createInstance(defaults);
axios.Axios = Axios;
axios.CanceledError = __webpack_require__(2296);
axios.CancelToken = __webpack_require__(7690);
axios.isCancel = __webpack_require__(2066);
axios.VERSION = (__webpack_require__(4113).version);
axios.toFormData = __webpack_require__(2302);
axios.AxiosError = __webpack_require__(5633);
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = __webpack_require__(7667);
axios.isAxiosError = __webpack_require__(6285);
module.exports = axios;
module.exports["default"] = axios;

/***/ }),

/***/ 7690:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var CanceledError = __webpack_require__(2296);
function CancelToken(executor) {
    if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    this.promise.then(function (cancel) {
        if (!token._listeners)
            return;
        var i;
        var l = token._listeners.length;
        for (i = 0; i < l; i++) {
            token._listeners[i](cancel);
        }
        token._listeners = null;
    });
    this.promise.then = function (onfulfilled) {
        var _resolve;
        var promise = new Promise(function (resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) {
            return;
        }
        token.reason = new CanceledError(message);
        resolvePromise(token.reason);
    });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
        throw this.reason;
    }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) {
        this._listeners.push(listener);
    } else {
        this._listeners = [listener];
    }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) {
        return;
    }
    var index = this._listeners.indexOf(listener);
    if (index !== -1) {
        this._listeners.splice(index, 1);
    }
};
CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;

/***/ }),

/***/ 2296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var AxiosError = __webpack_require__(5633);
var utils = __webpack_require__(9566);
function CanceledError(message) {
    AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
    this.name = 'CanceledError';
}
utils.inherits(CanceledError, AxiosError, { __CANCEL__: true });
module.exports = CanceledError;

/***/ }),

/***/ 2066:
/***/ ((module) => {


module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ 3095:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
var buildURL = __webpack_require__(9123);
var InterceptorManager = __webpack_require__(3922);
var dispatchRequest = __webpack_require__(951);
var mergeConfig = __webpack_require__(5757);
var buildFullPath = __webpack_require__(7995);
var validator = __webpack_require__(1120);
var validators = validator.validators;
function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
Axios.prototype.request = function request(configOrUrl, config) {
    if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
    } else {
        config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    if (config.method) {
        config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
    } else {
        config.method = 'get';
    }
    var transitional = config.transitional;
    if (transitional !== undefined) {
        validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators['boolean']),
            forcedJSONParsing: validators.transitional(validators['boolean']),
            clarifyTimeoutError: validators.transitional(validators['boolean'])
        }, false);
    }
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
            return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    }
    var newConfig = config;
    while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    var fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
};
utils.forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    Axios.prototype[method] = function (url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
                method: method,
                headers: isForm ? { 'Content-Type': 'multipart/form-data' } : {},
                url: url,
                data: data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
module.exports = Axios;

/***/ }),

/***/ 5633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
function AxiosError(message, code, config, request, response) {
    Error.call(this);
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
utils.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED'
].forEach(function (code) {
    descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', { value: true });
AxiosError.from = function (error, code, config, request, response, customProps) {
    var axiosError = Object.create(prototype);
    utils.toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
module.exports = AxiosError;

/***/ }),

/***/ 3922:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
function InterceptorManager() {
    this.handlers = [];
}
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
        this.handlers[id] = null;
    }
};
InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
            fn(h);
        }
    });
};
module.exports = InterceptorManager;

/***/ }),

/***/ 7995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isAbsoluteURL = __webpack_require__(5824);
var combineURLs = __webpack_require__(9777);
module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
};

/***/ }),

/***/ 951:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
var transformData = __webpack_require__(8505);
var isCancel = __webpack_require__(2066);
var defaults = __webpack_require__(8067);
var CanceledError = __webpack_require__(2296);
function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
        throw new CanceledError();
    }
}
module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = config.headers || {};
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        'delete',
        'get',
        'head',
        'post',
        'put',
        'patch',
        'common'
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
                reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
            }
        }
        return Promise.reject(reason);
    });
};

/***/ }),

/***/ 5757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
module.exports = function mergeConfig(config1, config2) {
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
        } else if (utils.isArray(source)) {
            return source.slice();
        }
        return source;
    }
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(undefined, config1[prop]);
        }
    }
    function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(undefined, config2[prop]);
        }
    }
    function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(undefined, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(undefined, config1[prop]);
        }
    }
    function mergeDirectKeys(prop) {
        if (prop in config2) {
            return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
            return getMergedValue(undefined, config1[prop]);
        }
    }
    var mergeMap = {
        'url': valueFromConfig2,
        'method': valueFromConfig2,
        'data': valueFromConfig2,
        'baseURL': defaultToConfig2,
        'transformRequest': defaultToConfig2,
        'transformResponse': defaultToConfig2,
        'paramsSerializer': defaultToConfig2,
        'timeout': defaultToConfig2,
        'timeoutMessage': defaultToConfig2,
        'withCredentials': defaultToConfig2,
        'adapter': defaultToConfig2,
        'responseType': defaultToConfig2,
        'xsrfCookieName': defaultToConfig2,
        'xsrfHeaderName': defaultToConfig2,
        'onUploadProgress': defaultToConfig2,
        'onDownloadProgress': defaultToConfig2,
        'decompress': defaultToConfig2,
        'maxContentLength': defaultToConfig2,
        'maxBodyLength': defaultToConfig2,
        'beforeRedirect': defaultToConfig2,
        'transport': defaultToConfig2,
        'httpAgent': defaultToConfig2,
        'httpsAgent': defaultToConfig2,
        'cancelToken': defaultToConfig2,
        'socketPath': defaultToConfig2,
        'responseEncoding': defaultToConfig2,
        'validateStatus': mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};

/***/ }),

/***/ 4687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var AxiosError = __webpack_require__(5633);
module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    } else {
        reject(new AxiosError('Request failed with status code ' + response.status, [
            AxiosError.ERR_BAD_REQUEST,
            AxiosError.ERR_BAD_RESPONSE
        ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
};

/***/ }),

/***/ 8505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
var defaults = __webpack_require__(8067);
module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

/***/ }),

/***/ 8067:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
var normalizeHeaderName = __webpack_require__(8709);
var AxiosError = __webpack_require__(5633);
var transitionalDefaults = __webpack_require__(7611);
var toFormData = __webpack_require__(2302);
var DEFAULT_CONTENT_TYPE = { 'Content-Type': 'application/x-www-form-urlencoded' };
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
    }
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
        adapter = __webpack_require__(9706);
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        adapter = __webpack_require__(9706);
    }
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) {
        try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
        } catch (e) {
            if (e.name !== 'SyntaxError') {
                throw e;
            }
        }
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: transitionalDefaults,
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Accept');
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
                return data;
            }
            if (utils.isArrayBufferView(data)) {
                return data.buffer;
            }
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
            }
            var isObjectPayload = utils.isObject(data);
            var contentType = headers && headers['Content-Type'];
            var isFileList;
            if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === 'multipart/form-data') {
                var _FormData = this.env && this.env.FormData;
                return toFormData(isFileList ? { 'files[]': data } : data, _FormData && new _FormData());
            } else if (isObjectPayload || contentType === 'application/json') {
                setContentTypeIfUnset(headers, 'application/json');
                return stringifySafely(data);
            }
            return data;
        }],
    transformResponse: [function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === 'SyntaxError') {
                            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                        }
                        throw e;
                    }
                }
            }
            return data;
        }],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: __webpack_require__(5316) },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: { common: { 'Accept': 'application/json, text/plain, */*' } }
};
utils.forEach([
    'delete',
    'get',
    'head'
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

/***/ }),

/***/ 7611:
/***/ ((module) => {


module.exports = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

/***/ }),

/***/ 4113:
/***/ ((module) => {

module.exports = { 'version': '0.27.2' };

/***/ }),

/***/ 2179:
/***/ ((module) => {


module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
    };
};

/***/ }),

/***/ 9123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
module.exports = function buildURL(url, params, paramsSerializer) {
    if (!params) {
        return url;
    }
    var serializedParams;
    if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
    } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
                return;
            }
            if (utils.isArray(val)) {
                key = key + '[]';
            } else {
                val = [val];
            }
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) {
                    v = v.toISOString();
                } else if (utils.isObject(v)) {
                    v = JSON.stringify(v);
                }
                parts.push(encode(key) + '=' + encode(v));
            });
        });
        serializedParams = parts.join('&');
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
};

/***/ }),

/***/ 9777:
/***/ ((module) => {


module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ 4216:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
                cookie.push('expires=' + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
                cookie.push('path=' + path);
            }
            if (utils.isString(domain)) {
                cookie.push('domain=' + domain);
            }
            if (secure === true) {
                cookie.push('secure');
            }
            document.cookie = cookie.join('; ');
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
        }
    };
}() : function nonStandardBrowserEnv() {
    return {
        write: function write() {
        },
        read: function read() {
            return null;
        },
        remove: function remove() {
        }
    };
}();

/***/ }),

/***/ 5824:
/***/ ((module) => {


module.exports = function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ 6285:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
module.exports = function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
};

/***/ }),

/***/ 5277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;
    function resolveURL(url) {
        var href = url;
        if (msie) {
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

/***/ }),

/***/ 8709:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

/***/ }),

/***/ 5316:
/***/ ((module) => {

module.exports = null;

/***/ }),

/***/ 4917:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(9566);
var ignoreDuplicateOf = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
];
module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
        return parsed;
    }
    utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                return;
            }
            if (key === 'set-cookie') {
                parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }
    });
    return parsed;
};

/***/ }),

/***/ 1626:
/***/ ((module) => {


module.exports = function parseProtocol(url) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
};

/***/ }),

/***/ 7667:
/***/ ((module) => {


module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

/***/ }),

/***/ 2302:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


function _typeof(obj) {
    '@babel/helpers - typeof';
    return _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    }, _typeof(obj);
}
var utils = __webpack_require__(9566);
function toFormData(obj, formData) {
    formData = formData || new FormData();
    var stack = [];
    function convertValue(value) {
        if (value === null)
            return '';
        if (utils.isDate(value)) {
            return value.toISOString();
        }
        if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
            return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
        }
        return value;
    }
    function build(data, parentKey) {
        if (utils.isPlainObject(data) || utils.isArray(data)) {
            if (stack.indexOf(data) !== -1) {
                throw Error('Circular reference detected in ' + parentKey);
            }
            stack.push(data);
            utils.forEach(data, function each(value, key) {
                if (utils.isUndefined(value))
                    return;
                var fullKey = parentKey ? parentKey + '.' + key : key;
                var arr;
                if (value && !parentKey && _typeof(value) === 'object') {
                    if (utils.endsWith(key, '{}')) {
                        value = JSON.stringify(value);
                    } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
                        arr.forEach(function (el) {
                            !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
                        });
                        return;
                    }
                }
                build(value, fullKey);
            });
            stack.pop();
        } else {
            formData.append(parentKey, convertValue(data));
        }
    }
    build(obj);
    return formData;
}
module.exports = toFormData;

/***/ }),

/***/ 1120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


function _typeof(obj) {
    '@babel/helpers - typeof';
    return _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    }, _typeof(obj);
}
var VERSION = (__webpack_require__(4113).version);
var AxiosError = __webpack_require__(5633);
var validators = {};
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach(function (type, i) {
    validators[type] = function validator(thing) {
        return _typeof(thing) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    return function (value, opt, opts) {
        if (validator === false) {
            throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
        }
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
function assertOptions(options, schema, allowUnknown) {
    if (_typeof(options) !== 'object') {
        throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) {
                throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
            }
            continue;
        }
        if (allowUnknown !== true) {
            throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
        }
    }
}
module.exports = {
    assertOptions: assertOptions,
    validators: validators
};

/***/ }),

/***/ 9566:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


function _typeof(obj) {
    '@babel/helpers - typeof';
    return _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    }, _typeof(obj);
}
var bind = __webpack_require__(2179);
var toString = Object.prototype.toString;
var kindOf = function (cache) {
    return function (thing) {
        var str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
}(Object.create(null));
function kindOfTest(type) {
    type = type.toLowerCase();
    return function isKindOf(thing) {
        return kindOf(thing) === type;
    };
}
function isArray(val) {
    return Array.isArray(val);
}
function isUndefined(val) {
    return typeof val === 'undefined';
}
function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest('ArrayBuffer');
function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
    } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
}
function isString(val) {
    return typeof val === 'string';
}
function isNumber(val) {
    return typeof val === 'number';
}
function isObject(val) {
    return val !== null && _typeof(val) === 'object';
}
function isPlainObject(val) {
    if (kindOf(val) !== 'object') {
        return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
var isDate = kindOfTest('Date');
var isFile = kindOfTest('File');
var isBlob = kindOfTest('Blob');
var isFileList = kindOfTest('FileList');
function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
function isFormData(thing) {
    var pattern = '[object FormData]';
    return thing && (typeof FormData === 'function' && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
}
var isURLSearchParams = kindOfTest('URLSearchParams');
function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}
function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
        return false;
    }
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
function forEach(obj, fn) {
    if (obj === null || typeof obj === 'undefined') {
        return;
    }
    if (_typeof(obj) !== 'object') {
        obj = [obj];
    }
    if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
        }
    } else {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}
function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
        } else if (isArray(val)) {
            result[key] = val.slice();
        } else {
            result[key] = val;
        }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
    }
    return result;
}
function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
            a[key] = bind(val, thisArg);
        } else {
            a[key] = val;
        }
    });
    return a;
}
function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
    }
    return content;
}
function inherits(constructor, superConstructor, props, descriptors) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    props && Object.assign(constructor.prototype, props);
}
function toFlatObject(sourceObj, destObj, filter) {
    var props;
    var i;
    var prop;
    var merged = {};
    destObj = destObj || {};
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while (i-- > 0) {
            prop = props[i];
            if (!merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = Object.getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
}
function endsWith(str, searchString, position) {
    str = String(str);
    if (position === undefined || position > str.length) {
        position = str.length;
    }
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
}
function toArray(thing) {
    if (!thing)
        return null;
    var i = thing.length;
    if (isUndefined(i))
        return null;
    var arr = new Array(i);
    while (i-- > 0) {
        arr[i] = thing[i];
    }
    return arr;
}
var isTypedArray = function (TypedArray) {
    return function (thing) {
        return TypedArray && thing instanceof TypedArray;
    };
}(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM,
    inherits: inherits,
    toFlatObject: toFlatObject,
    kindOf: kindOf,
    kindOfTest: kindOfTest,
    endsWith: endsWith,
    toArray: toArray,
    isTypedArray: isTypedArray,
    isFileList: isFileList
};

/***/ }),

/***/ 3884:
/***/ ((module) => {


module.exports = function (cssWithMappingToString) {
    var list = [];
    list.toString = function toString() {
        return this.map(function (item) {
            var content = '';
            var needLayer = typeof item[5] !== 'undefined';
            if (item[4]) {
                content += '@supports ('.concat(item[4], ') {');
            }
            if (item[2]) {
                content += '@media '.concat(item[2], ' {');
            }
            if (needLayer) {
                content += '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {');
            }
            content += cssWithMappingToString(item);
            if (needLayer) {
                content += '}';
            }
            if (item[2]) {
                content += '}';
            }
            if (item[4]) {
                content += '}';
            }
            return content;
        }).join('');
    };
    list.i = function i(modules, media, dedupe, supports, layer) {
        if (typeof modules === 'string') {
            modules = [[
                    null,
                    modules,
                    undefined
                ]];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _k = 0; _k < modules.length; _k++) {
            var item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
            }
            if (typeof layer !== 'undefined') {
                if (typeof item[5] === 'undefined') {
                    item[5] = layer;
                } else {
                    item[1] = '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {').concat(item[1], '}');
                    item[5] = layer;
                }
            }
            if (media) {
                if (!item[2]) {
                    item[2] = media;
                } else {
                    item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}');
                    item[2] = media;
                }
            }
            if (supports) {
                if (!item[4]) {
                    item[4] = ''.concat(supports);
                } else {
                    item[1] = '@supports ('.concat(item[4], ') {').concat(item[1], '}');
                    item[4] = supports;
                }
            }
            list.push(item);
        }
    };
    return list;
};

/***/ }),

/***/ 5717:
/***/ ((module) => {


module.exports = function (url, options) {
    if (!options) {
        options = {};
    }
    if (!url) {
        return url;
    }
    url = String(url.__esModule ? url['default'] : url);
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    if (options.hash) {
        url += options.hash;
    }
    if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
        return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"');
    }
    return url;
};

/***/ }),

/***/ 9283:
/***/ ((module) => {


module.exports = function (item) {
    var content = item[1];
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (typeof btoa === 'function') {
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
        var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(base64);
        var sourceMapping = '/*# '.concat(data, ' */');
        var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL='.concat(cssMapping.sourceRoot || '').concat(source, ' */');
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
};

/***/ }),

/***/ 7831:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==";

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	__webpack_require__.b = document.baseURI || self.location.href;
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		957: 0,
/******/ 		468: 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// no jsonp function
/******/ })();
/******/ 
/******/ /* webpack/runtime/nonce */
/******/ (() => {
/******/ 	__webpack_require__.nc = undefined;
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ js)
});

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/css/index.less
var css = __webpack_require__(6829);
;// CONCATENATED MODULE: ./src/css/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(css/* default */.Z, options);




       /* harmony default export */ const src_css = (css/* default */.Z && css/* default.locals */.Z.locals ? css/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/promise-polyfill/src/finally.js
function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(function (value) {
        return constructor.resolve(callback()).then(function () {
            return value;
        });
    }, function (reason) {
        return constructor.resolve(callback()).then(function () {
            return constructor.reject(reason);
        });
    });
}
/* harmony default export */ const src_finally = (finallyConstructor);
;// CONCATENATED MODULE: ./node_modules/promise-polyfill/src/allSettled.js
function _typeof(obj) {
    '@babel/helpers - typeof';
    return _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    }, _typeof(obj);
}
function allSettled(arr) {
    var P = this;
    return new P(function (resolve, reject) {
        if (!(arr && typeof arr.length !== 'undefined')) {
            return reject(new TypeError(_typeof(arr) + ' ' + arr + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
        }
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0)
            return resolve([]);
        var remaining = args.length;
        function res(i, val) {
            if (val && (_typeof(val) === 'object' || typeof val === 'function')) {
                var then = val.then;
                if (typeof then === 'function') {
                    then.call(val, function (val) {
                        res(i, val);
                    }, function (e) {
                        args[i] = {
                            status: 'rejected',
                            reason: e
                        };
                        if (--remaining === 0) {
                            resolve(args);
                        }
                    });
                    return;
                }
            }
            args[i] = {
                status: 'fulfilled',
                value: val
            };
            if (--remaining === 0) {
                resolve(args);
            }
        }
        for (var i = 0; i < args.length; i++) {
            res(i, args[i]);
        }
    });
}
/* harmony default export */ const src_allSettled = (allSettled);
;// CONCATENATED MODULE: ./node_modules/promise-polyfill/src/index.js
function src_typeof(obj) {
    '@babel/helpers - typeof';
    return src_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    }, src_typeof(obj);
}


var setTimeoutFunc = setTimeout;
function isArray(x) {
    return Boolean(x && typeof x.length !== 'undefined');
}
function noop() {
}
function bind(fn, thisArg) {
    return function () {
        fn.apply(thisArg, arguments);
    };
}
function Promise(fn) {
    if (!(this instanceof Promise))
        throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function')
        throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    doResolve(fn, this);
}
function handle(self, deferred) {
    while (self._state === 3) {
        self = self._value;
    }
    if (self._state === 0) {
        self._deferreds.push(deferred);
        return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
            (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
            return;
        }
        var ret;
        try {
            ret = cb(self._value);
        } catch (e) {
            reject(deferred.promise, e);
            return;
        }
        resolve(deferred.promise, ret);
    });
}
function resolve(self, newValue) {
    try {
        if (newValue === self)
            throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && (src_typeof(newValue) === 'object' || typeof newValue === 'function')) {
            var then = newValue.then;
            if (newValue instanceof Promise) {
                self._state = 3;
                self._value = newValue;
                finale(self);
                return;
            } else if (typeof then === 'function') {
                doResolve(bind(then, newValue), self);
                return;
            }
        }
        self._state = 1;
        self._value = newValue;
        finale(self);
    } catch (e) {
        reject(self, e);
    }
}
function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
}
function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
        Promise._immediateFn(function () {
            if (!self._handled) {
                Promise._unhandledRejectionFn(self._value);
            }
        });
    }
    for (var i = 0, len = self._deferreds.length; i < len; i++) {
        handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
}
function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
}
function doResolve(fn, self) {
    var done = false;
    try {
        fn(function (value) {
            if (done)
                return;
            done = true;
            resolve(self, value);
        }, function (reason) {
            if (done)
                return;
            done = true;
            reject(self, reason);
        });
    } catch (ex) {
        if (done)
            return;
        done = true;
        reject(self, ex);
    }
}
Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new this.constructor(noop);
    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
};
Promise.prototype['finally'] = src_finally;
Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
        if (!isArray(arr)) {
            return reject(new TypeError('Promise.all accepts an array'));
        }
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0)
            return resolve([]);
        var remaining = args.length;
        function res(i, val) {
            try {
                if (val && (src_typeof(val) === 'object' || typeof val === 'function')) {
                    var then = val.then;
                    if (typeof then === 'function') {
                        then.call(val, function (val) {
                            res(i, val);
                        }, reject);
                        return;
                    }
                }
                args[i] = val;
                if (--remaining === 0) {
                    resolve(args);
                }
            } catch (ex) {
                reject(ex);
            }
        }
        for (var i = 0; i < args.length; i++) {
            res(i, args[i]);
        }
    });
};
Promise.allSettled = src_allSettled;
Promise.resolve = function (value) {
    if (value && src_typeof(value) === 'object' && value.constructor === Promise) {
        return value;
    }
    return new Promise(function (resolve) {
        resolve(value);
    });
};
Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
        reject(value);
    });
};
Promise.race = function (arr) {
    return new Promise(function (resolve, reject) {
        if (!isArray(arr)) {
            return reject(new TypeError('Promise.race accepts an array'));
        }
        for (var i = 0, len = arr.length; i < len; i++) {
            Promise.resolve(arr[i]).then(resolve, reject);
        }
    });
};
Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
    setImmediate(fn);
} || function (fn) {
    setTimeoutFunc(fn, 0);
};
Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
        console.warn('Possible Unhandled Promise Rejection:', err);
    }
};
/* harmony default export */ const src = (Promise);
;// CONCATENATED MODULE: ./src/js/utils.js
var isMobile = /mobile/i.test(window.navigator.userAgent);
var utils = {
    secondToTime: function secondToTime(second) {
        second = second || 0;
        if (second === 0 || second === Infinity || second.toString() === 'NaN') {
            return '00:00';
        }
        var add0 = function add0(num) {
            return num < 10 ? '0' + num : '' + num;
        };
        var hour = Math.floor(second / 3600);
        var min = Math.floor((second - hour * 3600) / 60);
        var sec = Math.floor(second - hour * 3600 - min * 60);
        return (hour > 0 ? [
            hour,
            min,
            sec
        ] : [
            min,
            sec
        ]).map(add0).join(':');
    },
    getElementViewLeft: function getElementViewLeft(element) {
        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;
        var elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            while (current !== null) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
        } else {
            while (current !== null && current !== element) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
        }
        return actualLeft - elementScrollLeft;
    },
    getBoundingClientRectViewLeft: function getBoundingClientRectViewLeft(element) {
        var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
        if (element.getBoundingClientRect) {
            if (typeof this.getBoundingClientRectViewLeft.offset !== 'number') {
                var temp = document.createElement('div');
                temp.style.cssText = 'position:absolute;top:0;left:0;';
                document.body.appendChild(temp);
                this.getBoundingClientRectViewLeft.offset = -temp.getBoundingClientRect().top - scrollTop;
                document.body.removeChild(temp);
                temp = null;
            }
            var rect = element.getBoundingClientRect();
            var offset = this.getBoundingClientRectViewLeft.offset;
            return rect.left + offset;
        } else {
            return this.getElementViewLeft(element);
        }
    },
    getScrollPosition: function getScrollPosition() {
        return {
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        };
    },
    setScrollPosition: function setScrollPosition(_ref) {
        var _ref$left = _ref.left, left = _ref$left === void 0 ? 0 : _ref$left, _ref$top = _ref.top, top = _ref$top === void 0 ? 0 : _ref$top;
        if (this.isFirefox) {
            document.documentElement.scrollLeft = left;
            document.documentElement.scrollTop = top;
        } else {
            window.scrollTo(left, top);
        }
    },
    isMobile: isMobile,
    isFirefox: /firefox/i.test(window.navigator.userAgent),
    isChrome: /chrome/i.test(window.navigator.userAgent),
    isSafari: /safari/i.test(window.navigator.userAgent),
    storage: {
        set: function set(key, value) {
            localStorage.setItem(key, value);
        },
        get: function get(key) {
            return localStorage.getItem(key);
        }
    },
    nameMap: {
        dragStart: isMobile ? 'touchstart' : 'mousedown',
        dragMove: isMobile ? 'touchmove' : 'mousemove',
        dragEnd: isMobile ? 'touchend' : 'mouseup'
    },
    color2Number: function color2Number(color) {
        if (color[0] === '#') {
            color = color.substr(1);
        }
        if (color.length === 3) {
            color = ''.concat(color[0]).concat(color[0]).concat(color[1]).concat(color[1]).concat(color[2]).concat(color[2]);
        }
        return parseInt(color, 16) + 0 & 16777215;
    },
    number2Color: function number2Color(number) {
        return '#' + ('00000' + number.toString(16)).slice(-6);
    },
    number2Type: function number2Type(number) {
        switch (number) {
        case 0:
            return 'right';
        case 1:
            return 'top';
        case 2:
            return 'bottom';
        default:
            return 'right';
        }
    }
};
/* harmony default export */ const js_utils = (utils);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(1116);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/js/api.js

/* harmony default export */ const api = ({
    send: function send(options) {
        axios_default().post(options.url, options.data).then(function (response) {
            var data = response.data;
            if (!data || data.code !== 0) {
                options.error && options.error(data && data.msg);
                return;
            }
            options.success && options.success(data);
        })['catch'](function (e) {
            console.error(e);
            options.error && options.error();
        });
    },
    read: function read(options) {
        axios_default().get(options.url).then(function (response) {
            var data = response.data;
            if (!data || data.code !== 0) {
                options.error && options.error(data && data.msg);
                return;
            }
            options.success && options.success(data.data.map(function (item) {
                return {
                    time: item[0],
                    type: item[1],
                    color: item[2],
                    author: item[3],
                    text: item[4]
                };
            }));
        })['catch'](function (e) {
            console.error(e);
            options.error && options.error();
        });
    }
});
;// CONCATENATED MODULE: ./src/js/options.js
function options_typeof(obj) {
    '@babel/helpers - typeof';
    return options_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    }, options_typeof(obj);
}

/* harmony default export */ function js_options(options) {
    var defaultOption = {
        container: options.element || document.getElementsByClassName('dplayer')[0],
        live: false,
        autoplay: false,
        theme: '#b7daff',
        loop: false,
        lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
        screenshot: false,
        airplay: true,
        chromecast: false,
        hotkey: true,
        preload: 'metadata',
        volume: 0.7,
        playbackSpeed: [
            0.5,
            0.75,
            1,
            1.25,
            1.5,
            2
        ],
        apiBackend: api,
        video: {},
        contextmenu: [],
        mutex: true,
        pluginOptions: {
            hls: {},
            flv: {},
            dash: {},
            webtorrent: {}
        },
        preventClickToggle: false
    };
    for (var defaultKey in defaultOption) {
        if (defaultOption.hasOwnProperty(defaultKey) && !options.hasOwnProperty(defaultKey)) {
            options[defaultKey] = defaultOption[defaultKey];
        }
    }
    if (options.video) {
        !options.video.type && (options.video.type = 'auto');
    }
    if (options_typeof(options.danmaku) === 'object' && options.danmaku) {
        !options.danmaku.user && (options.danmaku.user = 'DIYgod');
    }
    if (options.subtitle) {
        !options.subtitle.type && (options.subtitle.type = 'webvtt');
        !options.subtitle.fontSize && (options.subtitle.fontSize = '20px');
        !options.subtitle.bottom && (options.subtitle.bottom = '40px');
        !options.subtitle.color && (options.subtitle.color = '#fff');
    }
    if (options.video.quality) {
        options.video.url = options.video.quality[options.video.defaultQuality].url;
    }
    if (options.lang) {
        options.lang = options.lang.toLowerCase();
    }
    options.contextmenu = options.contextmenu.concat([
        {
            key: 'video-info',
            click: function click(player) {
                player.infoPanel.triggle();
            }
        },
        { text: 'DPlayer v'.concat("1.27.0") }
    ]);
    return options;
};
;// CONCATENATED MODULE: ./src/js/i18n.js
function i18n(lang) {
    var _this = this;
    this.lang = lang;
    this.fallbackLang = this.lang.includes('-') ? this.lang.split('-')[0] : this.lang;
    this.tran = function (key) {
        key = key.toLowerCase();
        if (tranTxt[_this.lang] && tranTxt[_this.lang][key]) {
            return tranTxt[_this.lang][key];
        } else if (tranTxt[_this.fallbackLang] && tranTxt[_this.fallbackLang][key]) {
            return tranTxt[_this.fallbackLang][key];
        } else if (standard[key]) {
            return standard[key];
        } else {
            return key;
        }
    };
}
var standard = {
    'danmaku-loading': 'Danmaku is loading',
    top: 'Top',
    bottom: 'Bottom',
    rolling: 'Rolling',
    'input-danmaku-enter': 'Input danmaku, hit Enter',
    'about-author': 'About author',
    'dplayer-feedback': 'DPlayer feedback',
    'about-dplayer': 'About DPlayer',
    loop: 'Loop',
    speed: 'Speed',
    'opacity-danmaku': 'Opacity for danmaku',
    normal: 'Normal',
    'please-input-danmaku': 'Please input danmaku content!',
    'set-danmaku-color': 'Set danmaku color',
    'set-danmaku-type': 'Set danmaku type',
    'show-danmaku': 'Show danmaku',
    'video-failed': 'Video load failed',
    'danmaku-failed': 'Danmaku load failed',
    'danmaku-send-failed': 'Danmaku send failed',
    'switching-quality': 'Switching to %q quality',
    'switched-quality': 'Switched to %q quality',
    ff: 'FF %s s',
    rew: 'REW %s s',
    'unlimited-danmaku': 'Unlimited danmaku',
    'send-danmaku': 'Send danmaku',
    setting: 'Setting',
    fullscreen: 'Full screen',
    'web-fullscreen': 'Web full screen',
    send: 'Send',
    screenshot: 'Screenshot',
    airplay: 'AirPlay',
    chromecast: 'ChromeCast',
    subtitle: 'Subtitle',
    off: 'Off',
    'show-subs': 'Show subtitle',
    'hide-subs': 'Hide subtitle',
    volume: 'Volume',
    live: 'Live',
    'video-info': 'Video info'
};
var tranTxt = {
    en: standard,
    'zh-cn': {
        'danmaku-loading': '弹幕加载中',
        top: '顶部',
        bottom: '底部',
        rolling: '滚动',
        'input-danmaku-enter': '输入弹幕\uFF0C回车发送',
        'about-author': '关于作者',
        'dplayer-feedback': '播放器意见反馈',
        'about-dplayer': '关于 DPlayer 播放器',
        loop: '洗脑循环',
        speed: '速度',
        'opacity-danmaku': '弹幕透明度',
        normal: '正常',
        'please-input-danmaku': '要输入弹幕内容啊喂\uFF01',
        'set-danmaku-color': '设置弹幕颜色',
        'set-danmaku-type': '设置弹幕类型',
        'show-danmaku': '显示弹幕',
        'video-failed': '视频加载失败',
        'danmaku-failed': '弹幕加载失败',
        'danmaku-send-failed': '弹幕发送失败',
        'switching-quality': '正在切换至 %q 画质',
        'switched-quality': '已经切换至 %q 画质',
        ff: '快进 %s 秒',
        rew: '快退 %s 秒',
        'unlimited-danmaku': '海量弹幕',
        'send-danmaku': '发送弹幕',
        setting: '设置',
        fullscreen: '全屏',
        'web-fullscreen': '页面全屏',
        send: '发送',
        screenshot: '截图',
        airplay: '无线投屏',
        chromecast: 'ChromeCast',
        subtitle: '字幕',
        off: '关闭',
        'show-subs': '显示字幕',
        'hide-subs': '隐藏字幕',
        volume: '音量',
        live: '直播',
        'video-info': '视频统计信息'
    },
    'zh-tw': {
        'danmaku-loading': '彈幕載入中',
        top: '頂部',
        bottom: '底部',
        rolling: '滾動',
        'input-danmaku-enter': '輸入彈幕\uFF0CEnter 發送',
        'about-author': '關於作者',
        'dplayer-feedback': '播放器意見回饋',
        'about-dplayer': '關於 DPlayer 播放器',
        loop: '循環播放',
        speed: '速度',
        'opacity-danmaku': '彈幕透明度',
        normal: '正常',
        'please-input-danmaku': '請輸入彈幕內容啊\uFF01',
        'set-danmaku-color': '設定彈幕顏色',
        'set-danmaku-type': '設定彈幕類型',
        'show-danmaku': '顯示彈幕',
        'video-failed': '影片載入失敗',
        'danmaku-failed': '彈幕載入失敗',
        'danmaku-send-failed': '彈幕發送失敗',
        'switching-quality': '正在切換至 %q 畫質',
        'switched-quality': '已經切換至 %q 畫質',
        ff: '快進 %s 秒',
        rew: '快退 %s 秒',
        'unlimited-danmaku': '巨量彈幕',
        'send-danmaku': '發送彈幕',
        setting: '設定',
        fullscreen: '全螢幕',
        'web-fullscreen': '頁面全螢幕',
        send: '發送',
        screenshot: '截圖',
        airplay: '無線投屏',
        chromecast: 'ChromeCast',
        subtitle: '字幕',
        off: '關閉',
        'show-subs': '顯示字幕',
        'hide-subs': '隱藏字幕',
        volume: '音量',
        live: '直播',
        'video-info': '影片統計訊息'
    },
    'ko-kr': {
        'danmaku-loading': 'Danmaku를 불러오는 중입니다.',
        top: 'Top',
        bottom: 'Bottom',
        rolling: 'Rolling',
        'input-danmaku-enter': 'Danmaku를 입력하고 Enter를 누르세요.',
        'about-author': '만든이',
        'dplayer-feedback': '피드백 보내기',
        'about-dplayer': 'DPlayer 정보',
        loop: '반복',
        speed: '배속',
        'opacity-danmaku': 'Danmaku 불투명도',
        normal: '표준',
        'please-input-danmaku': 'Danmaku를 입력하세요!',
        'set-danmaku-color': 'Danmaku 색상',
        'set-danmaku-type': 'Danmaku 설정',
        'show-danmaku': 'Danmaku 표시',
        'video-failed': '비디오를 불러오지 못했습니다.',
        'danmaku-failed': 'Danmaku를 불러오지 못했습니다.',
        'danmaku-send-failed': 'Danmaku 전송에 실패했습니다.',
        'Switching to': '',
        'Switched to': '',
        'switching-quality': '전환 %q 화질',
        'switched-quality': '전환 됨 %q 화질',
        ff: '앞으로 %s 초',
        rew: '뒤로 %s 초',
        'unlimited-danmaku': '끝없는 Danmaku',
        'send-danmaku': 'Danmaku 보내기',
        setting: '설정',
        fullscreen: '전체 화면',
        'web-fullscreen': '웹 내 전체화면',
        send: '보내기',
        screenshot: '화면 캡쳐',
        airplay: '에어플레이',
        chromecast: 'ChromeCast',
        subtitle: '부제',
        off: '끄다',
        'show-subs': '자막 보이기',
        'hide-subs': '자막 숨기기',
        Volume: '볼륨',
        live: '생방송',
        'video-info': '비디오 정보'
    },
    de: {
        'danmaku-loading': 'Danmaku lädt...',
        top: 'Oben',
        bottom: 'Unten',
        rolling: 'Rollend',
        'input-danmaku-enter': 'Drücke Enter nach dem Einfügen vom Danmaku',
        'about-author': 'Über den Autor',
        'dplayer-feedback': 'DPlayer Feedback',
        'about-dplayer': 'Über DPlayer',
        loop: 'Wiederholen',
        speed: 'Geschwindigkeit',
        'opacity-danmaku': 'Transparenz für Danmaku',
        normal: 'Normal',
        'please-input-danmaku': 'Bitte Danmaku Inhalt eingeben!',
        'set-danmaku-color': 'Danmaku Farbe festlegen',
        'set-danmaku-type': 'Danmaku Typ festlegen',
        'show-danmaku': 'Zeige Danmaku',
        'video-failed': 'Das Video konnte nicht geladen werden',
        'danmaku-failed': 'Danmaku konnte nicht geladen werden',
        'danmaku-send-failed': 'Das senden von Danmaku ist fehgeschlagen',
        'switching-quality': 'Wechsle zur %q Qualität',
        'switched-quality': 'Zur %q Qualität gewechselt',
        ff: '%s s Vorwärts',
        rew: '%s s Zurück',
        'unlimited-danmaku': 'Unlimitiertes Danmaku',
        'send-danmaku': 'Sende Danmaku',
        setting: 'Einstellungen',
        fullscreen: 'Vollbild',
        'web-fullscreen': 'Browser Vollbild',
        send: 'Senden',
        screenshot: 'Screenshot',
        airplay: 'AirPlay',
        'show-subs': 'Zeige Untertitel',
        chromecast: 'ChromeCast',
        subtitle: 'Untertitel',
        off: 'Schließung',
        'hide-subs': 'Verstecke Untertitel',
        volume: 'Lautstärke',
        live: 'Live',
        'video-info': 'Video Info'
    }
};

// EXTERNAL MODULE: ./src/assets/play.svg
var play = __webpack_require__(4007);
var play_default = /*#__PURE__*/__webpack_require__.n(play);
// EXTERNAL MODULE: ./src/assets/pause.svg
var pause = __webpack_require__(2723);
var pause_default = /*#__PURE__*/__webpack_require__.n(pause);
// EXTERNAL MODULE: ./src/assets/volume-up.svg
var volume_up = __webpack_require__(6848);
var volume_up_default = /*#__PURE__*/__webpack_require__.n(volume_up);
// EXTERNAL MODULE: ./src/assets/volume-down.svg
var volume_down = __webpack_require__(2813);
var volume_down_default = /*#__PURE__*/__webpack_require__.n(volume_down);
// EXTERNAL MODULE: ./src/assets/volume-off.svg
var volume_off = __webpack_require__(9480);
var volume_off_default = /*#__PURE__*/__webpack_require__.n(volume_off);
// EXTERNAL MODULE: ./src/assets/full.svg
var full = __webpack_require__(1241);
var full_default = /*#__PURE__*/__webpack_require__.n(full);
// EXTERNAL MODULE: ./src/assets/full-web.svg
var full_web = __webpack_require__(6783);
var full_web_default = /*#__PURE__*/__webpack_require__.n(full_web);
// EXTERNAL MODULE: ./src/assets/setting.svg
var setting = __webpack_require__(7531);
var setting_default = /*#__PURE__*/__webpack_require__.n(setting);
// EXTERNAL MODULE: ./src/assets/right.svg
var right = __webpack_require__(5381);
var right_default = /*#__PURE__*/__webpack_require__.n(right);
// EXTERNAL MODULE: ./src/assets/comment.svg
var comment = __webpack_require__(8885);
var comment_default = /*#__PURE__*/__webpack_require__.n(comment);
// EXTERNAL MODULE: ./src/assets/comment-off.svg
var comment_off = __webpack_require__(8478);
var comment_off_default = /*#__PURE__*/__webpack_require__.n(comment_off);
// EXTERNAL MODULE: ./src/assets/send.svg
var send = __webpack_require__(4916);
var send_default = /*#__PURE__*/__webpack_require__.n(send);
// EXTERNAL MODULE: ./src/assets/pallette.svg
var pallette = __webpack_require__(3310);
var pallette_default = /*#__PURE__*/__webpack_require__.n(pallette);
// EXTERNAL MODULE: ./src/assets/camera.svg
var camera = __webpack_require__(6409);
var camera_default = /*#__PURE__*/__webpack_require__.n(camera);
// EXTERNAL MODULE: ./src/assets/airplay.svg
var airplay = __webpack_require__(3597);
var airplay_default = /*#__PURE__*/__webpack_require__.n(airplay);
// EXTERNAL MODULE: ./src/assets/subtitle.svg
var subtitle = __webpack_require__(5223);
var subtitle_default = /*#__PURE__*/__webpack_require__.n(subtitle);
// EXTERNAL MODULE: ./src/assets/loading.svg
var loading = __webpack_require__(2112);
var loading_default = /*#__PURE__*/__webpack_require__.n(loading);
// EXTERNAL MODULE: ./src/assets/chromecast.svg
var chromecast = __webpack_require__(456);
var chromecast_default = /*#__PURE__*/__webpack_require__.n(chromecast);
;// CONCATENATED MODULE: ./src/js/icons.js


















var Icons = {
    play: (play_default()),
    pause: (pause_default()),
    volumeUp: (volume_up_default()),
    volumeDown: (volume_down_default()),
    volumeOff: (volume_off_default()),
    full: (full_default()),
    fullWeb: (full_web_default()),
    setting: (setting_default()),
    right: (right_default()),
    comment: (comment_default()),
    commentOff: (comment_off_default()),
    send: (send_default()),
    pallette: (pallette_default()),
    camera: (camera_default()),
    subtitle: (subtitle_default()),
    loading: (loading_default()),
    airplay: (airplay_default()),
    chromecast: (chromecast_default())
};
/* harmony default export */ const icons = (Icons);
// EXTERNAL MODULE: ./src/template/player.art
var player = __webpack_require__(368);
var player_default = /*#__PURE__*/__webpack_require__.n(player);
;// CONCATENATED MODULE: ./src/js/template.js
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}



var Template = function () {
    function Template(options) {
        _classCallCheck(this, Template);
        this.container = options.container;
        this.options = options.options;
        this.index = options.index;
        this.tran = options.tran;
        this.init();
    }
    _createClass(Template, [{
            key: 'init',
            value: function init() {
                this.container.innerHTML = player_default()({
                    options: this.options,
                    index: this.index,
                    tran: this.tran,
                    icons: icons,
                    mobile: js_utils.isMobile,
                    video: {
                        current: true,
                        pic: this.options.video.pic,
                        screenshot: this.options.screenshot,
                        airplay: js_utils.isSafari && !js_utils.isChrome ? this.options.airplay : false,
                        chromecast: this.options.chromecast,
                        preload: this.options.preload,
                        url: this.options.video.url,
                        subtitle: this.options.subtitle
                    }
                });
                this.volumeBar = this.container.querySelector('.dplayer-volume-bar-inner');
                this.volumeBarWrap = this.container.querySelector('.dplayer-volume-bar');
                this.volumeBarWrapWrap = this.container.querySelector('.dplayer-volume-bar-wrap');
                this.volumeButton = this.container.querySelector('.dplayer-volume');
                this.volumeButtonIcon = this.container.querySelector('.dplayer-volume-icon');
                this.volumeIcon = this.container.querySelector('.dplayer-volume-icon .dplayer-icon-content');
                this.playedBar = this.container.querySelector('.dplayer-played');
                this.loadedBar = this.container.querySelector('.dplayer-loaded');
                this.playedBarWrap = this.container.querySelector('.dplayer-bar-wrap');
                this.playedBarTime = this.container.querySelector('.dplayer-bar-time');
                this.danmaku = this.container.querySelector('.dplayer-danmaku');
                this.danmakuLoading = this.container.querySelector('.dplayer-danloading');
                this.video = this.container.querySelector('.dplayer-video-current');
                this.bezel = this.container.querySelector('.dplayer-bezel-icon');
                this.playButton = this.container.querySelector('.dplayer-play-icon');
                this.mobilePlayButton = this.container.querySelector('.dplayer-mobile-play');
                this.videoWrap = this.container.querySelector('.dplayer-video-wrap');
                this.controllerMask = this.container.querySelector('.dplayer-controller-mask');
                this.ptime = this.container.querySelector('.dplayer-ptime');
                this.settingButton = this.container.querySelector('.dplayer-setting-icon');
                this.settingBox = this.container.querySelector('.dplayer-setting-box');
                this.mask = this.container.querySelector('.dplayer-mask');
                this.loop = this.container.querySelector('.dplayer-setting-loop');
                this.loopToggle = this.container.querySelector('.dplayer-setting-loop .dplayer-toggle-setting-input');
                this.showDanmaku = this.container.querySelector('.dplayer-setting-showdan');
                this.showDanmakuToggle = this.container.querySelector('.dplayer-showdan-setting-input');
                this.unlimitDanmaku = this.container.querySelector('.dplayer-setting-danunlimit');
                this.unlimitDanmakuToggle = this.container.querySelector('.dplayer-danunlimit-setting-input');
                this.speed = this.container.querySelector('.dplayer-setting-speed');
                this.speedItem = this.container.querySelectorAll('.dplayer-setting-speed-item');
                this.danmakuOpacityBar = this.container.querySelector('.dplayer-danmaku-bar-inner');
                this.danmakuOpacityBarWrap = this.container.querySelector('.dplayer-danmaku-bar');
                this.danmakuOpacityBarWrapWrap = this.container.querySelector('.dplayer-danmaku-bar-wrap');
                this.danmakuOpacityBox = this.container.querySelector('.dplayer-setting-danmaku');
                this.dtime = this.container.querySelector('.dplayer-dtime');
                this.controller = this.container.querySelector('.dplayer-controller');
                this.commentInput = this.container.querySelector('.dplayer-comment-input');
                this.commentButton = this.container.querySelector('.dplayer-comment-icon');
                this.commentSettingBox = this.container.querySelector('.dplayer-comment-setting-box');
                this.commentSettingButton = this.container.querySelector('.dplayer-comment-setting-icon');
                this.commentSettingFill = this.container.querySelector('.dplayer-comment-setting-icon path');
                this.commentSendButton = this.container.querySelector('.dplayer-send-icon');
                this.commentSendFill = this.container.querySelector('.dplayer-send-icon path');
                this.commentColorSettingBox = this.container.querySelector('.dplayer-comment-setting-color');
                this.browserFullButton = this.container.querySelector('.dplayer-full-icon');
                this.webFullButton = this.container.querySelector('.dplayer-full-in-icon');
                this.menu = this.container.querySelector('.dplayer-menu');
                this.menuItem = this.container.querySelectorAll('.dplayer-menu-item');
                this.qualityList = this.container.querySelector('.dplayer-quality-list');
                this.camareButton = this.container.querySelector('.dplayer-camera-icon');
                this.airplayButton = this.container.querySelector('.dplayer-airplay-icon');
                this.chromecastButton = this.container.querySelector('.dplayer-chromecast-icon');
                this.subtitleButton = this.container.querySelector('.dplayer-subtitle-icon');
                this.subtitleButtonInner = this.container.querySelector('.dplayer-subtitle-icon .dplayer-icon-content');
                this.subtitlesButton = this.container.querySelector('.dplayer-subtitles-icon');
                this.subtitlesBox = this.container.querySelector('.dplayer-subtitles-box');
                this.subtitlesItem = this.container.querySelectorAll('.dplayer-subtitles-item');
                this.subtitle = this.container.querySelector('.dplayer-subtitle');
                this.subtrack = this.container.querySelector('.dplayer-subtrack');
                this.qualityButton = this.container.querySelector('.dplayer-quality-icon');
                this.barPreview = this.container.querySelector('.dplayer-bar-preview');
                this.barWrap = this.container.querySelector('.dplayer-bar-wrap');
                this.noticeList = this.container.querySelector('.dplayer-notice-list');
                this.infoPanel = this.container.querySelector('.dplayer-info-panel');
                this.infoPanelClose = this.container.querySelector('.dplayer-info-panel-close');
                this.infoVersion = this.container.querySelector('.dplayer-info-panel-item-version .dplayer-info-panel-item-data');
                this.infoFPS = this.container.querySelector('.dplayer-info-panel-item-fps .dplayer-info-panel-item-data');
                this.infoType = this.container.querySelector('.dplayer-info-panel-item-type .dplayer-info-panel-item-data');
                this.infoUrl = this.container.querySelector('.dplayer-info-panel-item-url .dplayer-info-panel-item-data');
                this.infoResolution = this.container.querySelector('.dplayer-info-panel-item-resolution .dplayer-info-panel-item-data');
                this.infoDuration = this.container.querySelector('.dplayer-info-panel-item-duration .dplayer-info-panel-item-data');
                this.infoDanmakuId = this.container.querySelector('.dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data');
                this.infoDanmakuApi = this.container.querySelector('.dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data');
                this.infoDanmakuAmount = this.container.querySelector('.dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data');
            }
        }], [{
            key: 'NewNotice',
            value: function NewNotice(text, opacity) {
                var notice = document.createElement('div');
                notice.classList.add('dplayer-notice');
                notice.style.opacity = opacity;
                notice.innerText = text;
                return notice;
            }
        }]);
    return Template;
}();
/* harmony default export */ const template = (Template);
;// CONCATENATED MODULE: ./src/js/danmaku.js
function danmaku_typeof(obj) {
    '@babel/helpers - typeof';
    return danmaku_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    }, danmaku_typeof(obj);
}
function danmaku_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function danmaku_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function danmaku_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        danmaku_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        danmaku_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}

var Danmaku = function () {
    function Danmaku(options) {
        danmaku_classCallCheck(this, Danmaku);
        this.options = options;
        this.player = this.options.player;
        this.container = this.options.container;
        this.danTunnel = {
            right: {},
            top: {},
            bottom: {}
        };
        this.danIndex = 0;
        this.dan = [];
        this.showing = true;
        this._opacity = this.options.opacity;
        this.events = this.options.events;
        this.unlimited = this.options.unlimited;
        this._measure('');
        this.load();
    }
    danmaku_createClass(Danmaku, [
        {
            key: 'load',
            value: function load() {
                var _this = this;
                var apiurl;
                if (this.options.api.maximum) {
                    apiurl = ''.concat(this.options.api.address, 'v3/?id=').concat(this.options.api.id, '&max=').concat(this.options.api.maximum);
                } else {
                    apiurl = ''.concat(this.options.api.address, 'v3/?id=').concat(this.options.api.id);
                }
                var endpoints = (this.options.api.addition || []).slice(0);
                endpoints.push(apiurl);
                this.events && this.events.trigger('danmaku_load_start', endpoints);
                this._readAllEndpoints(endpoints, function (results) {
                    _this.dan = [].concat.apply([], results).sort(function (a, b) {
                        return a.time - b.time;
                    });
                    window.requestAnimationFrame(function () {
                        _this.frame();
                    });
                    _this.options.callback();
                    _this.events && _this.events.trigger('danmaku_load_end');
                });
            }
        },
        {
            key: 'reload',
            value: function reload(newAPI) {
                this.options.api = newAPI;
                this.dan = [];
                this.clear();
                this.load();
            }
        },
        {
            key: '_readAllEndpoints',
            value: function _readAllEndpoints(endpoints, callback) {
                var _this2 = this;
                var results = [];
                var readCount = 0;
                var _loop = function _loop(i) {
                    _this2.options.apiBackend.read({
                        url: endpoints[i],
                        success: function success(data) {
                            results[i] = data;
                            ++readCount;
                            if (readCount === endpoints.length) {
                                callback(results);
                            }
                        },
                        error: function error(msg) {
                            _this2.options.error(msg || _this2.options.tran('danmaku-failed'));
                            results[i] = [];
                            ++readCount;
                            if (readCount === endpoints.length) {
                                callback(results);
                            }
                        }
                    });
                };
                for (var i = 0; i < endpoints.length; ++i) {
                    _loop(i);
                }
            }
        },
        {
            key: 'send',
            value: function send(dan, callback) {
                var _this3 = this;
                var danmakuData = {
                    token: this.options.api.token,
                    id: this.options.api.id,
                    author: this.options.api.user,
                    time: this.options.time(),
                    text: dan.text,
                    color: dan.color,
                    type: dan.type
                };
                this.options.apiBackend.send({
                    url: this.options.api.address + 'v3/',
                    data: danmakuData,
                    success: callback,
                    error: function error(msg) {
                        _this3.options.error(msg || _this3.options.tran('danmaku-failed'));
                    }
                });
                this.dan.splice(this.danIndex, 0, danmakuData);
                this.danIndex++;
                var danmaku = {
                    text: this.htmlEncode(danmakuData.text),
                    color: danmakuData.color,
                    type: danmakuData.type,
                    border: '2px solid '.concat(this.options.borderColor)
                };
                this.draw(danmaku);
                this.events && this.events.trigger('danmaku_send', danmakuData);
            }
        },
        {
            key: 'frame',
            value: function frame() {
                var _this4 = this;
                if (this.dan.length && !this.paused && this.showing) {
                    var item = this.dan[this.danIndex];
                    var dan = [];
                    while (item && this.options.time() > parseFloat(item.time)) {
                        dan.push(item);
                        item = this.dan[++this.danIndex];
                    }
                    this.draw(dan);
                }
                window.requestAnimationFrame(function () {
                    _this4.frame();
                });
            }
        },
        {
            key: 'opacity',
            value: function opacity(percentage) {
                if (percentage !== undefined) {
                    var items = this.container.getElementsByClassName('dplayer-danmaku-item');
                    for (var i = 0; i < items.length; i++) {
                        items[i].style.opacity = percentage;
                    }
                    this._opacity = percentage;
                    this.events && this.events.trigger('danmaku_opacity', this._opacity);
                }
                return this._opacity;
            }
        },
        {
            key: 'draw',
            value: function draw(dan) {
                var _this5 = this;
                if (this.showing) {
                    var itemHeight = this.options.height;
                    var danWidth = this.container.offsetWidth;
                    var danHeight = this.container.offsetHeight;
                    var itemY = parseInt(danHeight / itemHeight);
                    var danItemRight = function danItemRight(ele) {
                        var eleWidth = ele.offsetWidth || parseInt(ele.style.width);
                        var eleRight = ele.getBoundingClientRect().right || _this5.container.getBoundingClientRect().right + eleWidth;
                        return _this5.container.getBoundingClientRect().right - eleRight;
                    };
                    var danSpeed = function danSpeed(width) {
                        return (danWidth + width) / 5;
                    };
                    var getTunnel = function getTunnel(ele, type, width) {
                        var tmp = danWidth / danSpeed(width);
                        var _loop2 = function _loop2(i) {
                            var item = _this5.danTunnel[type][i + ''];
                            if (item && item.length) {
                                if (type !== 'right') {
                                    return 'continue';
                                }
                                for (var j = 0; j < item.length; j++) {
                                    var danRight = danItemRight(item[j]) - 10;
                                    if (danRight <= danWidth - tmp * danSpeed(parseInt(item[j].style.width)) || danRight <= 0) {
                                        break;
                                    }
                                    if (j === item.length - 1) {
                                        _this5.danTunnel[type][i + ''].push(ele);
                                        ele.addEventListener('animationend', function () {
                                            _this5.danTunnel[type][i + ''].splice(0, 1);
                                        });
                                        return { v: i % itemY };
                                    }
                                }
                            } else {
                                _this5.danTunnel[type][i + ''] = [ele];
                                ele.addEventListener('animationend', function () {
                                    _this5.danTunnel[type][i + ''].splice(0, 1);
                                });
                                return { v: i % itemY };
                            }
                        };
                        for (var i = 0; _this5.unlimited || i < itemY; i++) {
                            var _ret = _loop2(i);
                            if (_ret === 'continue')
                                continue;
                            if (danmaku_typeof(_ret) === 'object')
                                return _ret.v;
                        }
                        return -1;
                    };
                    if (Object.prototype.toString.call(dan) !== '[object Array]') {
                        dan = [dan];
                    }
                    var docFragment = document.createDocumentFragment();
                    var _loop3 = function _loop3(i) {
                        dan[i].type = js_utils.number2Type(dan[i].type);
                        if (!dan[i].color) {
                            dan[i].color = 16777215;
                        }
                        var item = document.createElement('div');
                        item.classList.add('dplayer-danmaku-item');
                        item.classList.add('dplayer-danmaku-'.concat(dan[i].type));
                        if (dan[i].border) {
                            item.innerHTML = '<span style="border:'.concat(dan[i].border, '">').concat(dan[i].text, '</span>');
                        } else {
                            item.innerHTML = dan[i].text;
                        }
                        item.style.opacity = _this5._opacity;
                        item.style.color = js_utils.number2Color(dan[i].color);
                        item.addEventListener('animationend', function () {
                            _this5.container.removeChild(item);
                        });
                        var itemWidth = _this5._measure(dan[i].text);
                        var tunnel = void 0;
                        switch (dan[i].type) {
                        case 'right':
                            tunnel = getTunnel(item, dan[i].type, itemWidth);
                            if (tunnel >= 0) {
                                item.style.width = itemWidth + 1 + 'px';
                                item.style.top = itemHeight * tunnel + 'px';
                                item.style.transform = 'translateX(-'.concat(danWidth, 'px)');
                            }
                            break;
                        case 'top':
                            tunnel = getTunnel(item, dan[i].type);
                            if (tunnel >= 0) {
                                item.style.top = itemHeight * tunnel + 'px';
                            }
                            break;
                        case 'bottom':
                            tunnel = getTunnel(item, dan[i].type);
                            if (tunnel >= 0) {
                                item.style.bottom = itemHeight * tunnel + 'px';
                            }
                            break;
                        default:
                            console.error('Can\'t handled danmaku type: '.concat(dan[i].type));
                        }
                        if (tunnel >= 0) {
                            item.classList.add('dplayer-danmaku-move');
                            item.style.animationDuration = _this5._danAnimation(dan[i].type);
                            docFragment.appendChild(item);
                        }
                    };
                    for (var i = 0; i < dan.length; i++) {
                        _loop3(i);
                    }
                    this.container.appendChild(docFragment);
                    return docFragment;
                }
            }
        },
        {
            key: 'play',
            value: function play() {
                this.paused = false;
            }
        },
        {
            key: 'pause',
            value: function pause() {
                this.paused = true;
            }
        },
        {
            key: '_measure',
            value: function _measure(text) {
                if (!this.context) {
                    var measureStyle = getComputedStyle(this.container.getElementsByClassName('dplayer-danmaku-item')[0], null);
                    this.context = document.createElement('canvas').getContext('2d');
                    this.context.font = measureStyle.getPropertyValue('font');
                }
                return this.context.measureText(text).width;
            }
        },
        {
            key: 'seek',
            value: function seek() {
                this.clear();
                for (var i = 0; i < this.dan.length; i++) {
                    if (this.dan[i].time >= this.options.time()) {
                        this.danIndex = i;
                        break;
                    }
                    this.danIndex = this.dan.length;
                }
            }
        },
        {
            key: 'clear',
            value: function clear() {
                this.danTunnel = {
                    right: {},
                    top: {},
                    bottom: {}
                };
                this.danIndex = 0;
                this.options.container.innerHTML = '';
                this.events && this.events.trigger('danmaku_clear');
            }
        },
        {
            key: 'htmlEncode',
            value: function htmlEncode(str) {
                return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2f;');
            }
        },
        {
            key: 'resize',
            value: function resize() {
                var danWidth = this.container.offsetWidth;
                var items = this.container.getElementsByClassName('dplayer-danmaku-item');
                for (var i = 0; i < items.length; i++) {
                    items[i].style.transform = 'translateX(-'.concat(danWidth, 'px)');
                }
            }
        },
        {
            key: 'hide',
            value: function hide() {
                this.showing = false;
                this.pause();
                this.clear();
                this.events && this.events.trigger('danmaku_hide');
            }
        },
        {
            key: 'show',
            value: function show() {
                this.seek();
                this.showing = true;
                this.play();
                this.events && this.events.trigger('danmaku_show');
            }
        },
        {
            key: 'unlimit',
            value: function unlimit(_boolean) {
                this.unlimited = _boolean;
            }
        },
        {
            key: 'speed',
            value: function speed(rate) {
                this.options.api.speedRate = rate;
            }
        },
        {
            key: '_danAnimation',
            value: function _danAnimation(position) {
                var rate = this.options.api.speedRate || 1;
                var isFullScreen = !!this.player.fullScreen.isFullScreen();
                var animations = {
                    top: ''.concat((isFullScreen ? 6 : 4) / rate, 's'),
                    right: ''.concat((isFullScreen ? 8 : 5) / rate, 's'),
                    bottom: ''.concat((isFullScreen ? 6 : 4) / rate, 's')
                };
                return animations[position];
            }
        }
    ]);
    return Danmaku;
}();
/* harmony default export */ const danmaku = (Danmaku);
;// CONCATENATED MODULE: ./src/js/events.js
function events_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function events_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function events_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        events_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        events_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}
var Events = function () {
    function Events() {
        events_classCallCheck(this, Events);
        this.events = {};
        this.videoEvents = [
            'abort',
            'canplay',
            'canplaythrough',
            'durationchange',
            'emptied',
            'ended',
            'error',
            'loadeddata',
            'loadedmetadata',
            'loadstart',
            'mozaudioavailable',
            'pause',
            'play',
            'playing',
            'progress',
            'ratechange',
            'seeked',
            'seeking',
            'stalled',
            'suspend',
            'timeupdate',
            'volumechange',
            'waiting'
        ];
        this.playerEvents = [
            'screenshot',
            'thumbnails_show',
            'thumbnails_hide',
            'danmaku_show',
            'danmaku_hide',
            'danmaku_clear',
            'danmaku_loaded',
            'danmaku_send',
            'danmaku_opacity',
            'contextmenu_show',
            'contextmenu_hide',
            'notice_show',
            'notice_hide',
            'quality_start',
            'quality_end',
            'destroy',
            'resize',
            'fullscreen',
            'fullscreen_cancel',
            'webfullscreen',
            'webfullscreen_cancel',
            'subtitle_show',
            'subtitle_hide',
            'subtitle_change'
        ];
    }
    events_createClass(Events, [
        {
            key: 'on',
            value: function on(name, callback) {
                if (this.type(name) && typeof callback === 'function') {
                    if (!this.events[name]) {
                        this.events[name] = [];
                    }
                    this.events[name].push(callback);
                }
            }
        },
        {
            key: 'trigger',
            value: function trigger(name, info) {
                if (this.events[name] && this.events[name].length) {
                    for (var i = 0; i < this.events[name].length; i++) {
                        this.events[name][i](info);
                    }
                }
            }
        },
        {
            key: 'type',
            value: function type(name) {
                if (this.playerEvents.indexOf(name) !== -1) {
                    return 'player';
                } else if (this.videoEvents.indexOf(name) !== -1) {
                    return 'video';
                }
                console.error('Unknown event name: '.concat(name));
                return null;
            }
        }
    ]);
    return Events;
}();
/* harmony default export */ const events = (Events);
;// CONCATENATED MODULE: ./src/js/fullscreen.js
function fullscreen_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function fullscreen_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function fullscreen_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        fullscreen_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        fullscreen_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}

var FullScreen = function () {
    function FullScreen(player) {
        var _this = this;
        fullscreen_classCallCheck(this, FullScreen);
        this.player = player;
        this.lastScrollPosition = {
            left: 0,
            top: 0
        };
        this.player.events.on('webfullscreen', function () {
            _this.player.resize();
        });
        this.player.events.on('webfullscreen_cancel', function () {
            _this.player.resize();
            js_utils.setScrollPosition(_this.lastScrollPosition);
        });
        this.fullscreenchange = function () {
            _this.player.resize();
            if (_this.isFullScreen('browser')) {
                _this.player.events.trigger('fullscreen');
            } else {
                js_utils.setScrollPosition(_this.lastScrollPosition);
                _this.player.events.trigger('fullscreen_cancel');
            }
        };
        this.docfullscreenchange = function () {
            var fullEle = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            if (fullEle && fullEle !== _this.player.container) {
                return;
            }
            _this.player.resize();
            if (fullEle) {
                _this.player.events.trigger('fullscreen');
            } else {
                js_utils.setScrollPosition(_this.lastScrollPosition);
                _this.player.events.trigger('fullscreen_cancel');
            }
        };
        if (/Firefox/.test(navigator.userAgent)) {
            document.addEventListener('mozfullscreenchange', this.docfullscreenchange);
            document.addEventListener('fullscreenchange', this.docfullscreenchange);
        } else {
            this.player.container.addEventListener('fullscreenchange', this.fullscreenchange);
            this.player.container.addEventListener('webkitfullscreenchange', this.fullscreenchange);
            document.addEventListener('msfullscreenchange', this.docfullscreenchange);
            document.addEventListener('MSFullscreenChange', this.docfullscreenchange);
        }
    }
    fullscreen_createClass(FullScreen, [
        {
            key: 'isFullScreen',
            value: function isFullScreen() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';
                switch (type) {
                case 'browser':
                    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                case 'web':
                    return this.player.container.classList.contains('dplayer-fulled');
                }
            }
        },
        {
            key: 'request',
            value: function request() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';
                var anotherType = type === 'browser' ? 'web' : 'browser';
                var anotherTypeOn = this.isFullScreen(anotherType);
                if (!anotherTypeOn) {
                    this.lastScrollPosition = js_utils.getScrollPosition();
                }
                switch (type) {
                case 'browser':
                    if (this.player.container.requestFullscreen) {
                        this.player.container.requestFullscreen();
                    } else if (this.player.container.mozRequestFullScreen) {
                        this.player.container.mozRequestFullScreen();
                    } else if (this.player.container.webkitRequestFullscreen) {
                        this.player.container.webkitRequestFullscreen();
                    } else if (this.player.video.webkitEnterFullscreen) {
                        this.player.video.webkitEnterFullscreen();
                    } else if (this.player.video.webkitEnterFullScreen) {
                        this.player.video.webkitEnterFullScreen();
                    } else if (this.player.container.msRequestFullscreen) {
                        this.player.container.msRequestFullscreen();
                    }
                    break;
                case 'web':
                    this.player.container.classList.add('dplayer-fulled');
                    document.body.classList.add('dplayer-web-fullscreen-fix');
                    this.player.events.trigger('webfullscreen');
                    break;
                }
                if (anotherTypeOn) {
                    this.cancel(anotherType);
                }
            }
        },
        {
            key: 'cancel',
            value: function cancel() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';
                switch (type) {
                case 'browser':
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.webkitCancelFullscreen) {
                        document.webkitCancelFullscreen();
                    } else if (document.msCancelFullScreen) {
                        document.msCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                    break;
                case 'web':
                    this.player.container.classList.remove('dplayer-fulled');
                    document.body.classList.remove('dplayer-web-fullscreen-fix');
                    this.player.events.trigger('webfullscreen_cancel');
                    break;
                }
            }
        },
        {
            key: 'toggle',
            value: function toggle() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';
                if (this.isFullScreen(type)) {
                    this.cancel(type);
                } else {
                    this.request(type);
                }
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                if (/Firefox/.test(navigator.userAgent)) {
                    document.removeEventListener('mozfullscreenchange', this.docfullscreenchange);
                    document.removeEventListener('fullscreenchange', this.docfullscreenchange);
                } else {
                    this.player.container.removeEventListener('fullscreenchange', this.fullscreenchange);
                    this.player.container.removeEventListener('webkitfullscreenchange', this.fullscreenchange);
                    document.removeEventListener('msfullscreenchange', this.docfullscreenchange);
                    document.removeEventListener('MSFullscreenChange', this.docfullscreenchange);
                }
            }
        }
    ]);
    return FullScreen;
}();
/* harmony default export */ const fullscreen = (FullScreen);
;// CONCATENATED MODULE: ./src/js/user.js
function user_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function user_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function user_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        user_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        user_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}

var User = function () {
    function User(player) {
        user_classCallCheck(this, User);
        this.storageName = {
            opacity: 'dplayer-danmaku-opacity',
            volume: 'dplayer-volume',
            unlimited: 'dplayer-danmaku-unlimited',
            danmaku: 'dplayer-danmaku-show',
            subtitle: 'dplayer-subtitle-show'
        };
        this['default'] = {
            opacity: 0.7,
            volume: player.options.hasOwnProperty('volume') ? player.options.volume : 0.7,
            unlimited: (player.options.danmaku && player.options.danmaku.unlimited ? 1 : 0) || 0,
            danmaku: 1,
            subtitle: 1
        };
        this.data = {};
        this.init();
    }
    user_createClass(User, [
        {
            key: 'init',
            value: function init() {
                for (var item in this.storageName) {
                    var name = this.storageName[item];
                    this.data[item] = parseFloat(js_utils.storage.get(name) || this['default'][item]);
                }
            }
        },
        {
            key: 'get',
            value: function get(key) {
                return this.data[key];
            }
        },
        {
            key: 'set',
            value: function set(key, value) {
                this.data[key] = value;
                js_utils.storage.set(this.storageName[key], value);
            }
        }
    ]);
    return User;
}();
/* harmony default export */ const user = (User);
;// CONCATENATED MODULE: ./src/js/subtitle.js
function subtitle_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function subtitle_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function subtitle_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        subtitle_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        subtitle_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}
var Subtitle = function () {
    function Subtitle(container, video, options, events) {
        subtitle_classCallCheck(this, Subtitle);
        this.container = container;
        this.video = video;
        this.options = options;
        this.events = events;
        this.init();
    }
    subtitle_createClass(Subtitle, [
        {
            key: 'init',
            value: function init() {
                var _this = this;
                this.container.style.fontSize = this.options.fontSize;
                this.container.style.bottom = this.options.bottom;
                this.container.style.color = this.options.color;
                if (this.video.textTracks && this.video.textTracks[0]) {
                    var track = this.video.textTracks[0];
                    track.oncuechange = function () {
                        var cue = track.activeCues[track.activeCues.length - 1];
                        _this.container.innerHTML = '';
                        if (cue) {
                            var template = document.createElement('div');
                            template.appendChild(cue.getCueAsHTML());
                            var trackHtml = template.innerHTML.split(/\r?\n/).map(function (item) {
                                return '<p>'.concat(item, '</p>');
                            }).join('');
                            _this.container.innerHTML = trackHtml;
                        }
                        _this.events.trigger('subtitle_change');
                    };
                }
            }
        },
        {
            key: 'show',
            value: function show() {
                this.container.classList.remove('dplayer-subtitle-hide');
                this.events.trigger('subtitle_show');
            }
        },
        {
            key: 'hide',
            value: function hide() {
                this.container.classList.add('dplayer-subtitle-hide');
                this.events.trigger('subtitle_hide');
            }
        },
        {
            key: 'toggle',
            value: function toggle() {
                if (this.container.classList.contains('dplayer-subtitle-hide')) {
                    this.show();
                } else {
                    this.hide();
                }
            }
        }
    ]);
    return Subtitle;
}();
/* harmony default export */ const js_subtitle = (Subtitle);
;// CONCATENATED MODULE: ./src/js/subtitles.js
function subtitles_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function subtitles_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function subtitles_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        subtitles_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        subtitles_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}
var Subtitles = function () {
    function Subtitles(player) {
        var _this = this;
        subtitles_classCallCheck(this, Subtitles);
        this.player = player;
        this.player.template.mask.addEventListener('click', function () {
            _this.hide();
        });
        this.player.template.subtitlesButton.addEventListener('click', function () {
            _this.adaptiveHeight();
            _this.show();
        });
        var lastItemIndex = this.player.template.subtitlesItem.length - 1;
        var _loop = function _loop(i) {
            _this.player.template.subtitlesItem[i].addEventListener('click', function () {
                _this.hide();
                if (_this.player.options.subtitle.index !== i) {
                    _this.player.template.subtitle.innerHTML = '<p></p>';
                    _this.player.template.subtrack.src = _this.player.template.subtitlesItem[i].dataset.subtitle;
                    _this.player.options.subtitle.index = i;
                    if (_this.player.template.subtitle.classList.contains('dplayer-subtitle-hide')) {
                        _this.subContainerShow();
                    }
                }
            });
        };
        for (var i = 0; i < lastItemIndex; i++) {
            _loop(i);
        }
        this.player.template.subtitlesItem[lastItemIndex].addEventListener('click', function () {
            _this.hide();
            if (_this.player.options.subtitle.index !== lastItemIndex) {
                _this.player.template.subtitle.innerHTML = '<p></p>';
                _this.player.template.subtrack.src = '';
                _this.player.options.subtitle.index = lastItemIndex;
                _this.subContainerHide();
            }
        });
    }
    subtitles_createClass(Subtitles, [
        {
            key: 'subContainerShow',
            value: function subContainerShow() {
                this.player.template.subtitle.classList.remove('dplayer-subtitle-hide');
                this.player.events.trigger('subtitle_show');
            }
        },
        {
            key: 'subContainerHide',
            value: function subContainerHide() {
                this.player.template.subtitle.classList.add('dplayer-subtitle-hide');
                this.player.events.trigger('subtitle_hide');
            }
        },
        {
            key: 'hide',
            value: function hide() {
                this.player.template.subtitlesBox.classList.remove('dplayer-subtitles-box-open');
                this.player.template.mask.classList.remove('dplayer-mask-show');
                this.player.controller.disableAutoHide = false;
            }
        },
        {
            key: 'show',
            value: function show() {
                this.player.template.subtitlesBox.classList.add('dplayer-subtitles-box-open');
                this.player.template.mask.classList.add('dplayer-mask-show');
                this.player.controller.disableAutoHide = true;
            }
        },
        {
            key: 'adaptiveHeight',
            value: function adaptiveHeight() {
                var curBoxHeight = this.player.template.subtitlesItem.length * 30 + 14;
                var stdMaxHeight = this.player.template.videoWrap.offsetHeight * 0.8;
                if (curBoxHeight >= stdMaxHeight - 50) {
                    this.player.template.subtitlesBox.style.bottom = '8px';
                    this.player.template.subtitlesBox.style['max-height'] = stdMaxHeight - 8 + 'px';
                } else {
                    this.player.template.subtitlesBox.style.bottom = '50px';
                    this.player.template.subtitlesBox.style['max-height'] = stdMaxHeight - 50 + 'px';
                }
            }
        }
    ]);
    return Subtitles;
}();
/* harmony default export */ const subtitles = (Subtitles);
;// CONCATENATED MODULE: ./src/js/bar.js
function bar_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function bar_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function bar_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        bar_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        bar_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}
var Bar = function () {
    function Bar(template) {
        bar_classCallCheck(this, Bar);
        this.elements = {};
        this.elements.volume = template.volumeBar;
        this.elements.played = template.playedBar;
        this.elements.loaded = template.loadedBar;
        this.elements.danmaku = template.danmakuOpacityBar;
    }
    bar_createClass(Bar, [
        {
            key: 'set',
            value: function set(type, percentage, direction) {
                percentage = Math.max(percentage, 0);
                percentage = Math.min(percentage, 1);
                this.elements[type].style[direction] = percentage * 100 + '%';
            }
        },
        {
            key: 'get',
            value: function get(type) {
                return parseFloat(this.elements[type].style.width) / 100;
            }
        }
    ]);
    return Bar;
}();
/* harmony default export */ const bar = (Bar);
;// CONCATENATED MODULE: ./src/js/timer.js
function timer_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function timer_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function timer_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        timer_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        timer_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}
var Timer = function () {
    function Timer(player) {
        timer_classCallCheck(this, Timer);
        this.player = player;
        window.requestAnimationFrame = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        }();
        this.types = [
            'loading',
            'info',
            'fps'
        ];
        this.init();
    }
    timer_createClass(Timer, [
        {
            key: 'init',
            value: function init() {
                var _this = this;
                this.types.map(function (item) {
                    if (item !== 'fps') {
                        _this['init'.concat(item, 'Checker')]();
                    }
                    return item;
                });
            }
        },
        {
            key: 'initloadingChecker',
            value: function initloadingChecker() {
                var _this2 = this;
                var lastPlayPos = 0;
                var currentPlayPos = 0;
                var bufferingDetected = false;
                this.loadingChecker = setInterval(function () {
                    if (_this2.enableloadingChecker) {
                        currentPlayPos = _this2.player.video.currentTime;
                        if (!bufferingDetected && currentPlayPos === lastPlayPos && !_this2.player.video.paused) {
                            _this2.player.container.classList.add('dplayer-loading');
                            bufferingDetected = true;
                        }
                        if (bufferingDetected && currentPlayPos > lastPlayPos && !_this2.player.video.paused) {
                            _this2.player.container.classList.remove('dplayer-loading');
                            bufferingDetected = false;
                        }
                        lastPlayPos = currentPlayPos;
                    }
                }, 100);
            }
        },
        {
            key: 'initfpsChecker',
            value: function initfpsChecker() {
                var _this3 = this;
                window.requestAnimationFrame(function () {
                    if (_this3.enablefpsChecker) {
                        _this3.initfpsChecker();
                        if (!_this3.fpsStart) {
                            _this3.fpsStart = new Date();
                            _this3.fpsIndex = 0;
                        } else {
                            _this3.fpsIndex++;
                            var fpsCurrent = new Date();
                            if (fpsCurrent - _this3.fpsStart > 1000) {
                                _this3.player.infoPanel.fps(_this3.fpsIndex / (fpsCurrent - _this3.fpsStart) * 1000);
                                _this3.fpsStart = new Date();
                                _this3.fpsIndex = 0;
                            }
                        }
                    } else {
                        _this3.fpsStart = 0;
                        _this3.fpsIndex = 0;
                    }
                });
            }
        },
        {
            key: 'initinfoChecker',
            value: function initinfoChecker() {
                var _this4 = this;
                this.infoChecker = setInterval(function () {
                    if (_this4.enableinfoChecker) {
                        _this4.player.infoPanel.update();
                    }
                }, 1000);
            }
        },
        {
            key: 'enable',
            value: function enable(type) {
                this['enable'.concat(type, 'Checker')] = true;
                if (type === 'fps') {
                    this.initfpsChecker();
                }
            }
        },
        {
            key: 'disable',
            value: function disable(type) {
                this['enable'.concat(type, 'Checker')] = false;
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                var _this5 = this;
                this.types.map(function (item) {
                    _this5['enable'.concat(item, 'Checker')] = false;
                    _this5[''.concat(item, 'Checker')] && clearInterval(_this5[''.concat(item, 'Checker')]);
                    return item;
                });
            }
        }
    ]);
    return Timer;
}();
/* harmony default export */ const timer = (Timer);
;// CONCATENATED MODULE: ./src/js/bezel.js
function bezel_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function bezel_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function bezel_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        bezel_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        bezel_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}
var Bezel = function () {
    function Bezel(container) {
        var _this = this;
        bezel_classCallCheck(this, Bezel);
        this.container = container;
        this.container.addEventListener('animationend', function () {
            _this.container.classList.remove('dplayer-bezel-transition');
        });
    }
    bezel_createClass(Bezel, [{
            key: 'switch',
            value: function _switch(icon) {
                this.container.innerHTML = icon;
                this.container.classList.add('dplayer-bezel-transition');
            }
        }]);
    return Bezel;
}();
/* harmony default export */ const bezel = (Bezel);
;// CONCATENATED MODULE: ./src/js/thumbnails.js
function thumbnails_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function thumbnails_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function thumbnails_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        thumbnails_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        thumbnails_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}
var Thumbnails = function () {
    function Thumbnails(options) {
        thumbnails_classCallCheck(this, Thumbnails);
        this.container = options.container;
        this.barWidth = options.barWidth;
        this.container.style.backgroundImage = 'url(\''.concat(options.url, '\')');
        this.events = options.events;
    }
    thumbnails_createClass(Thumbnails, [
        {
            key: 'resize',
            value: function resize(width, height, barWrapWidth) {
                this.container.style.width = ''.concat(width, 'px');
                this.container.style.height = ''.concat(height, 'px');
                this.container.style.top = ''.concat(-height + 2, 'px');
                this.barWidth = barWrapWidth;
            }
        },
        {
            key: 'show',
            value: function show() {
                this.container.style.display = 'block';
                this.events && this.events.trigger('thumbnails_show');
            }
        },
        {
            key: 'move',
            value: function move(position) {
                this.container.style.backgroundPosition = '-'.concat((Math.ceil(position / this.barWidth * 100) - 1) * 160, 'px 0');
                this.container.style.left = ''.concat(Math.min(Math.max(position - this.container.offsetWidth / 2, -10), this.barWidth - 150), 'px');
            }
        },
        {
            key: 'hide',
            value: function hide() {
                this.container.style.display = 'none';
                this.events && this.events.trigger('thumbnails_hide');
            }
        }
    ]);
    return Thumbnails;
}();
/* harmony default export */ const thumbnails = (Thumbnails);
;// CONCATENATED MODULE: ./src/js/controller.js
function controller_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function controller_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function controller_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        controller_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        controller_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}



var cast;
var runOnce = true;
var isCasting = false;
var Controller = function () {
    function Controller(player) {
        controller_classCallCheck(this, Controller);
        this.player = player;
        this.autoHideTimer = 0;
        if (!js_utils.isMobile) {
            this.setAutoHideHandler = this.setAutoHide.bind(this);
            this.player.container.addEventListener('mousemove', this.setAutoHideHandler);
            this.player.container.addEventListener('click', this.setAutoHideHandler);
            this.player.on('play', this.setAutoHideHandler);
            this.player.on('pause', this.setAutoHideHandler);
        }
        this.initPlayButton();
        this.initThumbnails();
        this.initPlayedBar();
        this.initFullButton();
        this.initQualityButton();
        this.initScreenshotButton();
        if (this.player.options.subtitle) {
            if (typeof this.player.options.subtitle.url === 'string') {
                this.initSubtitleButton();
            }
        }
        this.initHighlights();
        this.initAirplayButton();
        this.initChromecastButton();
        if (!js_utils.isMobile) {
            this.initVolumeButton();
        }
    }
    controller_createClass(Controller, [
        {
            key: 'initPlayButton',
            value: function initPlayButton() {
                var _this = this;
                this.player.template.playButton.addEventListener('click', function () {
                    _this.player.toggle();
                });
                this.player.template.mobilePlayButton.addEventListener('click', function () {
                    _this.player.toggle();
                });
                if (!js_utils.isMobile) {
                    if (!this.player.options.preventClickToggle) {
                        this.player.template.videoWrap.addEventListener('click', function () {
                            _this.player.toggle();
                        });
                        this.player.template.controllerMask.addEventListener('click', function () {
                            _this.player.toggle();
                        });
                    }
                } else {
                    this.player.template.videoWrap.addEventListener('click', function () {
                        _this.toggle();
                    });
                    this.player.template.controllerMask.addEventListener('click', function () {
                        _this.toggle();
                    });
                }
            }
        },
        {
            key: 'initHighlights',
            value: function initHighlights() {
                var _this2 = this;
                this.player.on('durationchange', function () {
                    if (_this2.player.video.duration !== 1 && _this2.player.video.duration !== Infinity) {
                        if (_this2.player.options.highlight) {
                            var highlights = _this2.player.template.playedBarWrap.querySelectorAll('.dplayer-highlight');
                            [].slice.call(highlights, 0).forEach(function (item) {
                                _this2.player.template.playedBarWrap.removeChild(item);
                            });
                            for (var i = 0; i < _this2.player.options.highlight.length; i++) {
                                if (!_this2.player.options.highlight[i].text || !_this2.player.options.highlight[i].time) {
                                    continue;
                                }
                                var p = document.createElement('div');
                                p.classList.add('dplayer-highlight');
                                p.style.left = _this2.player.options.highlight[i].time / _this2.player.video.duration * 100 + '%';
                                p.innerHTML = '<span class="dplayer-highlight-text">' + _this2.player.options.highlight[i].text + '</span>';
                                _this2.player.template.playedBarWrap.insertBefore(p, _this2.player.template.playedBarTime);
                            }
                        }
                    }
                });
            }
        },
        {
            key: 'initThumbnails',
            value: function initThumbnails() {
                var _this3 = this;
                if (this.player.options.video.thumbnails) {
                    this.thumbnails = new thumbnails({
                        container: this.player.template.barPreview,
                        barWidth: this.player.template.barWrap.offsetWidth,
                        url: this.player.options.video.thumbnails,
                        events: this.player.events
                    });
                    this.player.on('loadedmetadata', function () {
                        _this3.thumbnails.resize(160, _this3.player.video.videoHeight / _this3.player.video.videoWidth * 160, _this3.player.template.barWrap.offsetWidth);
                    });
                }
            }
        },
        {
            key: 'initPlayedBar',
            value: function initPlayedBar() {
                var _this4 = this;
                var thumbMove = function thumbMove(e) {
                    var percentage = ((e.clientX || e.changedTouches[0].clientX) - js_utils.getBoundingClientRectViewLeft(_this4.player.template.playedBarWrap)) / _this4.player.template.playedBarWrap.clientWidth;
                    percentage = Math.max(percentage, 0);
                    percentage = Math.min(percentage, 1);
                    _this4.player.bar.set('played', percentage, 'width');
                    _this4.player.template.ptime.innerHTML = js_utils.secondToTime(percentage * _this4.player.video.duration);
                };
                var thumbUp = function thumbUp(e) {
                    document.removeEventListener(js_utils.nameMap.dragEnd, thumbUp);
                    document.removeEventListener(js_utils.nameMap.dragMove, thumbMove);
                    var percentage = ((e.clientX || e.changedTouches[0].clientX) - js_utils.getBoundingClientRectViewLeft(_this4.player.template.playedBarWrap)) / _this4.player.template.playedBarWrap.clientWidth;
                    percentage = Math.max(percentage, 0);
                    percentage = Math.min(percentage, 1);
                    _this4.player.bar.set('played', percentage, 'width');
                    _this4.player.seek(_this4.player.bar.get('played') * _this4.player.video.duration);
                    _this4.player.timer.enable('progress');
                };
                this.player.template.playedBarWrap.addEventListener(js_utils.nameMap.dragStart, function () {
                    _this4.player.timer.disable('progress');
                    document.addEventListener(js_utils.nameMap.dragMove, thumbMove);
                    document.addEventListener(js_utils.nameMap.dragEnd, thumbUp);
                });
                this.player.template.playedBarWrap.addEventListener(js_utils.nameMap.dragMove, function (e) {
                    if (_this4.player.video.duration) {
                        var px = _this4.player.template.playedBarWrap.getBoundingClientRect().left;
                        var tx = (e.clientX || e.changedTouches[0].clientX) - px;
                        if (tx < 0 || tx > _this4.player.template.playedBarWrap.offsetWidth) {
                            return;
                        }
                        var time = _this4.player.video.duration * (tx / _this4.player.template.playedBarWrap.offsetWidth);
                        if (js_utils.isMobile) {
                            _this4.thumbnails && _this4.thumbnails.show();
                        }
                        _this4.thumbnails && _this4.thumbnails.move(tx);
                        _this4.player.template.playedBarTime.style.left = ''.concat(tx - (time >= 3600 ? 25 : 20), 'px');
                        _this4.player.template.playedBarTime.innerText = js_utils.secondToTime(time);
                        _this4.player.template.playedBarTime.classList.remove('hidden');
                    }
                });
                this.player.template.playedBarWrap.addEventListener(js_utils.nameMap.dragEnd, function () {
                    if (js_utils.isMobile) {
                        _this4.thumbnails && _this4.thumbnails.hide();
                    }
                });
                if (!js_utils.isMobile) {
                    this.player.template.playedBarWrap.addEventListener('mouseenter', function () {
                        if (_this4.player.video.duration) {
                            _this4.thumbnails && _this4.thumbnails.show();
                            _this4.player.template.playedBarTime.classList.remove('hidden');
                        }
                    });
                    this.player.template.playedBarWrap.addEventListener('mouseleave', function () {
                        if (_this4.player.video.duration) {
                            _this4.thumbnails && _this4.thumbnails.hide();
                            _this4.player.template.playedBarTime.classList.add('hidden');
                        }
                    });
                }
            }
        },
        {
            key: 'initFullButton',
            value: function initFullButton() {
                var _this5 = this;
                this.player.template.browserFullButton.addEventListener('click', function () {
                    _this5.player.fullScreen.toggle('browser');
                });
                this.player.template.webFullButton.addEventListener('click', function () {
                    _this5.player.fullScreen.toggle('web');
                });
            }
        },
        {
            key: 'initVolumeButton',
            value: function initVolumeButton() {
                var _this6 = this;
                var vWidth = 35;
                var volumeMove = function volumeMove(event) {
                    var e = event || window.event;
                    var percentage = ((e.clientX || e.changedTouches[0].clientX) - js_utils.getBoundingClientRectViewLeft(_this6.player.template.volumeBarWrap) - 5.5) / vWidth;
                    _this6.player.volume(percentage);
                };
                var volumeUp = function volumeUp() {
                    document.removeEventListener(js_utils.nameMap.dragEnd, volumeUp);
                    document.removeEventListener(js_utils.nameMap.dragMove, volumeMove);
                    _this6.player.template.volumeButton.classList.remove('dplayer-volume-active');
                };
                this.player.template.volumeBarWrapWrap.addEventListener('click', function (event) {
                    var e = event || window.event;
                    var percentage = ((e.clientX || e.changedTouches[0].clientX) - js_utils.getBoundingClientRectViewLeft(_this6.player.template.volumeBarWrap) - 5.5) / vWidth;
                    _this6.player.volume(percentage);
                });
                this.player.template.volumeBarWrapWrap.addEventListener(js_utils.nameMap.dragStart, function () {
                    document.addEventListener(js_utils.nameMap.dragMove, volumeMove);
                    document.addEventListener(js_utils.nameMap.dragEnd, volumeUp);
                    _this6.player.template.volumeButton.classList.add('dplayer-volume-active');
                });
                this.player.template.volumeButtonIcon.addEventListener('click', function () {
                    if (_this6.player.video.muted) {
                        _this6.player.video.muted = false;
                        _this6.player.switchVolumeIcon();
                        _this6.player.bar.set('volume', _this6.player.volume(), 'width');
                    } else {
                        _this6.player.video.muted = true;
                        _this6.player.template.volumeIcon.innerHTML = icons.volumeOff;
                        _this6.player.bar.set('volume', 0, 'width');
                    }
                });
            }
        },
        {
            key: 'initQualityButton',
            value: function initQualityButton() {
                var _this7 = this;
                if (this.player.options.video.quality) {
                    this.player.template.qualityList.addEventListener('click', function (e) {
                        if (e.target.classList.contains('dplayer-quality-item')) {
                            _this7.player.switchQuality(e.target.dataset.index);
                        }
                    });
                }
            }
        },
        {
            key: 'initScreenshotButton',
            value: function initScreenshotButton() {
                var _this8 = this;
                if (this.player.options.screenshot) {
                    this.player.template.camareButton.addEventListener('click', function () {
                        var canvas = document.createElement('canvas');
                        canvas.width = _this8.player.video.videoWidth;
                        canvas.height = _this8.player.video.videoHeight;
                        canvas.getContext('2d').drawImage(_this8.player.video, 0, 0, canvas.width, canvas.height);
                        var dataURL;
                        canvas.toBlob(function (blob) {
                            dataURL = URL.createObjectURL(blob);
                            var link = document.createElement('a');
                            link.href = dataURL;
                            link.download = 'DPlayer.png';
                            link.style.display = 'none';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            URL.revokeObjectURL(dataURL);
                            _this8.player.events.trigger('screenshot', dataURL);
                        });
                    });
                }
            }
        },
        {
            key: 'initAirplayButton',
            value: function initAirplayButton() {
                if (this.player.options.airplay) {
                    if (window.WebKitPlaybackTargetAvailabilityEvent) {
                        this.player.video.addEventListener('webkitplaybacktargetavailabilitychanged', function (event) {
                            switch (event.availability) {
                            case 'available':
                                this.template.airplayButton.disable = false;
                                break;
                            default:
                                this.template.airplayButton.disable = true;
                            }
                            this.template.airplayButton.addEventListener('click', function () {
                                this.video.webkitShowPlaybackTargetPicker();
                            }.bind(this));
                        }.bind(this.player));
                    } else {
                        this.player.template.airplayButton.style.display = 'none';
                    }
                }
            }
        },
        {
            key: 'initChromecast',
            value: function initChromecast() {
                var script = window.document.createElement('script');
                script.setAttribute('type', 'text/javascript');
                script.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1');
                window.document.body.appendChild(script);
                window.__onGCastApiAvailable = function (isAvailable) {
                    if (isAvailable) {
                        cast = window.chrome.cast;
                        var sessionRequest = new cast.SessionRequest(cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
                        var apiConfig = new cast.ApiConfig(sessionRequest, function () {
                        }, function (status) {
                            if (status === cast.ReceiverAvailability.AVAILABLE) {
                                console.log('chromecast: ', status);
                            }
                        });
                        cast.initialize(apiConfig, function () {
                        });
                    }
                };
            }
        },
        {
            key: 'initChromecastButton',
            value: function initChromecastButton() {
                var _this9 = this;
                if (this.player.options.chromecast) {
                    if (runOnce) {
                        runOnce = false;
                        this.initChromecast();
                    }
                    var discoverDevices = function discoverDevices() {
                        cast.requestSession(function (s) {
                            _this9.session = s;
                            launchMedia(_this9.player.options.video.url);
                        }, function (err) {
                            if (err.code === 'cancel') {
                                _this9.session = undefined;
                            } else {
                                console.error('Error selecting a cast device', err);
                            }
                        });
                    };
                    var launchMedia = function launchMedia(media) {
                        var mediaInfo = new cast.media.MediaInfo(media);
                        var request = new cast.media.LoadRequest(mediaInfo);
                        if (!_this9.session) {
                            window.open(media);
                            return false;
                        }
                        _this9.session.loadMedia(request, onMediaDiscovered.bind(_this9, 'loadMedia'), onMediaError).play();
                        return true;
                    };
                    var onMediaDiscovered = function onMediaDiscovered(how, media) {
                        _this9.currentMedia = media;
                    };
                    var onMediaError = function onMediaError(err) {
                        console.error('Error launching media', err);
                    };
                    this.player.template.chromecastButton.addEventListener('click', function () {
                        if (isCasting) {
                            isCasting = false;
                            _this9.currentMedia.stop();
                            _this9.session.stop();
                            _this9.initChromecast();
                        } else {
                            isCasting = true;
                            discoverDevices();
                        }
                    });
                }
            }
        },
        {
            key: 'initSubtitleButton',
            value: function initSubtitleButton() {
                var _this10 = this;
                this.player.events.on('subtitle_show', function () {
                    _this10.player.template.subtitleButton.dataset.balloon = _this10.player.tran('hide-subs');
                    _this10.player.template.subtitleButtonInner.style.opacity = '';
                    _this10.player.user.set('subtitle', 1);
                });
                this.player.events.on('subtitle_hide', function () {
                    _this10.player.template.subtitleButton.dataset.balloon = _this10.player.tran('show-subs');
                    _this10.player.template.subtitleButtonInner.style.opacity = '0.4';
                    _this10.player.user.set('subtitle', 0);
                });
                this.player.template.subtitleButton.addEventListener('click', function () {
                    _this10.player.subtitle.toggle();
                });
            }
        },
        {
            key: 'setAutoHide',
            value: function setAutoHide() {
                var _this11 = this;
                this.show();
                clearTimeout(this.autoHideTimer);
                this.autoHideTimer = setTimeout(function () {
                    if (_this11.player.video.played.length && !_this11.player.paused && !_this11.disableAutoHide) {
                        _this11.hide();
                    }
                }, 3000);
            }
        },
        {
            key: 'show',
            value: function show() {
                this.player.container.classList.remove('dplayer-hide-controller');
            }
        },
        {
            key: 'hide',
            value: function hide() {
                this.player.container.classList.add('dplayer-hide-controller');
                this.player.setting.hide();
                this.player.comment && this.player.comment.hide();
            }
        },
        {
            key: 'isShow',
            value: function isShow() {
                return !this.player.container.classList.contains('dplayer-hide-controller');
            }
        },
        {
            key: 'toggle',
            value: function toggle() {
                if (this.isShow()) {
                    this.hide();
                } else {
                    this.show();
                }
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                if (!js_utils.isMobile) {
                    this.player.container.removeEventListener('mousemove', this.setAutoHideHandler);
                    this.player.container.removeEventListener('click', this.setAutoHideHandler);
                }
                clearTimeout(this.autoHideTimer);
            }
        }
    ]);
    return Controller;
}();
/* harmony default export */ const controller = (Controller);
;// CONCATENATED MODULE: ./src/js/setting.js
function setting_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function setting_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function setting_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        setting_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        setting_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}

var Setting = function () {
    function Setting(player) {
        var _this = this;
        setting_classCallCheck(this, Setting);
        this.player = player;
        this.player.template.mask.addEventListener('click', function () {
            _this.hide();
        });
        this.player.template.settingButton.addEventListener('click', function () {
            _this.show();
        });
        this.loop = this.player.options.loop;
        this.player.template.loopToggle.checked = this.loop;
        this.player.template.loop.addEventListener('click', function () {
            _this.player.template.loopToggle.checked = !_this.player.template.loopToggle.checked;
            if (_this.player.template.loopToggle.checked) {
                _this.loop = true;
            } else {
                _this.loop = false;
            }
            _this.hide();
        });
        this.showDanmaku = this.player.user.get('danmaku');
        if (!this.showDanmaku) {
            this.player.danmaku && this.player.danmaku.hide();
        }
        this.player.template.showDanmakuToggle.checked = this.showDanmaku;
        this.player.template.showDanmaku.addEventListener('click', function () {
            _this.player.template.showDanmakuToggle.checked = !_this.player.template.showDanmakuToggle.checked;
            if (_this.player.template.showDanmakuToggle.checked) {
                _this.showDanmaku = true;
                _this.player.danmaku.show();
            } else {
                _this.showDanmaku = false;
                _this.player.danmaku.hide();
            }
            _this.player.user.set('danmaku', _this.showDanmaku ? 1 : 0);
            _this.hide();
        });
        this.unlimitDanmaku = this.player.user.get('unlimited');
        this.player.template.unlimitDanmakuToggle.checked = this.unlimitDanmaku;
        this.player.template.unlimitDanmaku.addEventListener('click', function () {
            _this.player.template.unlimitDanmakuToggle.checked = !_this.player.template.unlimitDanmakuToggle.checked;
            if (_this.player.template.unlimitDanmakuToggle.checked) {
                _this.unlimitDanmaku = true;
                _this.player.danmaku.unlimit(true);
            } else {
                _this.unlimitDanmaku = false;
                _this.player.danmaku.unlimit(false);
            }
            _this.player.user.set('unlimited', _this.unlimitDanmaku ? 1 : 0);
            _this.hide();
        });
        this.player.template.speed.addEventListener('click', function () {
            _this.player.template.settingBox.classList.add('dplayer-setting-box-narrow');
            _this.player.template.settingBox.classList.add('dplayer-setting-box-speed');
        });
        var _loop = function _loop(i) {
            _this.player.template.speedItem[i].addEventListener('click', function () {
                _this.player.speed(_this.player.template.speedItem[i].dataset.speed);
                _this.hide();
            });
        };
        for (var i = 0; i < this.player.template.speedItem.length; i++) {
            _loop(i);
        }
        if (this.player.danmaku) {
            var dWidth = 130;
            this.player.on('danmaku_opacity', function (percentage) {
                _this.player.bar.set('danmaku', percentage, 'width');
                _this.player.user.set('opacity', percentage);
            });
            this.player.danmaku.opacity(this.player.user.get('opacity'));
            var danmakuMove = function danmakuMove(event) {
                var e = event || window.event;
                var percentage = ((e.clientX || e.changedTouches[0].clientX) - js_utils.getBoundingClientRectViewLeft(_this.player.template.danmakuOpacityBarWrap)) / dWidth;
                percentage = Math.max(percentage, 0);
                percentage = Math.min(percentage, 1);
                _this.player.danmaku.opacity(percentage);
            };
            var danmakuUp = function danmakuUp() {
                document.removeEventListener(js_utils.nameMap.dragEnd, danmakuUp);
                document.removeEventListener(js_utils.nameMap.dragMove, danmakuMove);
                _this.player.template.danmakuOpacityBox.classList.remove('dplayer-setting-danmaku-active');
            };
            this.player.template.danmakuOpacityBarWrapWrap.addEventListener('click', function (event) {
                var e = event || window.event;
                var percentage = ((e.clientX || e.changedTouches[0].clientX) - js_utils.getBoundingClientRectViewLeft(_this.player.template.danmakuOpacityBarWrap)) / dWidth;
                percentage = Math.max(percentage, 0);
                percentage = Math.min(percentage, 1);
                _this.player.danmaku.opacity(percentage);
            });
            this.player.template.danmakuOpacityBarWrapWrap.addEventListener(js_utils.nameMap.dragStart, function () {
                document.addEventListener(js_utils.nameMap.dragMove, danmakuMove);
                document.addEventListener(js_utils.nameMap.dragEnd, danmakuUp);
                _this.player.template.danmakuOpacityBox.classList.add('dplayer-setting-danmaku-active');
            });
        }
    }
    setting_createClass(Setting, [
        {
            key: 'hide',
            value: function hide() {
                var _this2 = this;
                this.player.template.settingBox.classList.remove('dplayer-setting-box-open');
                this.player.template.mask.classList.remove('dplayer-mask-show');
                setTimeout(function () {
                    _this2.player.template.settingBox.classList.remove('dplayer-setting-box-narrow');
                    _this2.player.template.settingBox.classList.remove('dplayer-setting-box-speed');
                }, 300);
                this.player.controller.disableAutoHide = false;
            }
        },
        {
            key: 'show',
            value: function show() {
                this.player.template.settingBox.classList.add('dplayer-setting-box-open');
                this.player.template.mask.classList.add('dplayer-mask-show');
                this.player.controller.disableAutoHide = true;
            }
        }
    ]);
    return Setting;
}();
/* harmony default export */ const js_setting = (Setting);
;// CONCATENATED MODULE: ./src/js/comment.js
function comment_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function comment_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function comment_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        comment_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        comment_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}

var Comment = function () {
    function Comment(player) {
        var _this = this;
        comment_classCallCheck(this, Comment);
        this.player = player;
        this.player.template.mask.addEventListener('click', function () {
            _this.hide();
        });
        this.player.template.commentButton.addEventListener('click', function () {
            _this.show();
        });
        this.player.template.commentSettingButton.addEventListener('click', function () {
            _this.toggleSetting();
        });
        this.player.template.commentColorSettingBox.addEventListener('click', function () {
            var sele = _this.player.template.commentColorSettingBox.querySelector('input:checked+span');
            if (sele) {
                var color = _this.player.template.commentColorSettingBox.querySelector('input:checked').value;
                _this.player.template.commentSettingFill.style.fill = color;
                _this.player.template.commentInput.style.color = color;
                _this.player.template.commentSendFill.style.fill = color;
            }
        });
        this.player.template.commentInput.addEventListener('click', function () {
            _this.hideSetting();
        });
        this.player.template.commentInput.addEventListener('keydown', function (e) {
            var event = e || window.event;
            if (event.keyCode === 13) {
                _this.send();
            }
        });
        this.player.template.commentSendButton.addEventListener('click', function () {
            _this.send();
        });
    }
    comment_createClass(Comment, [
        {
            key: 'show',
            value: function show() {
                this.player.controller.disableAutoHide = true;
                this.player.template.controller.classList.add('dplayer-controller-comment');
                this.player.template.mask.classList.add('dplayer-mask-show');
                this.player.container.classList.add('dplayer-show-controller');
                this.player.template.commentInput.focus();
            }
        },
        {
            key: 'hide',
            value: function hide() {
                this.player.template.controller.classList.remove('dplayer-controller-comment');
                this.player.template.mask.classList.remove('dplayer-mask-show');
                this.player.container.classList.remove('dplayer-show-controller');
                this.player.controller.disableAutoHide = false;
                this.hideSetting();
            }
        },
        {
            key: 'showSetting',
            value: function showSetting() {
                this.player.template.commentSettingBox.classList.add('dplayer-comment-setting-open');
            }
        },
        {
            key: 'hideSetting',
            value: function hideSetting() {
                this.player.template.commentSettingBox.classList.remove('dplayer-comment-setting-open');
            }
        },
        {
            key: 'toggleSetting',
            value: function toggleSetting() {
                if (this.player.template.commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
                    this.hideSetting();
                } else {
                    this.showSetting();
                }
            }
        },
        {
            key: 'send',
            value: function send() {
                var _this2 = this;
                this.player.template.commentInput.blur();
                if (!this.player.template.commentInput.value.replace(/^\s+|\s+$/g, '')) {
                    this.player.notice(this.player.tran('please-input-danmaku'));
                    return;
                }
                this.player.danmaku.send({
                    text: this.player.template.commentInput.value,
                    color: js_utils.color2Number(this.player.container.querySelector('.dplayer-comment-setting-color input:checked').value),
                    type: parseInt(this.player.container.querySelector('.dplayer-comment-setting-type input:checked').value)
                }, function () {
                    _this2.player.template.commentInput.value = '';
                    _this2.hide();
                });
            }
        }
    ]);
    return Comment;
}();
/* harmony default export */ const js_comment = (Comment);
;// CONCATENATED MODULE: ./src/js/hotkey.js
function hotkey_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function hotkey_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function hotkey_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        hotkey_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        hotkey_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}
var HotKey = function () {
    function HotKey(player) {
        hotkey_classCallCheck(this, HotKey);
        this.player = player;
        this.doHotKeyHandler = this.doHotKey.bind(this);
        this.cancelFullScreenHandler = this.cancelFullScreen.bind(this);
        if (this.player.options.hotkey) {
            document.addEventListener('keydown', this.doHotKeyHandler);
        }
        document.addEventListener('keydown', this.cancelFullScreenHandler);
    }
    hotkey_createClass(HotKey, [
        {
            key: 'doHotKey',
            value: function doHotKey(e) {
                if (this.player.focus) {
                    var tag = document.activeElement.tagName.toUpperCase();
                    var editable = document.activeElement.getAttribute('contenteditable');
                    if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                        var event = e || window.event;
                        var percentage;
                        switch (event.keyCode) {
                        case 32:
                            event.preventDefault();
                            this.player.toggle();
                            break;
                        case 37:
                            event.preventDefault();
                            if (this.player.options.live) {
                                break;
                            }
                            this.player.seek(this.player.video.currentTime - 5);
                            this.player.controller.setAutoHide();
                            break;
                        case 39:
                            event.preventDefault();
                            if (this.player.options.live) {
                                break;
                            }
                            this.player.seek(this.player.video.currentTime + 5);
                            this.player.controller.setAutoHide();
                            break;
                        case 38:
                            event.preventDefault();
                            percentage = this.player.volume() + 0.1;
                            this.player.volume(percentage);
                            break;
                        case 40:
                            event.preventDefault();
                            percentage = this.player.volume() - 0.1;
                            this.player.volume(percentage);
                            break;
                        }
                    }
                }
            }
        },
        {
            key: 'cancelFullScreen',
            value: function cancelFullScreen(e) {
                var event = e || window.event;
                switch (event.keyCode) {
                case 27:
                    if (this.player.fullScreen.isFullScreen('web')) {
                        this.player.fullScreen.cancel('web');
                    }
                    break;
                }
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                if (this.player.options.hotkey) {
                    document.removeEventListener('keydown', this.doHotKeyHandler);
                }
                document.removeEventListener('keydown', this.cancelFullScreenHandler);
            }
        }
    ]);
    return HotKey;
}();
/* harmony default export */ const hotkey = (HotKey);
;// CONCATENATED MODULE: ./src/js/contextmenu.js
function contextmenu_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function contextmenu_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function contextmenu_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        contextmenu_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        contextmenu_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}
var ContextMenu = function () {
    function ContextMenu(player) {
        var _this = this;
        contextmenu_classCallCheck(this, ContextMenu);
        this.player = player;
        this.shown = false;
        Array.prototype.slice.call(this.player.template.menuItem).forEach(function (item, index) {
            if (_this.player.options.contextmenu[index].click) {
                item.addEventListener('click', function () {
                    _this.player.options.contextmenu[index].click(_this.player);
                    _this.hide();
                });
            }
        });
        this.contextmenuHandler = function (e) {
            if (_this.shown) {
                _this.hide();
                return;
            }
            var event = e || window.event;
            event.preventDefault();
            var clientRect = _this.player.container.getBoundingClientRect();
            _this.show(event.clientX - clientRect.left, event.clientY - clientRect.top);
            _this.player.template.mask.addEventListener('click', function () {
                _this.hide();
            });
        };
        this.player.container.addEventListener('contextmenu', this.contextmenuHandler);
    }
    contextmenu_createClass(ContextMenu, [
        {
            key: 'show',
            value: function show(x, y) {
                this.player.template.menu.classList.add('dplayer-menu-show');
                var clientRect = this.player.container.getBoundingClientRect();
                if (x + this.player.template.menu.offsetWidth >= clientRect.width) {
                    this.player.template.menu.style.right = clientRect.width - x + 'px';
                    this.player.template.menu.style.left = 'initial';
                } else {
                    this.player.template.menu.style.left = x + 'px';
                    this.player.template.menu.style.right = 'initial';
                }
                if (y + this.player.template.menu.offsetHeight >= clientRect.height) {
                    this.player.template.menu.style.bottom = clientRect.height - y + 'px';
                    this.player.template.menu.style.top = 'initial';
                } else {
                    this.player.template.menu.style.top = y + 'px';
                    this.player.template.menu.style.bottom = 'initial';
                }
                this.player.template.mask.classList.add('dplayer-mask-show');
                this.shown = true;
                this.player.events.trigger('contextmenu_show');
            }
        },
        {
            key: 'hide',
            value: function hide() {
                this.player.template.mask.classList.remove('dplayer-mask-show');
                this.player.template.menu.classList.remove('dplayer-menu-show');
                this.shown = false;
                this.player.events.trigger('contextmenu_hide');
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                this.player.container.removeEventListener('contextmenu', this.contextmenuHandler);
            }
        }
    ]);
    return ContextMenu;
}();
/* harmony default export */ const contextmenu = (ContextMenu);
;// CONCATENATED MODULE: ./src/js/info-panel.js
function info_panel_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function info_panel_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function info_panel_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        info_panel_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        info_panel_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}
var InfoPanel = function () {
    function InfoPanel(player) {
        var _this = this;
        info_panel_classCallCheck(this, InfoPanel);
        this.container = player.template.infoPanel;
        this.template = player.template;
        this.video = player.video;
        this.player = player;
        this.template.infoPanelClose.addEventListener('click', function () {
            _this.hide();
        });
    }
    info_panel_createClass(InfoPanel, [
        {
            key: 'show',
            value: function show() {
                this.beginTime = Date.now();
                this.update();
                this.player.timer.enable('info');
                this.player.timer.enable('fps');
                this.container.classList.remove('dplayer-info-panel-hide');
            }
        },
        {
            key: 'hide',
            value: function hide() {
                this.player.timer.disable('info');
                this.player.timer.disable('fps');
                this.container.classList.add('dplayer-info-panel-hide');
            }
        },
        {
            key: 'triggle',
            value: function triggle() {
                if (this.container.classList.contains('dplayer-info-panel-hide')) {
                    this.show();
                } else {
                    this.hide();
                }
            }
        },
        {
            key: 'update',
            value: function update() {
                this.template.infoVersion.innerHTML = 'v'.concat("1.27.0", ' ').concat("b7a040c");
                this.template.infoType.innerHTML = this.player.type;
                this.template.infoUrl.innerHTML = this.player.options.video.url;
                this.template.infoResolution.innerHTML = ''.concat(this.player.video.videoWidth, ' x ').concat(this.player.video.videoHeight);
                this.template.infoDuration.innerHTML = this.player.video.duration;
                if (this.player.options.danmaku) {
                    this.template.infoDanmakuId.innerHTML = this.player.options.danmaku.id;
                    this.template.infoDanmakuApi.innerHTML = this.player.options.danmaku.api;
                    this.template.infoDanmakuAmount.innerHTML = this.player.danmaku.dan.length;
                }
            }
        },
        {
            key: 'fps',
            value: function fps(value) {
                this.template.infoFPS.innerHTML = ''.concat(value.toFixed(1));
            }
        }
    ]);
    return InfoPanel;
}();
/* harmony default export */ const info_panel = (InfoPanel);
// EXTERNAL MODULE: ./src/template/video.art
var video = __webpack_require__(6953);
var video_default = /*#__PURE__*/__webpack_require__.n(video);
;// CONCATENATED MODULE: ./src/js/player.js
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function player_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function player_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function player_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        player_defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        player_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', { writable: false });
    return Constructor;
}






















var index = 0;
var instances = [];
var DPlayer = function () {
    function DPlayer(options) {
        var _this = this;
        player_classCallCheck(this, DPlayer);
        this.options = js_options(_objectSpread({ preload: options.video.type === 'webtorrent' ? 'none' : 'metadata' }, options));
        if (this.options.video.quality) {
            this.qualityIndex = this.options.video.defaultQuality;
            this.quality = this.options.video.quality[this.options.video.defaultQuality];
        }
        this.tran = new i18n(this.options.lang).tran;
        this.events = new events();
        this.user = new user(this);
        this.container = this.options.container;
        this.container.classList.add('dplayer');
        if (!this.options.danmaku) {
            this.container.classList.add('dplayer-no-danmaku');
        }
        if (this.options.live) {
            this.container.classList.add('dplayer-live');
        } else {
            this.container.classList.remove('dplayer-live');
        }
        if (js_utils.isMobile) {
            this.container.classList.add('dplayer-mobile');
        }
        this.arrow = this.container.offsetWidth <= 500;
        if (this.arrow) {
            this.container.classList.add('dplayer-arrow');
        }
        if (this.options.subtitle) {
            if (Array.isArray(this.options.subtitle.url)) {
                var offSubtitle = {
                    subtitle: '',
                    lang: 'off'
                };
                this.options.subtitle.url.push(offSubtitle);
                if (this.options.subtitle.defaultSubtitle) {
                    if (typeof this.options.subtitle.defaultSubtitle === 'string') {
                        this.options.subtitle.index = this.options.subtitle.url.findIndex(function (sub) {
                            return sub.lang === _this.options.subtitle.defaultSubtitle ? true : sub.name === _this.options.subtitle.defaultSubtitle ? true : false;
                        });
                    } else if (typeof this.options.subtitle.defaultSubtitle === 'number') {
                        this.options.subtitle.index = this.options.subtitle.defaultSubtitle;
                    }
                }
                if (this.options.subtitle.index === -1 || !this.options.subtitle.index || this.options.subtitle.index > this.options.subtitle.url.length - 1) {
                    this.options.subtitle.index = this.options.subtitle.url.findIndex(function (sub) {
                        return sub.lang === _this.options.lang;
                    });
                }
                if (this.options.subtitle.index === -1) {
                    this.options.subtitle.index = this.options.subtitle.url.length - 1;
                }
            }
        }
        this.template = new template({
            container: this.container,
            options: this.options,
            index: index,
            tran: this.tran
        });
        this.video = this.template.video;
        this.bar = new bar(this.template);
        this.bezel = new bezel(this.template.bezel);
        this.fullScreen = new fullscreen(this);
        this.controller = new controller(this);
        if (this.options.danmaku) {
            this.danmaku = new danmaku({
                player: this,
                container: this.template.danmaku,
                opacity: this.user.get('opacity'),
                callback: function callback() {
                    setTimeout(function () {
                        _this.template.danmakuLoading.style.display = 'none';
                        if (_this.options.autoplay) {
                            _this.play();
                        }
                    }, 0);
                },
                error: function error(msg) {
                    _this.notice(msg);
                },
                apiBackend: this.options.apiBackend,
                borderColor: this.options.theme,
                height: this.arrow ? 24 : 30,
                time: function time() {
                    return _this.video.currentTime;
                },
                unlimited: this.user.get('unlimited'),
                api: {
                    id: this.options.danmaku.id,
                    address: this.options.danmaku.api,
                    token: this.options.danmaku.token,
                    maximum: this.options.danmaku.maximum,
                    addition: this.options.danmaku.addition,
                    user: this.options.danmaku.user,
                    speedRate: this.options.danmaku.speedRate
                },
                events: this.events,
                tran: function tran(msg) {
                    return _this.tran(msg);
                }
            });
            this.comment = new js_comment(this);
        }
        this.setting = new js_setting(this);
        this.plugins = {};
        this.docClickFun = function () {
            _this.focus = false;
        };
        this.containerClickFun = function () {
            _this.focus = true;
        };
        document.addEventListener('click', this.docClickFun, true);
        this.container.addEventListener('click', this.containerClickFun, true);
        this.paused = true;
        this.timer = new timer(this);
        this.hotkey = new hotkey(this);
        this.contextmenu = new contextmenu(this);
        this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type);
        this.infoPanel = new info_panel(this);
        if (!this.danmaku && this.options.autoplay) {
            this.play();
        }
        index++;
        instances.push(this);
    }
    player_createClass(DPlayer, [
        {
            key: 'seek',
            value: function seek(time) {
                time = Math.max(time, 0);
                if (this.video.duration) {
                    time = Math.min(time, this.video.duration);
                }
                if (this.video.currentTime < time) {
                    this.notice(''.concat(this.tran('ff').replace('%s', (time - this.video.currentTime).toFixed(0))));
                } else if (this.video.currentTime > time) {
                    this.notice(''.concat(this.tran('rew').replace('%s', (this.video.currentTime - time).toFixed(0))));
                }
                this.video.currentTime = time;
                if (this.danmaku) {
                    this.danmaku.seek();
                }
                this.bar.set('played', time / this.video.duration, 'width');
                this.template.ptime.innerHTML = js_utils.secondToTime(time);
            }
        },
        {
            key: 'play',
            value: function play(fromNative) {
                var _this2 = this;
                this.paused = false;
                if (this.video.paused && !js_utils.isMobile) {
                    this.bezel['switch'](icons.play);
                }
                this.template.playButton.innerHTML = icons.pause;
                this.template.mobilePlayButton.innerHTML = icons.pause;
                if (!fromNative) {
                    var playedPromise = src.resolve(this.video.play());
                    playedPromise['catch'](function () {
                        _this2.pause();
                    }).then(function () {
                    });
                }
                this.timer.enable('loading');
                this.container.classList.remove('dplayer-paused');
                this.container.classList.add('dplayer-playing');
                if (this.danmaku) {
                    this.danmaku.play();
                }
                if (this.options.mutex) {
                    for (var i = 0; i < instances.length; i++) {
                        if (this !== instances[i]) {
                            instances[i].pause();
                        }
                    }
                }
            }
        },
        {
            key: 'pause',
            value: function pause(fromNative) {
                this.paused = true;
                this.container.classList.remove('dplayer-loading');
                if (!this.video.paused && !js_utils.isMobile) {
                    this.bezel['switch'](icons.pause);
                }
                this.template.playButton.innerHTML = icons.play;
                this.template.mobilePlayButton.innerHTML = icons.play;
                if (!fromNative) {
                    this.video.pause();
                }
                this.timer.disable('loading');
                this.container.classList.remove('dplayer-playing');
                this.container.classList.add('dplayer-paused');
                if (this.danmaku) {
                    this.danmaku.pause();
                }
            }
        },
        {
            key: 'switchVolumeIcon',
            value: function switchVolumeIcon() {
                if (this.volume() >= 0.95) {
                    this.template.volumeIcon.innerHTML = icons.volumeUp;
                } else if (this.volume() > 0) {
                    this.template.volumeIcon.innerHTML = icons.volumeDown;
                } else {
                    this.template.volumeIcon.innerHTML = icons.volumeOff;
                }
            }
        },
        {
            key: 'volume',
            value: function volume(percentage, nostorage, nonotice) {
                percentage = parseFloat(percentage);
                if (!isNaN(percentage)) {
                    percentage = Math.max(percentage, 0);
                    percentage = Math.min(percentage, 1);
                    this.bar.set('volume', percentage, 'width');
                    var formatPercentage = ''.concat((percentage * 100).toFixed(0), '%');
                    this.template.volumeBarWrapWrap.dataset.balloon = formatPercentage;
                    if (!nostorage) {
                        this.user.set('volume', percentage);
                    }
                    if (!nonotice) {
                        this.notice(''.concat(this.tran('volume'), ' ').concat((percentage * 100).toFixed(0), '%'));
                    }
                    this.video.volume = percentage;
                    if (this.video.muted) {
                        this.video.muted = false;
                    }
                    this.switchVolumeIcon();
                }
                return this.video.volume;
            }
        },
        {
            key: 'toggle',
            value: function toggle() {
                if (this.video.paused) {
                    this.play();
                } else {
                    this.pause();
                }
            }
        },
        {
            key: 'on',
            value: function on(name, callback) {
                this.events.on(name, callback);
            }
        },
        {
            key: 'switchVideo',
            value: function switchVideo(video, danmakuAPI) {
                this.pause();
                this.video.poster = video.pic ? video.pic : '';
                this.video.src = video.url;
                this.initMSE(this.video, video.type || 'auto');
                if (danmakuAPI) {
                    this.template.danmakuLoading.style.display = 'block';
                    this.bar.set('played', 0, 'width');
                    this.bar.set('loaded', 0, 'width');
                    this.template.ptime.innerHTML = '00:00';
                    this.template.danmaku.innerHTML = '';
                    if (this.danmaku) {
                        this.danmaku.reload({
                            id: danmakuAPI.id,
                            address: danmakuAPI.api,
                            token: danmakuAPI.token,
                            maximum: danmakuAPI.maximum,
                            addition: danmakuAPI.addition,
                            user: danmakuAPI.user
                        });
                    }
                }
            }
        },
        {
            key: 'initMSE',
            value: function initMSE(video, type) {
                var _this3 = this;
                this.type = type;
                if (this.options.video.customType && this.options.video.customType[type]) {
                    if (Object.prototype.toString.call(this.options.video.customType[type]) === '[object Function]') {
                        this.options.video.customType[type](this.video, this);
                    } else {
                        console.error('Illegal customType: '.concat(type));
                    }
                } else {
                    if (this.type === 'auto') {
                        if (/m3u8(#|\?|$)/i.exec(video.src)) {
                            this.type = 'hls';
                        } else if (/.flv(#|\?|$)/i.exec(video.src)) {
                            this.type = 'flv';
                        } else if (/.mpd(#|\?|$)/i.exec(video.src)) {
                            this.type = 'dash';
                        } else {
                            this.type = 'normal';
                        }
                    }
                    if (this.type === 'hls' && (video.canPlayType('application/x-mpegURL') || video.canPlayType('application/vnd.apple.mpegURL'))) {
                        this.type = 'normal';
                    }
                    switch (this.type) {
                    case 'hls':
                        if (window.Hls) {
                            if (window.Hls.isSupported()) {
                                var options = this.options.pluginOptions.hls;
                                var hls = new window.Hls(options);
                                this.plugins.hls = hls;
                                hls.loadSource(video.src);
                                hls.attachMedia(video);
                                this.events.on('destroy', function () {
                                    hls.destroy();
                                    delete _this3.plugins.hls;
                                });
                            } else {
                                this.notice('Error: Hls is not supported.');
                            }
                        } else {
                            this.notice('Error: Can\'t find Hls.');
                        }
                        break;
                    case 'flv':
                        if (window.flvjs) {
                            if (window.flvjs.isSupported()) {
                                var flvPlayer = window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource || {}, {
                                    type: 'flv',
                                    url: video.src
                                }), this.options.pluginOptions.flv.config);
                                this.plugins.flvjs = flvPlayer;
                                flvPlayer.attachMediaElement(video);
                                flvPlayer.load();
                                this.events.on('destroy', function () {
                                    flvPlayer.unload();
                                    flvPlayer.detachMediaElement();
                                    flvPlayer.destroy();
                                    delete _this3.plugins.flvjs;
                                });
                            } else {
                                this.notice('Error: flvjs is not supported.');
                            }
                        } else {
                            this.notice('Error: Can\'t find flvjs.');
                        }
                        break;
                    case 'dash':
                        if (window.dashjs) {
                            var dashjsPlayer = window.dashjs.MediaPlayer().create().initialize(video, video.src, false);
                            var _options = this.options.pluginOptions.dash;
                            dashjsPlayer.updateSettings(_options);
                            this.plugins.dash = dashjsPlayer;
                            this.events.on('destroy', function () {
                                window.dashjs.MediaPlayer().reset();
                                delete _this3.plugins.dash;
                            });
                        } else {
                            this.notice('Error: Can\'t find dashjs.');
                        }
                        break;
                    case 'webtorrent':
                        if (window.WebTorrent) {
                            if (window.WebTorrent.WEBRTC_SUPPORT) {
                                this.container.classList.add('dplayer-loading');
                                var _options2 = this.options.pluginOptions.webtorrent;
                                var client = new window.WebTorrent(_options2);
                                this.plugins.webtorrent = client;
                                var torrentId = video.src;
                                video.src = '';
                                video.preload = 'metadata';
                                video.addEventListener('durationchange', function () {
                                    return _this3.container.classList.remove('dplayer-loading');
                                }, { once: true });
                                client.add(torrentId, function (torrent) {
                                    var file = torrent.files.find(function (file) {
                                        return file.name.endsWith('.mp4');
                                    });
                                    file.renderTo(_this3.video, {
                                        autoplay: _this3.options.autoplay,
                                        controls: false
                                    });
                                });
                                this.events.on('destroy', function () {
                                    client.remove(torrentId);
                                    client.destroy();
                                    delete _this3.plugins.webtorrent;
                                });
                            } else {
                                this.notice('Error: Webtorrent is not supported.');
                            }
                        } else {
                            this.notice('Error: Can\'t find Webtorrent.');
                        }
                        break;
                    }
                }
            }
        },
        {
            key: 'initVideo',
            value: function initVideo(video, type) {
                var _this4 = this;
                this.initMSE(video, type);
                this.on('durationchange', function () {
                    if (video.duration !== 1 && video.duration !== Infinity) {
                        _this4.template.dtime.innerHTML = js_utils.secondToTime(video.duration);
                    }
                });
                this.on('progress', function () {
                    var percentage = video.buffered.length ? video.buffered.end(video.buffered.length - 1) / video.duration : 0;
                    _this4.bar.set('loaded', percentage, 'width');
                });
                this.on('error', function () {
                    if (!_this4.video.error) {
                        return;
                    }
                    _this4.tran && _this4.notice && _this4.type !== 'webtorrent' && _this4.notice(_this4.tran('video-failed'), -1);
                });
                this.on('ended', function () {
                    _this4.bar.set('played', 1, 'width');
                    if (!_this4.setting.loop) {
                        _this4.pause();
                    } else {
                        _this4.seek(0);
                        _this4.play();
                    }
                    if (_this4.danmaku) {
                        _this4.danmaku.danIndex = 0;
                    }
                });
                this.on('play', function () {
                    if (_this4.paused) {
                        _this4.play(true);
                    }
                });
                this.on('pause', function () {
                    if (!_this4.paused) {
                        _this4.pause(true);
                    }
                });
                this.on('timeupdate', function () {
                    _this4.bar.set('played', _this4.video.currentTime / _this4.video.duration, 'width');
                    var currentTime = js_utils.secondToTime(_this4.video.currentTime);
                    if (_this4.template.ptime.innerHTML !== currentTime) {
                        _this4.template.ptime.innerHTML = currentTime;
                    }
                });
                var _loop = function _loop(i) {
                    video.addEventListener(_this4.events.videoEvents[i], function () {
                        _this4.events.trigger(_this4.events.videoEvents[i]);
                    });
                };
                for (var i = 0; i < this.events.videoEvents.length; i++) {
                    _loop(i);
                }
                this.volume(this.user.get('volume'), true, true);
                if (this.options.subtitle) {
                    this.subtitle = new js_subtitle(this.template.subtitle, this.video, this.options.subtitle, this.events);
                    if (Array.isArray(this.options.subtitle.url)) {
                        this.subtitles = new subtitles(this);
                    }
                    if (!this.user.get('subtitle')) {
                        this.subtitle.hide();
                    }
                }
            }
        },
        {
            key: 'switchQuality',
            value: function switchQuality(index) {
                var _this5 = this;
                index = typeof index === 'string' ? parseInt(index) : index;
                if (this.qualityIndex === index || this.switchingQuality) {
                    return;
                } else {
                    this.prevIndex = this.qualityIndex;
                    this.qualityIndex = index;
                }
                this.switchingQuality = true;
                this.quality = this.options.video.quality[index];
                this.template.qualityButton.innerHTML = this.quality.name;
                var paused = this.video.paused;
                this.video.pause();
                var videoHTML = video_default()({
                    current: false,
                    pic: null,
                    screenshot: this.options.screenshot,
                    preload: 'auto',
                    url: this.quality.url,
                    subtitle: this.options.subtitle
                });
                var videoEle = new DOMParser().parseFromString(videoHTML, 'text/html').body.firstChild;
                this.template.videoWrap.insertBefore(videoEle, this.template.videoWrap.getElementsByTagName('div')[0]);
                this.prevVideo = this.video;
                this.video = videoEle;
                this.initVideo(this.video, this.quality.type || this.options.video.type);
                this.seek(this.prevVideo.currentTime);
                this.notice(''.concat(this.tran('switching-quality').replace('%q', this.quality.name)), -1);
                this.events.trigger('quality_start', this.quality);
                this.on('canplay', function () {
                    if (_this5.prevVideo) {
                        if (_this5.video.currentTime !== _this5.prevVideo.currentTime) {
                            _this5.seek(_this5.prevVideo.currentTime);
                            return;
                        }
                        _this5.template.videoWrap.removeChild(_this5.prevVideo);
                        _this5.video.classList.add('dplayer-video-current');
                        if (!paused) {
                            _this5.video.play();
                        }
                        _this5.prevVideo = null;
                        _this5.notice(''.concat(_this5.tran('switched-quality').replace('%q', _this5.quality.name)));
                        _this5.switchingQuality = false;
                        _this5.events.trigger('quality_end');
                    }
                });
                this.on('error', function () {
                    if (!_this5.video.error) {
                        return;
                    }
                    if (_this5.prevVideo) {
                        _this5.template.videoWrap.removeChild(_this5.video);
                        _this5.video = _this5.prevVideo;
                        if (!paused) {
                            _this5.video.play();
                        }
                        _this5.qualityIndex = _this5.prevIndex;
                        _this5.quality = _this5.options.video.quality[_this5.qualityIndex];
                        _this5.noticeTime = setTimeout(function () {
                            _this5.template.notice.style.opacity = 0;
                            _this5.events.trigger('notice_hide');
                        }, 3000);
                        _this5.prevVideo = null;
                        _this5.switchingQuality = false;
                    }
                });
            }
        },
        {
            key: 'notice',
            value: function notice(text) {
                var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
                var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.8;
                var notice = template.NewNotice(text, opacity);
                this.template.noticeList.appendChild(notice);
                this.events.trigger('notice_show', notice);
                if (time > 0) {
                    setTimeout(function (e, dp) {
                        return function () {
                            e.addEventListener('animationend', function () {
                                dp.template.noticeList.removeChild(e);
                            });
                            e.classList.add('remove-notice');
                            dp.events.trigger('notice_hide');
                        };
                    }(notice, this), time);
                }
            }
        },
        {
            key: 'resize',
            value: function resize() {
                if (this.danmaku) {
                    this.danmaku.resize();
                }
                if (this.controller.thumbnails) {
                    this.controller.thumbnails.resize(160, this.video.videoHeight / this.video.videoWidth * 160, this.template.barWrap.offsetWidth);
                }
                this.events.trigger('resize');
            }
        },
        {
            key: 'speed',
            value: function speed(rate) {
                this.video.playbackRate = rate;
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                instances.splice(instances.indexOf(this), 1);
                this.pause();
                document.removeEventListener('click', this.docClickFun, true);
                this.container.removeEventListener('click', this.containerClickFun, true);
                this.fullScreen.destroy();
                this.hotkey.destroy();
                this.contextmenu.destroy();
                this.controller.destroy();
                this.timer.destroy();
                this.video.src = '';
                this.container.innerHTML = '';
                this.events.trigger('destroy');
            }
        }
    ], [{
            key: 'version',
            get: function get() {
                return "1.27.0";
            }
        }]);
    return DPlayer;
}();
/* harmony default export */ const js_player = (DPlayer);
;// CONCATENATED MODULE: ./src/js/index.js


console.log('\n'.concat(' %c DPlayer v', "1.27.0", ' ').concat("b7a040c", ' %c https://dplayer.diygod.dev ', '\n', '\n'), 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
/* harmony default export */ const js = (js_player);
})();

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };

//# sourceMappingURL=DPlayer.js.map