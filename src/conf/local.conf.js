const port = 3578;

module.exports = {
  port: port,
  voltranEnv: 'local',
  api: {
    clientUrl: `http://localhost:${port}`,
    serverUrl: `http://localhost:${port}`
  },
  baseUrl: `http://localhost:${port}`,
  mediaUrl: '',
  logLevel: 'info',
  isCssClassNameObfuscationEnabled: false,
  sfBaseUrl: `http://localhost:${port}`,
  services: {
    'voltranapi': {
      'clientUrl': 'http://voltran-api.qa.hepsiburada.com',
      'serverUrl': 'http://voltran-api.qa.hepsiburada.com'
    }
  },
  timeouts: {
    clientApiManager: 20 * 1000,
    serverApiManager: 20 * 1000
  }
};
