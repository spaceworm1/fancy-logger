export default class FancyLogger {
    // check environment if it's node or browser
    static checkEnv() {
        return typeof window !== "undefined";
    }
    static basedEnv(text, color) {
        this.checkEnv() === true
            ? console.log(`%c ${text}', 'background: #222; color: ${color}`)
            : console.log(color, text);
    }
    static green(text) {
        this.checkEnv() === true
            ? this.basedEnv(text, this.browserGreen)
            : this.basedEnv(text, this.nodeGreen);
    }
    static red(text) {
        this.checkEnv() === true
            ? this.basedEnv(text, this.browserRed)
            : this.basedEnv(text, this.nodeRed);
    }
    static blue(text) {
        this.checkEnv() === true
            ? this.basedEnv(text, this.browserBlue)
            : this.basedEnv(text, this.nodeBlue);
    }
    static yellow(text) {
        this.checkEnv() === true
            ? this.basedEnv(text, this.browserYellow)
            : this.basedEnv(text, this.nodeYellow);
    }
    static cyan(text) {
        this.checkEnv() === true
            ? this.basedEnv(text, this.browserCyan)
            : this.basedEnv(text, this.nodeCyan);
    }
    static log(text) {
        console.log(text);
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
FancyLogger.blue("hey");
