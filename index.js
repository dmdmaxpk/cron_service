const CronJob = require('cron').CronJob;
const config = require('./config');
const services = require('./services');
const paywall = services.paywall;
// To generate token to consume telenor dcb apis
runSubscriptionRenewalCron  = async() => {
    // At every 5th minute
    new CronJob('*/5 * * * *',  async() => {
        console.log('Cron - SubscriptionRenewal - Executing - ' + (new Date()));
        paywall.subscriptionRenewal();
      }, null, true, 'America/Los_Angeles');
}


runTokenRenewalCron  = async() => {
    // At every 29th minute, to make sure make two request in an hour
    new CronJob('*/29 * * * *',  async() => {
        console.log('Cron - TokenRefresh - Executing - ' + (new Date()));
        paywall.tokenRenewal();
      }, null, true, 'America/Los_Angeles');
}

runDailyAmountCron  = async() => {
  // At midnight every day to reset amount spent by customer that day
  new CronJob('0 0 0 * * *',  async() => {
      console.log('Cron - Daily Amount - Executing - ' + (new Date()));
      paywall.resetDailyAmountSpentByUser();
    }, null, true, 'America/Los_Angeles');
}

runTpsCountCron  = async() => {
  // Every Second to reset TPS count
  new CronJob('* * * * * *',  async() => {
      console.log('Cron - TpsCount - Executing - ' + (new Date()));
      paywall.resetTpsCount();
    }, null, true, 'America/Los_Angeles');
}

checkLastSeenOfUsers  = async() => {
  // Every 55 minutes to check last seen of all users
  new CronJob('*/55 * * * *',  async() => {
      console.log('Cron - To Check Last seen status of users - Executing - ' + (new Date()));
      paywall.checkLastSeenOfUsers();
    }, null, true, 'America/Los_Angeles');
}

grayListService  = async() => {
  // Every 55 minutes
  new CronJob('*/59 * * * *',  async() => {
      console.log('Cron - To un-gray users that are added in gray list - Executing - ' + (new Date()));
      paywall.grayListService();
    }, null, true, 'America/Los_Angeles');
}

generateDailyReport  = async() => {
  // Every 55 minutes
  new CronJob(' 0 19 * * *',  async() => {
      console.log('Generate daily report and send some stats by email to management' + (new Date()));
      paywall.generateDailyReport();
    }, null, true, 'America/Los_Angeles');
}

billingMonitoringCron = async() => {
  console.log("Reacehd");
  new CronJob('* * * * * *',  async() => {
    console.log('Run every hour and check billing stats' + (new Date()));
    paywall.hourlyBillingCheck();
  }, null, true, 'America/Los_Angeles');
}


runSubscriptionRenewalCron();
runTokenRenewalCron();
runTpsCountCron();
runDailyAmountCron();
checkLastSeenOfUsers();
grayListService();
generateDailyReport();
billingMonitoringCron();