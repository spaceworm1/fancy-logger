export default class FancyLogger {
    static green(text: string): void {
        console.log("\x1b[32m", text);
    }
    static red(text: string): void {
        console.log("\x1b[31m", text);
    }
    static blue(text: string): void {
        console.log("\x1b[34m", text);
    }
    static yellow(text: string): void {
        console.log("\x1b[33m", text);
    }
    static cyan(text: string): void {
        console.log("\x1b[36m", text);
    }
    static log(text: string): void {
        console.log(text);
    }
}
