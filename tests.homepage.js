casper.test.begin('Homepage Tests', 2, function suite(test) {
    casper.start('http://safe-shoe.surge.sh/', function() {
        test.assertHttpStatus(200, '01 - Homepage must be up and running.');
        test.assertTitleMatch(/^Tic Tac Toe/, '02 - Homepage title must contain the right keywords.');
        test.assertSelectorHasText('h1', "Welcome to Tic Tac Toe", '02 - h1 must be correct.');
    });
    casper.run(function() {
        test.done();
    });
});
