import React, {Component} from 'react';
import './Skill.css'

class Skill extends Component {
    render () {
        return (
            <div id='skill' className='col-sm-12 col-md-6'>
                <p className="h2 text-center mt-3 mb-3">WHAT I DO</p>
                <div className="card-columns text-center">
                    {/* <!-- <div class="col-sm-12 col-md-6 mt-3 text-center wow slideInUp slow"> --> */}
                    <div className="card wow fadeIn" data-wow-duration='1s'>
                            <div className="card-body">
                                <p className="skill-icon"><i className="fas fa-desktop"></i></p>
                                <p className="h5">UX UI Design</p>
                                <p>
                                    <span className="badge badge-pill badge-primary">Adobe Photoshop</span>
                                    <span className="badge badge-pill badge-primary">Adobe Illustrator</span>
                                    <span className="badge badge-pill badge-primary">Invision</span>
                                    <span className="badge badge-pill badge-primary">User Persona</span>
                                </p>
                            </div>
                        </div>
                    {/* <!-- </div> --> */}
                    {/* <!-- <div class="col-sm-12 col-md-6 mt-3 text-center wow slideInUp slow"> --> */}
                        <div className="card wow fadeIn" data-wow-duration='1s'>
                            <div className="card-body">
                                <p className="skill-icon"><i className="fas fa-mobile-alt"></i></p>
                                <p className="h5">MOBILE APPLICATION DEV</p>
                                <p>
                                    <span className="badge badge-pill badge-primary">Java</span>
                                    <span className="badge badge-pill badge-primary">Android Studio</span>
                                    <span className="badge badge-pill badge-primary">MySQL</span>
                                    <span className="badge badge-pill badge-primary">SQL Server</span>
                                </p>
                            </div>
                        </div>
                    {/* <!-- </div> --> */}
                    {/* <!-- <div class="col-sm-12 col-md-6 mt-3 text-center wow slideInUp slow"> --> */}
                        <div className="card wow fadeIn" data-wow-duration='1s'>
                            <div className="card-body">
                                <p className="skill-icon"><i className="fas fa-desktop"></i></p>
                                <p className="h5">FRONTEND WEB DEV</p>
                                <p>
                                    <span className="badge badge-pill badge-primary">HTML5</span>
                                    <span className="badge badge-pill badge-primary">CSS3</span>
                                    <span className="badge badge-pill badge-primary">Javascript</span>
                                    <span className="badge badge-pill badge-primary">JQuery</span>
                                    <span className="badge badge-pill badge-primary">Bootstrap 4</span>
                                    <span className="badge badge-pill badge-primary">VueJS</span>
                                </p>
                            </div>
                        </div>
                    {/* <!-- </div> --> */}
                    {/* <!-- <div class="col-sm-12 col-md-6 mt-3 text-center wow slideInUp slow"> --> */}
                        <div className="card wow fadeIn" data-wow-duration='1s'>
                            <div className="card-body">
                                <p className="skill-icon"><i className="fas fa-database"></i></p>
                                <p className="h5">BACKEND WEB DEV</p>
                                <p>
                                    <span className="badge badge-pill badge-primary">PHP</span>
                                    <span className="badge badge-pill badge-primary">Code Igniter</span>
                                    <span className="badge badge-pill badge-primary">MySQL</span>
                                    <span className="badge badge-pill badge-primary">SQL Server</span>
                                    <span className="badge badge-pill badge-primary">Python</span>
                                    <span className="badge badge-pill badge-primary">Flask</span>
                                </p>
                            </div>
                        </div>
                    {/* <!-- </div> --> */}
                    {/* <!-- <div class="col-sm-12 col-md-6 mt-3 text-center wow slideInUp slow"> --> */}
                        <div className="card wow fadeIn" data-wow-duration='1s'>
                            <div className="card-body">
                                <p className="skill-icon"><i className="fas fa-chart-line"></i></p>
                                <p className="h5">DATA ENGINEER</p>
                                <p>
                                    <span className="badge badge-pill badge-primary">Python</span>
                                    <span className="badge badge-pill badge-primary">PowerBI</span>
                                    <span className="badge badge-pill badge-primary">MS Excel</span>
                                    <span className="badge badge-pill badge-primary">MySQL</span>
                                    <span className="badge badge-pill badge-primary">SQL Server</span>
                                    <span className="badge badge-pill badge-primary">Data Visualization</span>
                                </p>
                            </div>
                        </div>
                    {/* <!-- </div> --> */}
                </div>
            </div>
        );
    }
}

export default Skill;