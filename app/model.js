const crontab = require('crontab')

function getJobs () {
  return new Promise((res, rej) => {
    crontab.load((err, crontab) => {
      const jobs = crontab.jobs();
      res(jobs)
    });
  }).then((promJobs) => promJobs);
}

function addJob () {
  crontab.load(function(err, crontab) {
    const job = crontab.create('echo "test delete" >> /Users/tobiasbecker/Desktop/testing/test1.txt', '* * * * *', 'comment 1');
    crontab.save(function(err, crontab) {
    });
  })
}

module.exports = {
  getJobs,
  addJob
}