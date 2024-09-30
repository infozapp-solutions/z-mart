import  emailjs  from '@emailjs/browser';

const emailSender = () => {

  const init = () => {
    emailjs.init({
      publicKey: `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`,
    });
  };

  const sendEmail = (props) => {
    const { email, name, link } = props;
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_RESET_PASSWORD_TEMPLATE_ID

    var templateParams = {
      to_email: email,
      to_name: name,
      reset_password_link: link
    };

    return new Promise((resolve, reject) => {
      emailjs.send(serviceId, templateId, templateParams).then((res) => {
        if(res.status === 200){
          const message = {
            status: "success",
            message: "Email sent, Kindly follow the instrctions in the email"
          }
          resolve(message);
        }
      }, (err) => {
        console.log(err);
        reject(err);
      })
    })
  }

  // const sendEmail = (props, cb) => {
  //   const { email, name, link } = props;
  //   const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  //   const templateId = process.env.REACT_APP_EMAILJS_RESET_PASSWORD_TEMPLATE_ID

  //   var templateParams = {
  //     to_email: email,
  //     to_name: name,
  //     reset_password_link: link
  //   };
    
  //   emailjs.send(serviceId, templateId, templateParams).then(
  //     (response) => {
  //       console.log('SUCCESS!', response.status, response.text);
  //     },
  //     (error) => {
  //       console.log('FAILED...', error);
  //     },
  //   );
  // }

  return {init, sendEmail}
};

export default emailSender;