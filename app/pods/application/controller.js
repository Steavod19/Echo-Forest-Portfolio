import Ember from 'ember';

export default Ember.Controller.extend({

  isDisplayMenu: false,

  actions: {
    menuDisplay: function() {
      this.toggleProperty('isDisplayMenu');
      Ember.run.scheduleOnce('afterRender', this, function(){
      	// perform your jQuery logic here
        $(".mdi").animate({  borderSpacing: -45 }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
          }, duration:'slow' },'linear');
              });

    },
  },

});
