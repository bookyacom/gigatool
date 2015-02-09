'use strict';
'use strict';

var nock = require('nock');
var chai = require('chai');
var expect = chai.expect;
var apiKey = 'test';

describe('unit test for gigatools requests', function() {
  this.timeout(20000);
  var api;

  before(function() {
    api = require('../')(apiKey);
  });

  after(function() {
    nock.cleanAll();
  });

  it('should throw error', function(done) {
    var scope = nock('http://api.gigatools.com')
      .get('/gigs.json?api_key=test')
      .reply(200, []);

    api.all()
      .catch(function(err) {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.contain('there is no data');
        done();
      });
  });

  it('should throw body is not an array error', function(done) {
    var scope = nock('http://api.gigatools.com')
      .get('/gigs.json?api_key=test')
      .reply(200, {});

    api.all()
      .catch(function(err) {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.contain('body is not an array');
        done();
      });
  });

  it('should return array of events', function(done) {
    var mockEvents = [{
        name: 'loser'
      }];

    var scope = nock('http://api.gigatools.com')
      .get('/gigs.json?api_key=test')
      .reply(200, [{}, mockEvents]);

    api.all()
      .then(function(events) {
        expect(events).to.have.length(mockEvents.length);
        expect(events).to.eql(mockEvents);
        done();
      });
  });
});