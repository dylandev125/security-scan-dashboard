const express = require('./services/express')
const { appConfig } = require('./config')
const routes = require('./routes')
const app = express(routes);
const Mysequelize = require('./services/sequelize');

Mysequelize.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.listen(appConfig.APP_PORT, () => {
  console.log(
    'Express server listening on %d, in %s mode',
    appConfig.APP_PORT,
    appConfig.ENV,
  )
})

module.exports = app