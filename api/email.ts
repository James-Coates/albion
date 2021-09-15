const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const sgMail = require('@sendgrid/mail');

module.exports = async (req: any, res: any) => {
  sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

  const data = JSON.parse(req.body);

  const msg = {
    to: 'csratcliffe@hotmail.com', // Change to your recipient
    from: 'noreply@albiontouring.com', // Change to your verified sender
    subject: `Enquiry from ${data.first}`,
    text: `Hi Chris, you have a new enquiry from ${data.first} ${data.last}. Please see details below:\n`,
    html: `
        <p>Hi Chris, you have a new enquiry from ${data.first} ${data.last}. Please see details below:</p>
        <p>Type of enquiry: <b>${data.queryType}</b>.</p>
        <p>Email address: <b><a href="mailto:${data.email}?subject=Albion Touring Enquiry - ${data.queryType}">${data.email}</a></b>.</p>
        <p>Phone: <b>${data.phone}</b>.</p>
        <p>Message:</p>
        <p>${data.message}</p>
        <br>
        <p>Please do not reply to this email, if you would like to reply to the sender please respond with your message to <a href="mailto:${data.email}?subject=Albion Touring Enquiry - ${data.queryType}">${data.email}</a>.</p>
      `,
  };

  const sendResponse = await sgMail.send(msg);

  res.json({
    status: sendResponse.status,
    message: 'Message sent succefully',
  });
};

export {};
