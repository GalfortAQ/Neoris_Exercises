import { expect, fixture, html } from '@open-wc/testing';
import '../litexercise-page.js';
// import '../../components/common-header';
// import '../../components/work-header';
// import '../../components/input-component';
// import '../../components/user-card';

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
  it('Should have correct types defined', () => {
    expect(el.name).to.be.a('string');
    // expect(el.userResult).to.be.a('object');
  });
  it('Should have default props', () => {
    expect(el.name).to.eql('');
    // expect(el.userResult).to.eql({});
  });
});
