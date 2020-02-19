import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
 
export default Contentful.extend({
  id: attr('int'),
  title: attr('string'),
  content: attr('string'),
  videoUrl: attr('string')
});