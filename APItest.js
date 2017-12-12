var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'Enter Token Here'
})

github.users.getFollowingForUser({
  username: 'kellya73'
}, function (err, res) {
  if (err) throw err
  //console.log("\n********FOLLOWING********\n")
  //console.log(res)
  var keys = Object.keys(res.data);
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
  //console.log("\n********FOLLOWERS********\n")
  //console.log(res)
  var keys = Object.keys(res.data);
  console.log("\n********FOLLOWERS********\n")
  for (x=0; x<res.data.length; x++){
    console.log(res.data[x].login)
  }
  console.log("\nFollowers = " + (x))
})
