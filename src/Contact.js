import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component{
    render(){
        return(
        <div class="container mt-5" id="contact">
            <div class="row p-3">
               <div class="col-12 text-center">
                   <h1>Give me a message !</h1>
               </div>
               <div class="col-12">
                   <form action="" id="contactForm">
                        
                        <label for="">Name</label>
                        <input type="text" id="contactName" name="contactName" class="form-control mb-4" placeholder="Your Name"/>

                        
                        <label for="">Email</label>
                        <input type="email" id="contactEmail" name="contactEmail" class="form-control mb-4" placeholder="Your E-mail"/>

                       
                        <label>Subject</label>
                        <input type="text" id="contactSubject" name="contactSubject" class="form-control mb-4" placeholder="Subject Title"/>
                        
                        <label for="">Message</label>
                        <div class="form-group">
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Your Message Here"></textarea>
                        </div>
                        
                        <button class="btn btn-primary btn-block" id="sendContact">Send</button>

                   </form>
               </div>
            </div>
        </div>
        );
    }
}

export default Contact;