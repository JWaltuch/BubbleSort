describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('orders an array of length one', function ()  {
        expect(bubbleSort([1])).toEqual([1]);
    });
    it('orders a larger array', function ()  {
        expect(bubbleSort([7,12,39,13,6])).toEqual([6,7,12,13,39]);
    });
    it('orders a string array', function ()  {
        expect(bubbleSort(['b', 'z', 'e'])).toEqual(['b', 'e', 'z']);
    });
    it('handles array with identical elements', function ()  {
        expect(bubbleSort([7,12,6,13,6])).toEqual([6,6,7,12,13]);
    });
});