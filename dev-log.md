# Node Reddit Clone

## Based on the Bloc.io Node.js Curriculum

### Learn more at Bloc.io

## Notes

### 8/7/18

This morning I set up a Heroku deploy environment. I haven't used Heroku since I was learning Ruby a couple years ago, and I forgot how easy to set up and work with the Heroku CLI is.

Easy to deploy code using `git push heroku master` or `git push heroku my-test-branch:master` if you want to push a feature branch pre-merge.

I also set up a .env file and did some work in server.js to dynamically grab the port from `process.env.PORT`. See more on that object [here](https://nodejs.org/api/process.html#process_process_env).