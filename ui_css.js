var lyricsMode = `
.controls {
    position: absolute;
    margin-bottom: 0;
    width: 100%;
}
.controls #album {
    display: none;
}
.lyrics,.list {
    width: 100%;
    left: 0;
}

body:not(.hideLyrics.hideList) .playerContainer {
    transform: translateX(0px);
}

.hideLyrics.hideList .controls {
    margin: auto;
    width: 350px;
}

.SimLRC {
    --align: center !important;
}

.lyrics, .list {
    height: 90%;
}
`;
var blurOff = `
.SimLRC>div {
    filter: none !important;
}
`;

function loadStyles() {
    var styles = ``;
    if (config.getItem("ext.lyricsMode.lyricsMode") == true) {
        styles = styles + lyricsMode;
    }
    if (config.getItem("ext.lyricsMode.blurOff") == true) {
        styles = styles + blurOff;
    }

    includeStyleElement(styles, "lyricsMode");
}

SettingsPage.data.push(
    { type: "title", text: "[第三方扩展]歌词模式" },
    { type: "boolean", text: "启用歌词模式", description: "开启后将移除播放页面的封面并居中显示歌词", configItem: "ext.lyricsMode.lyricsMode" },
    { type: "boolean", text: "关闭歌词模糊效果", description: "开启后将关闭歌词模糊效果", configItem: "ext.lyricsMode.blurOff" },
);
config.listenChange("ext.lyricsMode.lyricsMode", () => loadStyles());
config.listenChange("ext.lyricsMode.blurOff", () => loadStyles());

loadStyles();
