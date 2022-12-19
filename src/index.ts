export default class FancyLogger {
    private constructor() {}

    // ! --- warn
    static warn = true;

    // * --- node
    private static nodeGreen = "\x1b[32m";
    private static nodeRed = "\x1b[31m";
    private static nodeBlue = "\x1b[34m";
    private static nodeYellow = "\x1b[33m";
    private static nodeCyan = "\x1b[36m";

    // * --- browser
    private static browserGreen = "#00ff1e";
    private static browserRed = "#ff0000";
    private static browserBlue = "#1303ff";
    private static browserYellow = "#f6ff00";
    private static browserCyan = "#00ccff";

    // check environment if it's node or browser
    private static checkEnv(): boolean {
        return typeof window !== "undefined";
    }
    private static logInBrowser(text: string, color: string): void {
        console.log(`%c ${text} `, `background: #222; color: ${color}`);
    }
    private static logInNode(text: string, color: string): void {
        console.log(color, text);
    }
    static green(text: string): void {
        this.checkEnv() === true
            ? this.logInBrowser(text, this.browserGreen)
            : this.logInNode(text, this.nodeGreen);
    }
    static red(text: string): void {
        this.checkEnv() === true
            ? this.logInBrowser(text, this.browserRed)
            : this.logInNode(text, this.nodeRed);
    }
    static blue(text: string): void {
        this.checkEnv() === true
            ? this.logInBrowser(text, this.browserBlue)
            : this.logInNode(text, this.nodeBlue);
    }
    static yellow(text: string): void {
        this.checkEnv() === true
            ? this.logInBrowser(text, this.browserYellow)
            : this.logInNode(text, this.nodeYellow);
    }
    static cyan(text: string): void {
        this.checkEnv() === true
            ? this.logInBrowser(text, this.browserCyan)
            : this.logInNode(text, this.nodeCyan);
    }
    static custom(text: string, color: string) {
        if (this.warn)
            console.warn(
                "Keep in mind, Hex codes doesn't work in terminal, in case if you don't want to see this message again chenge value of property warn to false: FancyLogger.warn = false"
            );
        this.checkEnv() === true
            ? this.logInBrowser(text, color)
            : this.logInNode(text, color);
    }
}
