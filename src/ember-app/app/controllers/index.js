import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-rezerv-участник-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-rezerv-участник-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-rezerv-участник-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-rezerv-проект-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-rezerv-проект-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-rezerv-проект-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.планы.caption'),
          title: i18n.t('forms.application.sitemap.планы.title'),
          children: [{
            link: 'i-i-s-rezerv-план-l',
            caption: i18n.t('forms.application.sitemap.планы.i-i-s-rezerv-план-l.caption'),
            title: i18n.t('forms.application.sitemap.планы.i-i-s-rezerv-план-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})