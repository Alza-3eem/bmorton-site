const nodemailer = require('nodemailer');

// Handler for the serverless function
export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Extract form data from request body
        const { name, email, message } = req.body;

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can use another email service if needed
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  // Your email password
            }
        });

        // Email options
        const mailOptions = {
            from: email, // Sender's email
            to: 'mortonjt2@gmail.com', // Replace with the recipient's email
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send message.' });
        }
    } else {
        // Handle non-POST requests
        res.status(405).json({ message: 'Method not allowed' });
    }
}
