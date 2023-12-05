import {
  defineNamespace,
  defineProjections,
  Model as КалендарьMixin
} from '../mixins/regenerated/models/i-i-s-rezerv-календарь';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КалендарьMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
