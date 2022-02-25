import { expect, fixture, html } from '@open-wc/testing';
import '../litexercise-page.js';
// const assert = require('assert');

describe('Lit exercise', () => {
  let el;

  before(async () => {
    const component = html`<litexercise-page />`;

    el = await fixture(component);
    await el.updateComplete;
  });

  it('Lit Exercise is rendered correctly', async () => {
    expect(el.shadowRoot).not.to.be.null;
  });
  it('Data type verification', () => {
    expect(el.name).to.be.a('string');
    expect(el.userResult).to.be.a('undefined');
    // assert.notExists(el.name, 'name is neither `null` nor `undefined`');
  });
});
