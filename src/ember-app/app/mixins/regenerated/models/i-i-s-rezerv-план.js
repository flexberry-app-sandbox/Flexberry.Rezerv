import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  проект: DS.belongsTo('i-i-s-rezerv-проект', { inverse: null, async: false }),
  календарь: DS.hasMany('i-i-s-rezerv-календарь', { inverse: 'план', async: false })
});

export let ValidationRules = {
  проект: {
    descriptionKey: 'models.i-i-s-rezerv-план.validations.проект.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  календарь: {
    descriptionKey: 'models.i-i-s-rezerv-план.validations.календарь.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланE', 'i-i-s-rezerv-план', {
    проект: belongsTo('i-i-s-rezerv-проект', 'Проект', {
      наименование: attr('Наименование', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' }),
    календарь: hasMany('i-i-s-rezerv-календарь', 'Календарь', {
      конец: attr('Конец', { index: 0 }),
      трудозатраты: attr('Трудозатраты', { index: 1 }),
      начало: attr('Начало', { index: 2 }),
      участник: belongsTo('i-i-s-rezerv-участник', 'Участник', {
        фИО: attr('ФИО', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('ПланL', 'i-i-s-rezerv-план', {
    проект: belongsTo('i-i-s-rezerv-проект', 'Наименование', {
      наименование: attr('Наименование', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
