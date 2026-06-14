import test from 'node:test';
import assert from 'node:assert';

test.describe("Truthy dan Falsy", () => {
    test.it("Nilai Kosong adalah Falsy", () => {
        assert.ok(!"");
        assert.equal("", false);
    });

    test.it("Nilai adalah Truthy", () => {
        assert.ok("Hello, World!");
    });
});