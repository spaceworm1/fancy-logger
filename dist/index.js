export default class FancyLogger {
    static green(text) {
        console.log("\x1b[32m", text);
    }
    static red(text) {
        console.log("\x1b[31m", text);
    }
    static blue(text) {
        console.log("\x1b[34m", text);
    }
    static yellow(text) {
        console.log("\x1b[33m", text);
    }
    static cyan(text) {
        console.log("\x1b[36m", text);
    }
    static log(text) {
        console.log(text);
    }
}
