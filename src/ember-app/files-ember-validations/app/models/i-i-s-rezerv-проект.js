import {
  defineNamespace,
  defineProjections,
  Model as ПроектMixin
} from '../mixins/regenerated/models/i-i-s-rezerv-проект';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПроектMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
