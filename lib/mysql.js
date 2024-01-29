'use strict';

const assert = require('assert');
const mysql = require('mysql2/promise');
let count = 0;

module.exports = app => {
  app.addSingleton('mysql', createOneClient);
};

async function createOneClient(config, app) {
  assert(config.host && config.port && config.user && config.database,
    `[egg-mysql] 'host: ${config.host}', 'port: ${config.port}', 'user: ${config.user}', 'database: ${config.database}' are required on config`);
  app.coreLogger.info('[egg-mysql] connecting %s@%s:%s/%s',
    config.user, config.host, config.port, config.database);

  let pool = mysql.createPool(config)
  pool.on('connection', connection => {
    console.log('MySQL connected')
  });

  pool.on('error', err => {
    app.coreLogger.info(`MySQL connection error: ${err}`)
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      // 关闭旧的连接池
      pool.end()
      // 创建新的连接池
      pool = mysql.createPool(config)
    } else {
      throw err
    }
  });

  app.beforeStart(async function () {
    const rows = await pool.query('select now() as currentTime limit 1;');
    const index = count++;
    app.coreLogger.info(`[egg-mysql] instance[${index}] status OK, rds currentTime: ${rows[0][0].currentTime}`);
  });
  return pool;
}
