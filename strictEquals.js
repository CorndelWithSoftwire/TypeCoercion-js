const a = {
    value: 2,
    valueOf: function() {
        return this.value++;
    }
};

if (a.valueOf() === 2 && a.valueOf() === 3) {
    console.log('How on earth did you get here?');
}