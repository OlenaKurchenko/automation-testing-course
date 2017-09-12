const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
chai.use(require("chai-sorted"));

// Importing file with Sorting class definition
const sortingFile = require('../src/sorting.js')

describe('Bubble Sorting Test', function() {
	// Making random unsorted array of integers
	var unsortedArray = Array.apply(null, Array(10)).map(function() { return Math.floor(Math.random() * 30 % 100); });
	
	it('Should be sorted ASC', function() {
		var sorting = new sortingFile.Sorting();
		var sortedArray = sorting.bubble(unsortedArray);
		expect(sortedArray).to.be.sorted();
		expect(sortedArray.length).to.equal(unsortedArray.length);
	});

	it('Should be unsorted', function () {
		expect(unsortedArray).to.not.be.sorted();
	});
});