var styles = `
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

includeStyleElement(styles);