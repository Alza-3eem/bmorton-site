const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log('Received POST request:', req.body);

        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: 'mortonjt2@gmail.com',
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        try {
            console.log('Sending email with options:', mailOptions);
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent successfully:', info.response);

            // Send success response
            res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send message.' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
