import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  actions: {
    save() {
      if (this.get('hasDescription')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;
    },
  }
});
