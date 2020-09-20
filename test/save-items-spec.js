const { expect, assert } = require("chai");
const { saveItems } = require("../save-items");
describe("The saveItems function", () => {
	it("adds the new item to the list", () => {
    // arrange
    const items = []
    const newItem = "this"

    // act
    result = saveItems(items, newItem)

		// assert

		expect(result).to.be.deep.equal(['this'])
	});

	it("makes sure the result and the original are different", () => {
    const items = []
    const newItem = "this"

    // act
    result = saveItems(items,l  });
});
