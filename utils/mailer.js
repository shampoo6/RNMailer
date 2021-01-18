import RNSmtpMailer from 'react-native-smtp-mailer/index';

class Mailer {
  sendMail;

  constructor() {
    this.sendMail = sendMail;
  }
}

const sendMail = (template) => {
  return new Promise((resolve) => {
    let result = false;
    RNSmtpMailer.sendMail({
      mailhost: template.smtp,
      port: '465',
      ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
      username: template.email,
      password: template.pwd,
      fromName: template.name, // optional
      // replyTo: 'usernameEmail', // optional
      recipients: template.to,
      bcc: template.cc.split(',').map((addr) => addr.trim()), // optional
      subject: template.subject,
      htmlBody: template.content + template.sign,
    })
      .then((success) => {
        console.log(success);
        result = true;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        resolve(result);
      });
  });
};

const mailer = new Mailer();

export default mailer;
