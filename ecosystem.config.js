module.exports = {
  apps: [
    {
      name: "bot:pani",
      script: "./index.js",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      out_file: "./logs/server.log",
      error_file: "./logs/server-error.log",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
