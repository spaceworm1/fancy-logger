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
    static basedEnv(text: string, color: string): void {
        this.checkEnv() === true
            ? console.log(`%c ${text} `, `background: #222; color: ${color}`)
            : console.log(color, text);
    }
    static green(text: string): void {
        this.checkEnv() === true
            ? this.basedEnv(text, this.browserGreen)
            : this.basedEnv(text, this.nodeGreen);
    }
    static red(text: string): void {
        this.checkEnv() === true
            ? this.basedEnv(text, this.browserRed)
            : this.basedEnv(text, this.nodeRed);
    }
    static blue(text: string): void {
        this.checkEnv() === true
            ? this.basedEnv(text, this.browserBlue)
            : this.basedEnv(text, this.nodeBlue);
    }
    static yellow(text: string): void {
        this.checkEnv() === true
            ? this.basedEnv(text, this.browserYellow)
            : this.basedEnv(text, this.nodeYellow);
    }
    static cyan(text: string): void {
        this.checkEnv() === true
            ? this.basedEnv(text, this.browserCyan)
            : this.basedEnv(text, this.nodeCyan);
    }
    static log(text: string): void {
        console.log(text);
    }
}
