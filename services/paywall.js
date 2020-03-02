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
        let response = await axios.get(config.paywall_service_url + '/cron/dailyAmoutReset/');
    } catch(er) {
        console.error(er);
    }
}

resetTpsCount = async () => {
    try {
        let response = await axios.get(config.paywall_service_url + '/cron/tpsCountReset/');
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


module.exports = {
    subscriptionRenewal: subscriptionRenewal,
    tokenRenewal: tokenRenewal,
    resetDailyAmountSpentByUser: resetDailyAmountSpentByUser,
    resetTpsCount: resetTpsCount,
    checkLastSeenOfUsers: checkLastSeenOfUsers,
    grayListService: grayListService,
    generateDailyReport: generateDailyReport,
    hourlyBillingCheck: hourlyBillingCheck
} 