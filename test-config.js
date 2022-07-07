exports.config = {
    runner: 'local',
    port: 4723,
    path: '/',
    host: 'localhost',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpt: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances: 1,
    sync: true
}