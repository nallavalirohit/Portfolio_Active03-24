import React, { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { injectStyle } from "react-toastify/dist/inject-style";

const notify = () => {
    toast('📨 Message Sent!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        injectStyle();
}

const Contact = () => {
  const initialValues = {
    user_name: '',
    user_email: '',
    message: ''
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(event){
    const {name, value} = event.target;
    setFormValues({...formValues, [name]:value});
  }

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
      emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          setFormValues(initialValues);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  }, [formErrors, isSubmit])

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!values.user_name){
      errors.user_name = "Username is required!";
    }
    if(!values.user_email){
      errors.user_email = "Email is required!";
    }else if(!emailRegex.test(values.user_email)){
      errors.user_email = "Not a valid email address.";
    }
    if(!values.message){
      errors.message = "Cannot be empty.";
    }
    return errors;
  }

  const form = useRef();

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // }

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(formValues));
  };
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="spacer w-full">&#160;</div>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Don't feel shy to reach out!</p>
        </div>

        <div className="flex justify-center items-center">
          <form ref={form} onSubmit={sendEmail} action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name..."
              value={formValues.user_name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <p className="text-rose-500">{formErrors.user_name}</p>
            <input
              type="text"
              name="user_email"
              placeholder="Enter your email..."
              value={formValues.user_email}
              onChange={handleChange}
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <p className="text-rose-500">{formErrors.user_email}</p>
            <textarea
              name="message"
              rows="10"
              placeholder="Please type here..."
              value={formValues.message}
              onChange={handleChange}
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <p className="text-rose-500">{formErrors.message}</p>
            <button value="Send" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
