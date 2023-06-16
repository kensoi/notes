const {exec} = require('child_process')

const CommandList = []

CommandList.push("npm run not-found-patch")
CommandList.push("npm run prerender")

exec(CommandList.join(" && "))