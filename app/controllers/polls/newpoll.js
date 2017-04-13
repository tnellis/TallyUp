import Ember from 'ember';

export default Ember.Controller.extend({
        actions: {
        newPoll: function(){
            var title = this.get('title');
            var opt1 = this.get('opt1');
            var address1 = this.get('address1');
            var opt2 = this.get('opt2');
            var address2 = this.get('address2');

            // Create new Poll.
            var newPoll = this.store.createRecord('poll', {
                title: title,
                opt1: opt1,
                addr1: address1,
                opt2: opt2,
                addr2: address2,
                votes: "0"
            });
            // Save to Database.
            newPoll.save();

            // Clear form.
            this.setProperties({
                title: '',
                opt1: '',
                address1: '',
                opt2: '',
                address2: ''
            });
        }
    }
});
