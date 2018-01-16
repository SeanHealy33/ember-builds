import { setupRenderingTest } from 'ember-qunit';
import '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, skip } from 'qunit';

module('Integration | Component | project listing/beta', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{project-listing/beta}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs`
      {{#project-listing/beta}}
        template block text
      {{/project-listing/beta}}
    `);

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
