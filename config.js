let enviornment = process.env.NODE_ENV || 'production';
console.log("enviornment",enviornment);

let acceptedEnvValues = ["development", "staging", "production"];

if (!acceptedEnvValues.includes(process.env.NODE_ENV) ) {
    let error =  new Error();
    error.message = `NODE_ENV value must be either:  ${acceptedEnvValues.toString()}`;
    throw error;
}

config = {
    production: {
        paywall_service_url: process.env.PW_SERVICE_URL,
        worker_service_url: process.env.PW_WORKER_SERVICE_URL,
        paywall_producer_service_url: "http://10.0.1.76:5010"
    }
}

module.exports = config[enviornment];