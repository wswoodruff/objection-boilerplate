'use strict';

const Path = require('path');

module.exports = {

    server: {
        host: '0.0.0.0',
        port: process.env.PORT || 3000
    },

    schwifty: {
        knexConfig: require('./knexConfig')[process.env.NODE_ENV]
    },

    'schwifty-migration': {
        dir: Path.join(__dirname, '../lib'),
        mode: 'create'
    },

    poop: {
        logPath: Path.normalize(`${__dirname}/../poop.log`)
    }
};
