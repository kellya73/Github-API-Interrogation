var GitHubApi = require('github')
var github = new GitHubApi
({
  debug: true
})

//handy tool
//  var keys = Object.keys(res.data[0])
//  console.log("\n" + keys + "\n")

github.authenticate
({
  type: 'oauth',
  token: '07a0380307b1e4b7d52edbdd8237205f10826548'
})

github.users.getFollowingForUser
({
    username: 'kellya73'
 }
 ,function (err, res)
 {
    if (err) throw err
    console.log("\n********FOLLOWING********\n")
    for (x=0; x<res.data.length; x++)
    {
      console.log((res.data[x].login))
    }
    console.log("\nFollowing = " + (x))
 }
)

github.users.getFollowersForUser
({
    username: 'kellya73'
 }
 ,function (err, res)
 {
    if (err) throw err
    console.log("\n********FOLLOWERS********\n")
    for (x=0; x<res.data.length; x++)
    {
      console.log(res.data[x].login)
    }
    console.log("\nFollowers = " + (x))
 }
)

github.repos.getAll
({
    username: 'kellya73'
 }
 ,function (err, res)
 {
    if (err) throw err
    var repoArray = new Array(res.data.length)
    var repoSizeArray = new Array(res.data.length)
    console.log("\n********Repos********\n")
    console.log("Number of repos = " + (res.data.length) + "\n")
    for (x=0; x<res.data.length; x++)
    {

      repoArray[x] = res.data[x].name
      repoSizeArray[x] = res.data[x].name

      console.log(res.data[x].name + "size = " + res.data[x].size + "kb\n")
      github.repos.getCommits
      ({
          owner: 'kellya73',
          repo: repoArray[x]
       }
       ,function (err, res1)
       {
          if (err) throw err
          var repoCommitsArray = new Array(res.data.length)
          console.log("\n********COMMITS********\n")
          repoCommitsArray[x] = res1.data.length
          console.log("\nNumber of commits = " + (res1.data.length))
       }
      )
    }
  }
)

github.repos.getAll
({
    username: 'kellya73'
 }
 ,function (err, res)
 {
    if (err) throw err
    var repoArray = new Array(res.data.length)
    for (x=0; x<res.data.length; x++)
    {
      repoArray[x] = res.data[x].name
      github.repos.getCommits
      ({
          owner: 'kellya73',
          repo: repoArray[x]
       }
       ,function (err, res1)
       {
           console.log("\n********COMMITDATES********\n")
           console.log("\nNumber of commits = " + (res1.data.length))
          if (err) throw err
          for(y=0; y<res1.data.length;y++)
          {
            console.log(y + "  "+ res1.data[y].commit.author.date)
          }
       }
      )
    }
  }
)
