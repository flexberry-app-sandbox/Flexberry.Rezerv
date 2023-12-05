import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-rezerv-участник', 'Unit | Model | i-i-s-rezerv-участник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-rezerv-календарь',
    'model:i-i-s-rezerv-план',
    'model:i-i-s-rezerv-проект',
    'model:i-i-s-rezerv-участник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
