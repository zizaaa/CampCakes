import React from 'react'

function ContactUs() {
    return (
        <section className='pb-10'>
            <div className='relative w-full bg-[url(./heroBG3.jpg)] flex items-center justify-center h-60 bg-cover bg-fixed bg-no-repeat bg-center'>
                <span className='absolute pointer-events-none left-0 right-0 top-0 bottom-0 bg-black opacity-50'></span>
                <h1 className='text-white text-5xl text-center z-10'>Contact Us</h1>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-5'>
                <form className='flex flex-col'>
                    <h1 className='text-2xl mb-2'>Get in touch</h1>
                    <label htmlFor='name' className='text-slate-500 font-medium'>Name</label>
                    <input type='text' id='name' className='focus:ring-transparent outline-none rounded-md focus:border-slate-300 border-slate-300 mt-1 border-[1px] text-slate-500' required/>

                    <label htmlFor='email' className='text-slate-500 font-medium mt-5'>Email</label>
                    <input type='text' id='email' className='focus:ring-transparent outline-none rounded-md focus:border-slate-300 border-slate-300 mt-1 border-[1px] text-slate-500' required/>

                    <label htmlFor='message' className='text-slate-500 font-medium mt-5'>Message</label>
                    <textarea name="message" id="message" className='focus:ring-transparent outline-none rounded-md focus:border-slate-300 border-slate-300 mt-1 border-[1px] min-h-28 max-h-28 text-slate-500' required></textarea>

                    <button className='bg-pink text-white font-medium mt-5 py-2 rounded-md drop-shadow-md'>Send</button>
                    
                </form>
                <div>
                    <h1 className='text-2xl mb-2'>Let's talk about everything.</h1>
                    <p className='text-slate-500'>Have a question, a custom order in mind, or just want to say hello? We'd love to hear from you! Feel free to get in touch using the contact form below, and we'll get back to you as soon as possible.</p>
                </div>
            </div>
        </section>
    )
}

export default ContactUs