import Ember from 'ember';

export default Ember.Component.extend({

porfolioList: [
  Ember.Object.create({
    value: 'Fidelity',
    key: 1,
    description: '',
    img: '',
  }),
  Ember.Object.create({
    value: 'DLIFLC',
    key: 2,
    description: '',
    img: '',
  }),
  Ember.Object.create({
    value: 'K+S',
    key: 3,
    description: '',
    img: '',
  }),
  Ember.Object.create({
    value: 'PANGR',
    key: 4,
    description: '',
    img: '',
  }),
]

});
