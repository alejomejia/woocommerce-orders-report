import nodemailer from 'nodemailer';

import {
  SMTP_EMAIL_HOST,
  SMTP_EMAIL_USERNAME,
  SMTP_EMAIL_PASSWORD,
} from './const.js';

export const transporter = nodemailer.createTransport({
  host: SMTP_EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_EMAIL_USERNAME,
    pass: SMTP_EMAIL_PASSWORD,
  },
});
