let enviornment = process.env.NODE_ENV || 'development';
console.log("enviornment",enviornment);
let acceptedEnvValues = ["development", "staging", "production"];
if (!acceptedEnvValues.includes(process.env.NODE_ENV) ) {
    let error =  new Error();
    error.message = `NODE_ENV value must be either:  ${acceptedEnvValues.toString()}`;
    throw error;
}
config = {
    development: {
        paywall_service_url: "http://localhost:5000/"
    },
    staging: {
        paywall_service_url: "http://localhost:5000/"
    },
    production: {
        paywall_service_url: process.env.PW_SERVICE_URL
    }
}

module.exports = config[enviornment];