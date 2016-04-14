import Ember from 'ember';

export default Ember.Controller.extend({

  init: function() {
    this.set('portItem', this.get('portfolioList')['0']);
  }.on('init'),

  portfolioList: [
    Ember.Object.create({
      value: 'Fidelity',
      key: 0,
      description: 'this is a description',
      url: 'http://placehold.it/800x400',
    }),
    Ember.Object.create({
      value: 'DLIFLC',
      key: 1,
      description: 'DLIFLC info',
      url: 'https://s3-us-west-2.amazonaws.com/port-blog/dli-edu-mil.png',
    }),
    Ember.Object.create({
      value: 'K+S',
      key: 2,
      description: 'wedding info',
      url: 'https://s3-us-west-2.amazonaws.com/port-blog/K%2BS-wedding.png',
    }),
    Ember.Object.create({
      value: 'PANGR',
      key: 3,
      description: 'Pangr Info',
      url: 'https://s3-us-west-2.amazonaws.com/port-blog/pangr.png',
    }),
  ],


  actions: {
    setPortfolio(portfolio) {
      this.set('portItem', portfolio);
    },
  }

});
