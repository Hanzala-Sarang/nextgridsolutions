import nodemailer from 'nodemailer';

type EmailData = {
  name: string;
  email: string;
  message: string;
  service?: string;
};

export async function sendEmail(data: EmailData) {
  const { name, email, message, service } = data;

  // Create a test SMTP service (for production, use actual credentials)
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true' ? true : false,
    auth: {
      user: process.env.EMAIL_USER || 'ethereal.user',
      pass: process.env.EMAIL_PASS || 'ethereal.password',
    },
  });

  // Email subject based on whether it's a general inquiry or service-specific quote
  const subject = service 
    ? `Quote Request for ${service} from ${name}`
    : `New Contact from ${name} via NextGrid Solutions Website`;

  // Email content with all the details
  const mailContent = {
    from: `"NextGrid Solutions Contact" <${process.env.EMAIL_FROM || 'noreply@nextgridsolutions.com'}>`,
    to: process.env.EMAIL_TO || 'contact@nextgridsolutions.com',
    subject,
    text: `
      Name: ${name}
      Email: ${email}
      ${service ? `Service: ${service}` : ''}
      Message: ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #1F4FFF;">${subject}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailContent);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: (error as Error).message || 'Failed to send email' 
    };
  }
}