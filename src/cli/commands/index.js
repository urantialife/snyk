const abbrev = require('abbrev');
require('../../lib/spinner').isRequired = false;

// the aim of this module is to load as little as possible to keep cli boot
// time as low as possible

const commands = {
  auth: async (...args) => (await import('./auth')).default(...args),
  config: async (...args) => (await import('./config')).default(...args),
  help: async (...args) => (await import('./help')).default(...args),
  ignore: async (...args) => (await import('./ignore')).default(...args),
  monitor: async (...args) => (await import('./monitor')).default(...args),
  fix: async (...args) => (await import('./fix')).default(...args),
  policy: async (...args) => (await import('./policy')).default(...args),
  protect: async (...args) => (await import('./protect')).default(...args),
  test: async (...args) => (await import('./test')).default(...args),
  version: async (...args) => (await import('./version')).default(...args),
  wizard: async (...args) =>
    (await import('./protect/wizard')).default(...args),
  woof: async (...args) => (await import('./woof')).default(...args),
};
commands.aliases = abbrev(Object.keys(commands));
commands.aliases.t = 'test';
module.exports = commands;
