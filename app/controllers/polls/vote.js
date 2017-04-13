import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        submitVote: function() {
            var opt1 = this.get('opt1');
            var opt2 = this.get('opt2');

            var submitVote = this.store.createRecord('vote', {
                opt1: opt1,
                opt2: opt2
            });

            submitVote.save();

            this.setProperties({
                opt1: '',
                opt2: ''
            });
        }
    }
});
