const assume = require('assume');
const { join } = require('path');
const { readFileSync } = require('fs');

describe('Webpack RTL Plugin', () => {

  it('should compile ltr to rtl', () => {
    const css = readFileSync(join(__dirname, 'dist', 'styles.css'));

    assume(css.includes('direction: rtl')).to.be.true();
  });

});
