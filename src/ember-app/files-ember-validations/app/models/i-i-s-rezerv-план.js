import {
  defineNamespace,
  defineProjections,
  Model as ПланMixin
} from '../mixins/regenerated/models/i-i-s-rezerv-план';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПланMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
