var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'fa4bb48edc4a3d7cf0e269e77f81f15c9e9c079f'
})

github.users.getFollowingForUser({
  username: 'kellya73'
}, function (err, res) {
  if (err) throw err
  console.log("\n********FOLLOWING********\n")
  for (x=0; x<res.data.length; x++){
    console.log(res.data[x].login)
  }
  console.log("\nFollowing = " + (x))
})

github.users.getFollowersForUser({
  username: 'kellya73'
}, function (err, res) {
  if (err) throw err
  console.log("\n********FOLLOWERS********\n")
  for (x=0; x<res.data.length; x++){
    console.log(res.data[x].login)
  }
  console.log("\nFollowers = " + (x))
})

github.repos.getAll({
  username: 'kellya73'
  }, function (err, res) {
  if (err) throw err
  console.log("\n********Repos********\n")
  for (x=0; x<res.data.length; x++){
    console.log(res.data[x].name)
  }
  console.log("\nNumber of repos = " + (x))
  })
