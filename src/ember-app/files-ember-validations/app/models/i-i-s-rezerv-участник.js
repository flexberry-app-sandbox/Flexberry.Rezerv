import {
  defineNamespace,
  defineProjections,
  Model as УчастникMixin
} from '../mixins/regenerated/models/i-i-s-rezerv-участник';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УчастникMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
