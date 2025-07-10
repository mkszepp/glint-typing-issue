import Application from 'glint-typing-issue/app';
import config from 'glint-typing-issue/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';

export function start() {
  setApplication(Application.create(config.APP));

  setup(QUnit.assert);
  setupEmberOnerrorValidation();

  qunitStart();
}
