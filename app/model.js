const crontab = require('crontab');

function getJobs() {
  return new Promise((res, rej) => {
    crontab.load((err, crontab) => {
      const jobs = crontab.jobs();
      res(jobs);
    });
  }).then((promJobs) => promJobs);
}

function removeJob(jobObj) {
  return new Promise((res, rej) => {
    crontab.load(function (err, crontab) {
      if (err) console.log(err);
      crontab.remove({
        command: jobObj.command(),
        comment: jobObj.comment(),
      });
      crontab.save(function (err, crontab) {
        const jobs = crontab.jobs();
        res(jobs);
      });
    });
  }).then((promJobs) => promJobs);
}

function addJob(jobObj) {
  console.log(jobObj);
  const time = convertTimes(jobObj);
  const comment = jobObj.description;
  let command;
  if (jobObj.type === 'email') {
    if (jobObj.attachmentType === 'none') {
      command = `echo "${jobObj.content}" | mail -s "${jobObj.subject}" ${jobObj.recipient}`;
    } else if (jobObj.attachmentLocation) {
      console.log('here in attafchment');
      command = `(echo "${jobObj.content}"; uuencode ${jobObj.attachmentLocation} output.csv) | mail -s "${jobObj.subject}" ${jobObj.recipient}`;
      console.log(command);
    } else if (jobObj.scriptLocation && jobObj.outputLocation) {
      command = `python ${jobObj.scriptLocation}; uuencode ${jobObj.outputLocation} output.csv | mail -s "${jobObj.subject}" ${jobObj.recipient}`;
    }
  } else if (jobObj.type === 'screenshots') {
    command = `if [ ! -d "/Users/tobiasbecker/Desktop/screenshots" ]; then mkdir "/Users/tobiasbecker/Desktop/screenshots"; fi; mv /Users/tobiasbecker/Desktop/Screenshot*at*.png /Users/tobiasbecker/Desktop/screenshots`;
  }
  return new Promise((res, rej) => {
    crontab.load(function (err, crontab) {
      const job = crontab.create(command, time, comment);
      crontab.save(function (err, crontab) {
        const jobs = crontab.jobs();
        res(jobs);
      });
    });
  }).then((promJobs) => promJobs);
}

function convertTimes(jobObj) {
  const {
    minutes,
    customMinutes,
    hours,
    customHours,
    days,
    customDays,
    months,
    customMonths,
    weekdays,
    customWeekdays,
  } = jobObj;
  const arr = [
    minutes,
    customMinutes,
    hours,
    customHours,
    days,
    customDays,
    months,
    customMonths,
    weekdays,
    customWeekdays,
  ];
  let time = '';

  for (let i = 0; i < arr.length; i++) {
    //handle units
    if (arr[i] !== 'custom') {
      if (arr[i] === 'every') {
        time ? (time += ' *') : (time += '*');
      } else if (typeof arr[i] !== 'object') {
        time
          ? (time += ' */' + arr[i] + ' ')
          : (time += '*/' + arr[i] + ' ');
      } else if (!Array.isArray(arr[i])) {
        //handle custom units
        let range = '';
        for (let x = 0; x < arr[i].opt.length; x++) {
          if (!range && time) {
            range += ' ' + arr[i].opt[x].value;
          } else if (!range && !time) {
            range += arr[i].opt[x].value;
          } else if (time && range) {
            range += ',' + arr[i].opt[x].value;
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
  removeJob,
};
