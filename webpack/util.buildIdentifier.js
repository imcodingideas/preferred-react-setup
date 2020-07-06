const glob = require('../package.json')
const exec = require('child_process').execSync

const gitHash = exec('git rev-parse HEAD', { encoding: 'utf-8' }).substring(0, 8)

module.exports = `${glob.version}-${gitHash}`