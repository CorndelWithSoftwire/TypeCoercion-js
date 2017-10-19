const a = {
    value: 2,
    valueOf: function() {
        return this.value++;
    }
};

if (a == 2 && a == 3) {
    console.log('How on earth did you get here?');
}