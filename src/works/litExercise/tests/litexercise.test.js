import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon/pkg/sinon-esm.js';
import '../litexercise-page.js';
// const assert = require('assert');

describe('Lit exercise: Render', () => {
  let el;

  before(async () => {
    const component = html`<litexercise-page />`;

    el = await fixture(component);
    await el.updateComplete;
  });

  it('Lit Exercise is rendered correctly', async () => {
    expect(el.shadowRoot).not.to.be.null;
  });
  it('Snapshot', () => {
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('Should have correct types defined', () => {
    expect(el.name).to.be.a('string');
    expect(el.userResult).to.be.a('object');
  });
  it('Should have default props', () => {
    expect(el.name).to.eql('');
    expect(el.userResult).to.eql({});
  });
});

describe('Lit exercise: Running search', () => {
  let el;
  const search = 'vicdata4';
  before(async () => {
    const component = html`<litexercise-page .name="${search}" />`;

    el = await fixture(component);
    await el.updateComplete;
  });

  it('Lit Exercise is rendered correctly', async () => {
    expect(el.shadowRoot).not.to.be.null;
  });
  it('Should receive the name value & keep userResult object empty', () => {
    expect(el.name).to.eql('vicdata4');
    expect(el.userResult).to.be.empty;
  });
  it('Should receive the name value & keep userResult object empty', () => {
    expect(el.name).to.eql('vicdata4');
    expect(el.userResult).to.be.empty;
  });
  it('Should call search function only once', () => {
    // const eventSpy = sinon.spy(el, 'searchUser');
    // el.shadowRoot.querySelector('button').click();
    // expect(eventSpy).calledOnce;
    // console.log(el.shadowRoot.querySelector('button'));
  });
});
