import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  конец: DS.attr('string'),
  начало: DS.attr('string'),
  трудозатраты: DS.attr('number'),
  участник: DS.belongsTo('i-i-s-rezerv-участник', { inverse: null, async: false }),
  план: DS.belongsTo('i-i-s-rezerv-план', { inverse: 'календарь', async: false })
});

export let ValidationRules = {
  конец: {
    descriptionKey: 'models.i-i-s-rezerv-календарь.validations.конец.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  начало: {
    descriptionKey: 'models.i-i-s-rezerv-календарь.validations.начало.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  трудозатраты: {
    descriptionKey: 'models.i-i-s-rezerv-календарь.validations.трудозатраты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  участник: {
    descriptionKey: 'models.i-i-s-rezerv-календарь.validations.участник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  план: {
    descriptionKey: 'models.i-i-s-rezerv-календарь.validations.план.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КалендарьE', 'i-i-s-rezerv-календарь', {
    конец: attr('Конец', { index: 0 }),
    трудозатраты: attr('Трудозатраты', { index: 1 }),
    начало: attr('Начало', { index: 2 }),
    участник: belongsTo('i-i-s-rezerv-участник', 'Участник', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' })
  });
};
