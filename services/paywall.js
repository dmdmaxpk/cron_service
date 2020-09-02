const axios = require("axios");
const config = require("../config");


subscriptionRenewal = async () => {
    try {
        let response = await axios.get(config.paywall_service_url + '/cron/subscriptionRenewal/');
    } catch(er) {
        console.error(er);
    } 
}

tokenRenewal = async () => {
    try {
        let response = await axios.get(config.paywall_service_url + '/cron/tokenRefresh/');
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
        let response = await axios.get(config.paywall_service_url + '/cron/checkLastSeenOfUsers/');
    } catch(er) {
        console.error(er);
    }
}

grayListService = async () => {
    try {
        let response = await axios.get(config.paywall_service_url + '/cron/grayListService/');
    } catch(er) {
        console.error(er);
    }
}

generateDailyReport = async () => {
    try {
        let response = await axios.get(config.paywall_service_url + '/cron/generateDailyReport/');
    } catch(er) {
        console.error(er);
    }
}

hourlyBillingCheck = async () => {
    try {
        let response = await axios.get(config.paywall_service_url + '/cron/hourlyBillingReport/');
    } catch(er) {
        console.error(er);
    }
}

markRenewableUsersCron = async() => {
    try {
        let response = await axios.get(config.paywall_service_url + '/cron/markRenewableUsers/');
    } catch(er) {
        console.error(er);
    }
}

sendReportsEveryThreeDays = async() => {
    try {
        let response = await axios.get(config.paywall_service_url + '/cron/sendReportsEveryThreeDays');
    } catch(er) {
        console.error(er);
    }
}

sendReportsEveryWeek = async() => {
    try {
        let response = await axios.get(config.paywall_service_url + '/cron/sendReportsEveryWeek');
    } catch(er) {
        console.error(er);
    }
}

sendReportsEveryMonth = async() => {
    try {
        let response = await axios.get(config.paywall_service_url + '/cron/sendReportsEveryMonth');
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
    hourlyBillingCheck: hourlyBillingCheck,
    markRenewableUsersCron: markRenewableUsersCron,
    
    sendReportsEveryThreeDays: sendReportsEveryThreeDays,
    sendReportsEveryWeek: sendReportsEveryWeek,
    sendReportsEveryMonth: sendReportsEveryMonth
} 