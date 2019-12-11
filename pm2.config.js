
/**
 * pm2 init command
 * pm2 start pm2.config.js
 */
module.exports = {
  "apps": [
    {
      "name": "utopia-website",
      "script": "npm",
      "args" : "start"
    }
  ]
}
