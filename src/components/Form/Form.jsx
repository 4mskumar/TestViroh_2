import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const handleEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
      'service_v923j7b',
      'template_mw0g7b2',
      form.current,
      {
        publicKey: 'ucw1cGt-BkL4zgxhQ',
      }
    )
      .then(() => {
        setIsLoading(false);
        setToast({ show: true, message: 'Message sent successfully!', type: 'success' });
        form.current.reset();
      }, (error) => {
        setIsLoading(false);
        setToast({ show: true, message: 'Failed to send message. Please try again.', type: 'error' });
        console.error(error.text);
      });

    // Hide toast after 3s
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  return (
    <>
      <h1 className='text-4xl font-dm font-semibold tracking-tight text-navy/90'>
        Working Together To Make Difference
      </h1>

      <form ref={form} onSubmit={handleEmail} className='mt-4 flex flex-col gap-4'>
        <input type="text" name="userName" placeholder='Name'
          className='w-full bg-slate-200/80 outline-none rounded-lg placeholder:text-navy font-inter py-3 pl-5 text-black' />

        <input type="email" name="userEmail" placeholder='Email'
          className='w-full bg-slate-200/80 outline-none rounded-lg placeholder:text-navy font-inter py-3 pl-5 text-black' />

        <input type="text" name="userMobile" placeholder='Mobile No'
          className='w-full bg-slate-200/80 outline-none rounded-lg placeholder:text-navy font-inter py-3 pl-5 text-black' />

        <input type="text" name="subject" placeholder='How can we help you?'
          className='w-full bg-slate-200/80 outline-none rounded-lg placeholder:text-navy font-inter py-3 pl-5 text-black' />

        <textarea name="body" placeholder='Write your message'
          className='resize-none text-black outline-none bg-slate-200/80 px-5 py-3 rounded-lg w-full h-32 placeholder:text-navy placeholder:italic'></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className='bg-mustard hover:bg-yellow-600 transition-colors duration-300 text-white font-inter tracking-tighter font-semibold px-5 py-3 w-fit rounded-lg flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed'
        >
          {isLoading ? (
            <span className="loader w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            'SEND MESSAGE'
          )}
        </button>
      </form>

      {/* Toast */}
      {toast.show && (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-md text-white font-medium transition-all duration-500 animate-fadeInUp z-50
          ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          {toast.message}
        </div>
      )}

      {/* Toast animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out;
        }

        .loader {
          border-width: 3px;
        }
      `}</style>
    </>
  );
};

export default Form;
