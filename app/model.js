const crontab = require('crontab')

function getJobs () {
  return new Promise((res, rej) => {
    crontab.load((err, crontab) => {
      const jobs = crontab.jobs();
      res(jobs)
    });
  }).then((promJobs) => promJobs);
}

function removeJob (jobObj) {
  //command and comment
  // console.log(jobObj)
  //console.log(jobObj.comment())
  // console.log(jobObj.command())
  return new Promise((res, rej) => {
    crontab.load(function(err, crontab) {
      if (err) console.log(err);
      crontab.remove({command: jobObj.command(), comment: jobObj.comment()});
      crontab.save(function(err, crontab) {
        const jobs = crontab.jobs();
        res(jobs);
      });
    })
  }).then(promJobs => promJobs);
}

function addJob (jobObj) {
  const time = convertTimes(jobObj);
  if (jobObj.type === 'email') {
    const command = `echo "${jobObj.content}" | mail -s "${jobObj.subject}" ${jobObj.recipient}`;
    const comment = jobObj.description;
    return new Promise((res, rej) => {
      crontab.load(function(err, crontab) {
      const job = crontab.create(command, time, comment);
      crontab.save(function(err, crontab) {
        const jobs = crontab.jobs();
        res(jobs);
      });
    })}).then((promJobs) => promJobs);
  }
}

function convertTimes (jobObj) {
  console.log('from MOdel', jobObj)
  const { minutes, customMinutes, hours, customHours, days, customDays, months, customMonths, weekdays, customWeekdays } = jobObj;
  const arr = [minutes, customMinutes, hours, customHours, days, customDays, months, customMonths, weekdays, customWeekdays ];
  let time = '';
  console.log('customMinutes', typeof customMinutes)

  for (let i = 0; i < arr.length; i++) {
    //handle units
    if (arr[i] !== 'custom') {
      if (arr[i] === 'every') {
        time ? time += ' *' : time += '*'
      } else if (typeof arr[i] !== 'object') {
        time ? time += ' */' + arr[i] + ' ' : time += '*/' + arr[i] + ' '
      } else if (!Array.isArray(arr[i])) {
        //handle custom units
          let range = '';
          for (let x = 0; x < arr[i].opt.length; x++) {
            if (!range && time) {
              range += ' ' + arr[i].opt[x].value
            } else if (!range && !time) {
              range += arr[i].opt[x].value
            } else if (time && range) {
              range += ',' + arr[i].opt[x].value
            }
          }
          time += range;
      }
    }
  }
  return time;
}

module.exports = {
  getJobs,
  addJob,
  removeJob
}
