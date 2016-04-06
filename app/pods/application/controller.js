import Ember from 'ember';

export default Ember.Controller.extend({

  isDisplayMenu: false,

  actions: {
    menuDisplay() {
      this.toggleProperty('isDisplayMenu');
      var self = this;
      Ember.run.next(this, function() {

        if (this.get('isDisplayMenu')) {
          $(".mdi-add-circle-outline").animate({
            borderSpacing: -225
          }, {
            step: function(now) {
              $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
              $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
              $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 'slow'
          }, 'linear');
        } else {

          $(".mdi-add-circle-outline").css('-webkit-transform', 'rotate(45deg)');
          $(".mdi-add-circle-outline").css('-moz-transform', 'rotate(45deg)');
          $(".mdi-add-circle-outline").css('transform', 'rotate(45deg)');

          $(".mdi-add-circle-outline").animate({
            borderSpacing: 270
          }, {
            step: function(now) {
              $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
              $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
              $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 'slow'
          }, 'linear');
        }

      });

    },
  },

});
