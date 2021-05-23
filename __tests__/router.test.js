/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from "../scripts/router";

describe("push to history", () => {
    test("length of history stack", () => {
        expect(pushToHistory('entry', 3).length).toBe(2);
        expect(pushToHistory('default', 0).length).toBe(3);
    });

    test("current state object", () => {
        expect(pushToHistory("settings", 0).state.page).toBe("settings");
        expect(pushToHistory("entry", 3).state.page).toBe("entry3")
    });
});
