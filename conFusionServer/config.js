require("dotenv").config();

module.exports = {
	secretKey: "12345-67890-09876-54321",
	mongoUrl: "mongodb://localhost:27017/conFusion",
	facebook: {
		clientId: process.env.clientId,
		clientSecret: process.env.clientSecret,
	},
};
