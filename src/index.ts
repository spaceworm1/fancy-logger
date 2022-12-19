export default class FancyLogger {
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
    static checkEnv(): boolean {
        return typeof window !== "undefined";
    }
    static log(text: string, color: string): void {
        this.checkEnv() === true
            ? console.log(`%c ${text} `, `background: #222; color: ${color}`)
            : console.log(color, text);
    }
    static green(text: string): void {
        this.checkEnv() === true
            ? this.log(text, this.browserGreen)
            : this.log(text, this.nodeGreen);
    }
    static red(text: string): void {
        this.checkEnv() === true
            ? this.log(text, this.browserRed)
            : this.log(text, this.nodeRed);
    }
    static blue(text: string): void {
        this.checkEnv() === true
            ? this.log(text, this.browserBlue)
            : this.log(text, this.nodeBlue);
    }
    static yellow(text: string): void {
        this.checkEnv() === true
            ? this.log(text, this.browserYellow)
            : this.log(text, this.nodeYellow);
    }
    static cyan(text: string): void {
        this.checkEnv() === true
            ? this.log(text, this.browserCyan)
            : this.log(text, this.nodeCyan);
    }
}
