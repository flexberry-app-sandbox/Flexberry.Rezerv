import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Справочники',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Справочники',
          title: 'Rezerv'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
