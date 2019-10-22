describe('Bubble Sort', function() {
  beforeAll(function() {
    // const swapObj = {
    //   swap,
    // };
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('sees how many times swaps were made', function() {
    bubbleSort([2, 1, 4, 3]);
    expect(swap.calls.count()).toEqual(2);
  });
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('orders an array of length one', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it('orders a larger array', function() {
    expect(bubbleSort([7, 12, 39, 13, 6])).toEqual([6, 7, 12, 13, 39]);
  });
  it('orders a string array', function() {
    expect(bubbleSort(['b', 'z', 'e'])).toEqual(['b', 'e', 'z']);
  });
  it('handles array with identical elements', function() {
    expect(bubbleSort([7, 12, 6, 13, 6])).toEqual([6, 6, 7, 12, 13]);
  });
  //   it('only loops once', function() {
  //     expect(bubbleSort([2, 1, 3])).toEqual([1, 2, 3]);
  //   });
});
