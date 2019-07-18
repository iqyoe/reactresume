import React, {Component} from 'react';
import './Skill.css'

class Experience extends Component {
    render () {
        return (
            <div id='experience' className='col-sm-12 col-md-6'>
                <p class="h2 text-white text-center mt-3 mb-3">EXPERIENCE</p>
                <div class="row">
                    <div class="col-sm-12 mt-3 wow slideInUp slow">
                        <div class="card">
                            <div class="card-body">
                                <p class="h4">Engineer Intern</p>
                                <p>PT. Mattel Indonesia <span class="badge badge-pill badge-primary">January 2019 - May 2019</span></p>
                                <p class="text-muted">Creating IoT Technology to gather data and insight about the production activity in manufacturing process.</p>
                                <p class="text-muted">Creating a SCADA desktop-based application to gather data, to process data, and monitor the machine.</p>
                                <p class="text-muted">Creating a Web Dashboard Application to give high-level insight about the manufacturing production.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 mt-3 wow slideInUp slow">
                        <div class="card">
                            <div class="card-body">
                                <p class="h4">Technology Intern</p>
                                <p>Accenture Indonesia <span class="badge badge-pill badge-primary">May 2018 - September 2019</span></p>
                                <p class="text-muted">Creating and managing technologies that are used in the project.</p>
                                <p class="text-muted">Create Web Dashboard Application to display data insight.</p>
                                <p class="text-muted">Processing raw log data into cleansed data by analyzing, sampling, and data classification. Storing and housekeeping data in the database using MySQL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;