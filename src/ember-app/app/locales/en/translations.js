import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISRezervПланLForm from './forms/i-i-s-rezerv-план-l';
import IISRezervПроектLForm from './forms/i-i-s-rezerv-проект-l';
import IISRezervУчастникLForm from './forms/i-i-s-rezerv-участник-l';
import IISRezervПланEForm from './forms/i-i-s-rezerv-план-e';
import IISRezervПроектEForm from './forms/i-i-s-rezerv-проект-e';
import IISRezervУчастникEForm from './forms/i-i-s-rezerv-участник-e';
import IISRezervКалендарьModel from './models/i-i-s-rezerv-календарь';
import IISRezervПланModel from './models/i-i-s-rezerv-план';
import IISRezervПроектModel from './models/i-i-s-rezerv-проект';
import IISRezervУчастникModel from './models/i-i-s-rezerv-участник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-rezerv-календарь': IISRezervКалендарьModel,
    'i-i-s-rezerv-план': IISRezervПланModel,
    'i-i-s-rezerv-проект': IISRezervПроектModel,
    'i-i-s-rezerv-участник': IISRezervУчастникModel
  },

  'application-name': 'Справочники',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Справочники',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Справочники',
          title: 'Справочники'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-rezerv-участник-l': {
            caption: 'Участник',
            title: ''
          },
          'i-i-s-rezerv-проект-l': {
            caption: 'Проект',
            title: ''
          }
        },
        планы: {
          caption: 'Планы',
          title: 'Планы',
          'i-i-s-rezerv-план-l': {
            caption: 'ПланL',
            title: 'План'
          }
        },
        rezerv: {
          caption: 'Rezerv',
          title: 'Rezerv',
          'i-i-s-rezerv-участник-l': {
            caption: 'Участник',
            title: ''
          },
          'i-i-s-rezerv-проект-l': {
            caption: 'Проект',
            title: ''
          },
          'i-i-s-rezerv-план-l': {
            caption: 'План',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-rezerv-план-l': IISRezervПланLForm,
    'i-i-s-rezerv-проект-l': IISRezervПроектLForm,
    'i-i-s-rezerv-участник-l': IISRezervУчастникLForm,
    'i-i-s-rezerv-план-e': IISRezervПланEForm,
    'i-i-s-rezerv-проект-e': IISRezervПроектEForm,
    'i-i-s-rezerv-участник-e': IISRezervУчастникEForm
  },

});

export default translations;
