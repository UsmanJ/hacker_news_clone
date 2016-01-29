exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['hackerNewsHomepageAppFeature.js'],
  capabilities: {
    browserName: 'chrome'
  }
}
