export default class FancyLogger {
    constructor() { }
    // check environment if it's node or browser
    static checkEnv() {
        return typeof window !== "undefined";
    }
    static logInBrowser(text, color) {
        console.log(`%c ${text} `, `background: #222; color: ${color}`);
    }
    static logInNode(text, color) {
        console.log(color, text);
    }
    static green(text) {
        this.checkEnv() === true
            ? this.logInBrowser(text, this.browserGreen)
            : this.logInNode(text, this.nodeGreen);
    }
    static red(text) {
        this.checkEnv() === true
            ? this.logInBrowser(text, this.browserRed)
            : this.logInNode(text, this.nodeRed);
    }
    static blue(text) {
        this.checkEnv() === true
            ? this.logInBrowser(text, this.browserBlue)
            : this.logInNode(text, this.nodeBlue);
    }
    static yellow(text) {
        this.checkEnv() === true
            ? this.logInBrowser(text, this.browserYellow)
            : this.logInNode(text, this.nodeYellow);
    }
    static cyan(text) {
        this.checkEnv() === true
            ? this.logInBrowser(text, this.browserCyan)
            : this.logInNode(text, this.nodeCyan);
    }
    static custom(text, color) {
        if (this.warn)
            console.warn("Keep in mind, Hex codes doesn't work in terminal, in case if you don't want to see this message again chenge value of property warn to false: FancyLogger.warn = false");
        this.checkEnv() === true
            ? this.logInBrowser(text, color)
            : this.logInNode(text, color);
    }
}
// ! --- warn
FancyLogger.warn = true;
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
