import Ember from 'ember';

export default Ember.Controller.extend({

  init: function() {
    this.set('portItem', this.get('portfolioList')['1']);
  }.on('init'),

  portfolioList: [
    Ember.Object.create({
      value: 'Fidelity',
      key: 0,
      description: 'Currently under NDA',
      url: 'http://placehold.it/800x400',
      siteLink:'/#',
    }),
    Ember.Object.create({
      value: 'DLIFLC',
      key: 1,
      description: 'Wordpress CMS rebranded and built from the ground up',
      url: 'https://s3-us-west-2.amazonaws.com/port-blog/dli-edu-mil.png',
      siteLink:'http://dliflc.edu',
    }),
    Ember.Object.create({
      value: 'K+S',
      key: 2,
      description: 'Wedding website built with Ember.js and Bootstrap with custom side nav.',
      url: 'https://s3-us-west-2.amazonaws.com/port-blog/K%2BS-wedding.png',
      siteLink:'https://steveandkyrstin.com/',
    }),
    Ember.Object.create({
      value: 'PANGR',
      key: 3,
      description: 'A group blogging site built in Rails. Pangr focuses on photo blogging Pangr allows you to create groups and post photos, gifs and posts to share with group followers. It utilizes Foundation front end with a mobile ready design Carrierwave with image scaling and Amazon S3 for back end storage.',
      url: 'https://s3-us-west-2.amazonaws.com/port-blog/pangr.png',
      siteLink:'http://pangr.herokuapp.com/',
    }),
  ],


  actions: {
    setPortfolio(portfolio) {
      this.set('portItem', portfolio);
    },
  }

});
