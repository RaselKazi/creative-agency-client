import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact" style={{ height: '500px', background: '#FBD062' }}>
           <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 offset-md-1 mt-5">
                        <h2 className="mb-5">Let us handle your <br /> project, professionally.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur voluptate at autem. Dolorem recusandae architecto nam provident! Repellendus inventore ipsa</p>
                    </div>
                    <div className="col-md-6 offset-md-1 mt-5">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your email address " />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name / company’s name " />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="25" rows="5" placeholder="Your message "></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-dark px-5"> Send </button>
                            </div>
                        </form>
                    </div>
               </div>
           </div>
       </section>
    );
};

export default Contact;