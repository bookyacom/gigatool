'use strict';

var chai             = require('chai');
var moment           = require('moment');
var expect           = chai.expect;
var apiKey           = process.env.GIGATOOL;
var DATE_TIME_FORMAT = 'YYYY-MM-DD';


describe('gigatool apis integration', function() {
  this.timeout(20000);
  var api;

  before(function() {
    api = require('../')(apiKey);
  });

  describe('get by country', function() {
    var Promise;
    before(function() {
      Promise = api.country('Argentina');
    });

    it('should have events', function(done) {
      Promise
        .then(function(events) {
          expect(events).to.have.length.above(0);
          done();
        });
    });
  });

  describe('get by country with dates', function() {
    var Promise;
    before(function() {
      var start = moment(['1990', '10', '10']).format(DATE_TIME_FORMAT);
      var end = moment().format(DATE_TIME_FORMAT);

      Promise = api.countryByDates('Argentina', 
        start,
        end);
    });

    it('should have events', function(done) {
      Promise
        .then(function(events) {
          expect(events).to.have.length.above(0);
          done();
        });
    });
  });

  describe('get by venue', function() {
    var Promise;
    
    before(function() {
      Promise = api.venue('cuba inc');
    });

    it('should have events', function(done) {
      Promise
        .then(function(events) {
          expect(events).to.have.length.above(0);
          done();
        });
    });
  });

  describe('get by venue with dates', function() {
    var Promise;
    before(function() {
      var start = moment(['1990', '10', '10']).format(DATE_TIME_FORMAT);
      var end = moment(['2020', '0', '1']).format(DATE_TIME_FORMAT);

      Promise = api.venueByDate('cuba inc', 
        start,
        end);
    });

    it('should have events', function(done) {
      Promise
        .then(function(events) {
          expect(events).to.have.length.above(0);
          done();
        });
    });
  });

  describe('get by city', function() {
    var Promise;
    before(function() {
      Promise = api.city('kuala lumpur');
    });

    it('should have events', function(done) {
      Promise
        .then(function(events) {
          expect(events).to.have.length.above(0);
          done();
        });
    });
  });

  describe('get by city with dates', function() {
    var Promise;
    before(function() {
      var start = moment(['1990', '10', '10']).format(DATE_TIME_FORMAT);
      var end = moment(['2020', '0', '1']).format(DATE_TIME_FORMAT);

      Promise = api.cityByDates('kuala lumpur',
        start, 
        end);
    });

    it('should have events', function(done) {
      Promise
        .then(function(events) {
          expect(events).to.have.length.above(0);
          done();
        });
    });
  });

  describe('get all events from today', function() {
    var Promise;
    before(function() {
      Promise = api.all();
    });

    it('should have events', function(done) {
      Promise
        .then(function(events) {
          expect(events).to.have.length.above(0);
          done();
        });
    });
  });

  describe('get events by dates', function() {
    var Promise;
    before(function() {
      var start = moment().format(DATE_TIME_FORMAT);
      var end = moment(['2020', '0', '1']).format(DATE_TIME_FORMAT);

      Promise = api.dates(start, end);
    });

    it('should have events', function(done) {
      Promise
        .then(function(events) {
          expect(events).to.have.length.above(0);
          done();
        });
    });
  });
});