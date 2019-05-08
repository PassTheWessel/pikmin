const Pikmin = require('../');
const pikmin = new Pikmin.instance({
  name: 'main',
  autogen: true,
  format: `${Pikmin.colors.cyan('[%h:%m:%s]')} %l ${Pikmin.colors.green('->')} `,
  transports: [
    new Pikmin.FileTransport({ file: 'tmp/log.txt' }),
    new Pikmin.ConsoleTransport({ process: process, name: 'info' })
  ]
});

pikmin.addTransport(new Pikmin.ConsoleTransport({ process: process, name: 'error', format: `${Pikmin.colors.red('%l')} `, defaults: {} }));
Pikmin.bind(pikmin, console);

pikmin.info(Symbol.iterator);
pikmin.info({ 'test': 123 });
pikmin.error('This is an error!');

require('./global.js')();
Pikmin.unbind(pikmin);