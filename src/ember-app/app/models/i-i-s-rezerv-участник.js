import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as УчастникMixin
} from '../mixins/regenerated/models/i-i-s-rezerv-участник';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УчастникMixin, Validations, {
});

defineProjections(Model);

export default Model;
