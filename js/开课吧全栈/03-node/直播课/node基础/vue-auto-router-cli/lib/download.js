const {promisify} = require('util')

async function clone(repo, desc) {
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora(`下载... ${repo}`)
    process.start()
    await download(repo, desc)
    process.succeed()
}

module.exports = {
    clone
}