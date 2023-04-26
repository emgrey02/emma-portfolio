export default function handler(req, res) {
	let nodemailer = require('nodemailer');
	const transporter = nodemailer.createTransport({
		port: 465,
		host: 'smtp.gmail.com',
		auth: {
			user: 'emgrey02@gmail.com',
			pass: 'Goochangeit2!',
		},
		secure: true,
	});

	console.log(req.body);
}
