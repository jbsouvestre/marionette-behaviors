import $ from 'jquery';
import Marionette from 'backbone.marionette';
import Behaviors from 'marionette-behaviors';


describe('Dummy test', ()=> {
    it('should pass', ()=> {
        expect(1+1).toBe(2);
    });
});


describe('Marionette-Behaviors', () => {
    it('should be an object', () => {
        expect(typeof Behaviors).toBe('object');
    });
});
