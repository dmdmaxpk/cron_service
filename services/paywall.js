const axios = require("axios");
const config = require("../config");


subscriptionRenewal = async () => {
    try {
        axios.get(config.paywall_producer_service_url + '/cron/subscriptionRenewal/');
    } catch(er) {
        console.error(er);
    } 
}

tokenRenewal = async () => {
    try {
        axios.get(config.paywall_service_url + '/cron/tokenRefresh/');
    } catch(er) {
        console.error(er);
    }
}

resetDailyAmountSpentByUser = async () => {
    try {
        axios.get(config.paywall_service_url + '/cron/dailyAmoutReset');
        axios.get('http://10.0.1.76:5001/cron/dailyAmountReset');
    } catch(er) {
        console.error(er);
    }
}

resetTpsCount = async () => {
    try {
        axios.get('http://10.0.1.76:5001/cron/tpsCountReset');
        axios.get(config.paywall_service_url + '/cron/tpsCountReset/');
    } catch(er) {
        console.error(er);
    }
}

checkLastSeenOfUsers = async () => {
    try {
        axios.get(config.paywall_service_url + '/cron/checkLastSeenOfUsers/');
    } catch(er) {
        console.error(er);
    }
}

grayListService = async () => {
    try {
        axios.get(config.paywall_service_url + '/cron/grayListService/');
    } catch(er) {
        console.error(er);
    }
}

generateDailyReport = async () => {
    try {
        axios.get(config.paywall_service_url + '/cron/generateDailyReport/');
    } catch(er) {
        console.error(er);
    }
}

computeDailyReport = async () => {
    try {
        axios.get('http://3.120.18.133:3006/cron/compute-daily-subscription-reports');
    } catch(er) {
        console.error(er);
    }
}

hourlyBillingCheck = async () => {
    try {
        axios.get(config.paywall_service_url + '/cron/hourlyBillingReport/');
    } catch(er) {
        console.error(er);
    }
}

markRenewableUsersCron = async() => {
    try {
        axios.get(config.paywall_service_url + '/cron/markRenewableUsers/');
    } catch(er) {
        console.error(er);
    }
}

sendReportsEveryThreeDays = async() => {
    try {
        axios.get(config.paywall_service_url + '/cron/sendReportsEveryThreeDays');
    } catch(er) {
        console.error(er);
    }
}

sendReportsEveryWeek = async() => {
    try {
        axios.get(config.paywall_service_url + '/cron/sendReportsEveryWeek');
    } catch(er) {
        console.error(er);
    }
}

sendReportsEveryMonth = async() => {
    try {
        axios.get(config.paywall_service_url + '/cron/sendReportsEveryMonth');
    } catch(er) {
        console.error(er);
    }
}


rabbitMqMonitoring = async() => {
    try {
        axios.get(config.paywall_service_url + '/cron/rabbitMqMonitoring');
    } catch(er) {
        console.error(er);
    }
}

paywallReportingCron = async() => {
    try {
        axios.get('http://3.120.18.133:3006/cron/cron-compute-daily-data-reports');
    } catch(er) {
        console.error(er);
    }
}


module.exports = {
    subscriptionRenewal: subscriptionRenewal,
    tokenRenewal: tokenRenewal,
    resetDailyAmountSpentByUser: resetDailyAmountSpentByUser,
    resetTpsCount: resetTpsCount,
    checkLastSeenOfUsers: checkLastSeenOfUsers,
    grayListService: grayListService,
    generateDailyReport: generateDailyReport,
    computeDailyReport: computeDailyReport,
    paywallReportingCron: paywallReportingCron,
    hourlyBillingCheck: hourlyBillingCheck,
    markRenewableUsersCron: markRenewableUsersCron,
    rabbitMqMonitoring: rabbitMqMonitoring,
    sendReportsEveryThreeDays: sendReportsEveryThreeDays,
    sendReportsEveryWeek: sendReportsEveryWeek,
    sendReportsEveryMonth: sendReportsEveryMonth
} 