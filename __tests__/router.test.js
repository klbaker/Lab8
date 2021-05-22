import { pushToHistory } from "../scripts/router";

/**
 * @jest-environment jsdom
 */
describe("push to history", () => {
    test("settings", () => {
        let expected = history.length + 1;
        let updated = pushToHistory("settings", 0);
        expect(updated.length).toBe(expected);
        expect(updated.state.page).toBe('settings');
    });

    test("entry", () => {
        let expected = history.length + 1;
        let updated = pushToHistory("entry", 2);
        expect(updated.length).toBe(expected);
        expect(updated.state.page).toBe('entry2');
    });

    test("defaul", () => {
        let expected = history
        let updated = pushToHistory("other", 0);
        expect(updated.length).toBe(expected.length);
        expect(updated.state.page).toBe();
    });
});
