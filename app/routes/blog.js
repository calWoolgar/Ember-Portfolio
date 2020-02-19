import Route from '@ember/routing/route';
import Post from '../models/Blog';

export default Route.extend({
    model() {
        return this.store.findAll('blog');
    }
});
