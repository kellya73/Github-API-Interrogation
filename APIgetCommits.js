const GitHubApi = require('github')
const github = new GitHubApi({
  debug: false
})

github.authenticate({
  type: 'oauth',
  token: 'fa4bb48edc4a3d7cf0e269e77f81f15c9e9c079f'
})

github.repos.getCommits({
  owner: 'kellya73',
  repo: 'Github-API-Interrogation'
}, function (err, res) {
    if (err) throw err
    var keys = Object.keys(res.data[0])
    console.log(keys)
})
