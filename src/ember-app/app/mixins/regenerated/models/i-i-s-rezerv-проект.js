import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  срок: DS.attr('string'),
  стоимость: DS.attr('number'),
  участник: DS.belongsTo('i-i-s-rezerv-участник', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-rezerv-проект.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  срок: {
    descriptionKey: 'models.i-i-s-rezerv-проект.validations.срок.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-rezerv-проект.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  участник: {
    descriptionKey: 'models.i-i-s-rezerv-проект.validations.участник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроектE', 'i-i-s-rezerv-проект', {
    стоимость: attr('Стоимость', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    срок: attr('Срок', { index: 2 }),
    участник: belongsTo('i-i-s-rezerv-участник', 'Участник', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ПроектL', 'i-i-s-rezerv-проект', {
    стоимость: attr('Стоимость', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    срок: attr('Срок', { index: 2 }),
    участник: belongsTo('i-i-s-rezerv-участник', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
