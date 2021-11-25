if (process.env.NODE_ENV !== "production" )
{
    require("dotenv").config();
}


module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    CRON_URL: process.env.CRON_URL,
    PORT: process.env.PORT,
}