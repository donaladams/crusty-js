/*global describe:true, it:true */
/*jshint node:true */
'use strict';

var should = require('should');

var helpers = require('../build/helpers');

describe('helpers', function () {

    describe('grams', function () {

        it('should be identity if % is 100', function () {
            var percent = 100;
            var totalFlour = 200;
            helpers.grams(totalFlour, percent).should.equal(200);
        });

        it('should give 0 if % is 0', function () {
            var percent = 0;
            var totalFlour = 200;
            helpers.grams(totalFlour, percent).should.equal(0);
        });

        it('should work with percentages > 100', function () {
            var percent = 125;
            var totalFlour = 100;
            helpers.grams(totalFlour, percent).should.equal(125);
        });

    });

    describe('formatGrams', function () {

        it('should have no decimal place if value is integral', function () {
            var value = 10;
            helpers.formatGrams(value).should.equal("10");
        });

        it('should default to precision of 2 points for numbers with mantissa of length >= 2', function () {
            var value = 10.1234;
            helpers.formatGrams(value).should.equal("10.12");
        });

        it('should use provided precision', function () {
            var value = 10.1234;
            var precision = 3;
            helpers.formatGrams(value, precision).should.equal("10.123");
        });
    });

});
