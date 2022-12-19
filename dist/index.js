export default class FancyLogger {
    // check environment if it's node or browser
    static checkEnv() {
        return typeof window !== "undefined";
    }
    static log(text, color) {
        this.checkEnv() === true
            ? console.log(`%c ${text} `, `background: #222; color: ${color}`)
            : console.log(color, text);
    }
    static green(text) {
        this.checkEnv() === true
            ? this.log(text, this.browserGreen)
            : this.log(text, this.nodeGreen);
    }
    static red(text) {
        this.checkEnv() === true
            ? this.log(text, this.browserRed)
            : this.log(text, this.nodeRed);
    }
    static blue(text) {
        this.checkEnv() === true
            ? this.log(text, this.browserBlue)
            : this.log(text, this.nodeBlue);
    }
    static yellow(text) {
        this.checkEnv() === true
            ? this.log(text, this.browserYellow)
            : this.log(text, this.nodeYellow);
    }
    static cyan(text) {
        this.checkEnv() === true
            ? this.log(text, this.browserCyan)
            : this.log(text, this.nodeCyan);
    }
}
// * --- node
FancyLogger.nodeGreen = "\x1b[32m";
FancyLogger.nodeRed = "\x1b[31m";
FancyLogger.nodeBlue = "\x1b[34m";
FancyLogger.nodeYellow = "\x1b[33m";
FancyLogger.nodeCyan = "\x1b[36m";
// * --- browser
FancyLogger.browserGreen = "#00ff1e";
FancyLogger.browserRed = "#ff0000";
FancyLogger.browserBlue = "#1303ff";
FancyLogger.browserYellow = "#f6ff00";
FancyLogger.browserCyan = "#00ccff";
