class Sorting{
	bubble(unsortedArray) {
		var sortingArray = unsortedArray.slice();
		for (var i = (sortingArray.length - 1); i >= 0; i--) {
        	for (var j = (sortingArray.length - i); j > 0; j--) {
            	if (sortingArray[j] < sortingArray[j - 1]) {
                	var tmp = sortingArray[j];
                	sortingArray[j] = sortingArray[j - 1];
                	sortingArray[j - 1] = tmp;
				}
			}
		}
		return sortingArray;
	}
}

module.exports = {
	Sorting : Sorting
}


