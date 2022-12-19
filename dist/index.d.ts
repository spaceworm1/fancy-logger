export default class FancyLogger {
    private constructor();
    static warn: boolean;
    private static nodeGreen;
    private static nodeRed;
    private static nodeBlue;
    private static nodeYellow;
    private static nodeCyan;
    private static browserGreen;
    private static browserRed;
    private static browserBlue;
    private static browserYellow;
    private static browserCyan;
    static checkEnv(): boolean;
    static logInBrowser(text: string, color: string): void;
    static logInNode(text: string, color: string): void;
    static green(text: string): void;
    static red(text: string): void;
    static blue(text: string): void;
    static yellow(text: string): void;
    static cyan(text: string): void;
    static custom(text: string, color: string): void;
}
//# sourceMappingURL=index.d.ts.map