import React, {Component} from 'react';
import './About.css'
import profilephoto from './profile.jpeg';

class Content extends Component {
    render () {
        return (
            <div className='container mt-3'>
                <div className='row ' id='about'>
                    <div className='col-sm-12 col-md-4 text-center'>
                        <img id='profilephoto' alt='Muhammad Iqbal Profile' className='img-fluid rounded-circle' src={profilephoto} />
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <p className="h2">ABOUT ME</p>
                        <p className="text-justify">I bring lines of codes into a product to give benefits and new experiences that the user will love. I love working with technology. Furthermore, I have experience in data science, SCADA, Arduino microcontroller, mobile application, and web application. I am open-minded and eager to learn new things and try new experiences.</p>
                    </div>
                    <div className='col-sm-0 col-md-4'>
                    <p className="h3">MY CONTACT</p>
                        <p><a className="fas fa-envelope mr-2" href=""></a>muhiqballukman@gmail.com</p>
                        <p><a className="fas fa-mobile-alt mr-2" href=""></a>+62 813-2281-1048</p>
                        <p className="social-link"><a className="fab fa-instagram ml-3 mr-3" href="http://intagram.com/niuxellefu"></a> <a className="fab fa-github ml-3 mr-3" href="http://www.github.com/iqyoe"></a> <a className="fab fa-linkedin ml-3 mr-3" href="https://www.linkedin.com/in/iqballukman/"></a> </p>
                        <a href="https://drive.google.com/open?id=1INkpE6eMaGRUv_E3TiTpqTLYRKGCqn-e" target="_blank" type="button" className="btn btn-outline-primary btn-sm waves-effect waves-light">Download Resume</a>
                        <a href="#contact" className="btn btn-primary waves-effect btn-sm waves-light">contact Me</a>
                    </div>
                </div>
                <div id='mouseScroll' className='row mt-5'>
                    <div className="col-12 text-center">
                        <a href='#skill'>
                            <div className="scroll-downs text-white">
                                <div className="mousey">
                                    <div className="scroller"></div>
                                </div>
                                <p>Know Me More</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
