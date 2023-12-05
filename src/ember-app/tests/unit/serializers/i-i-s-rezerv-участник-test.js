import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-rezerv-участник', 'Unit | Serializer | i-i-s-rezerv-участник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-rezerv-участник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-rezerv-роли',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
