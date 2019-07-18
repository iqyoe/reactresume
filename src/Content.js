import React, {Component} from 'react';
import './Content.css'

class Content extends Component {
    render () {
        return (
            <div className='container mt-3 text-white'>
                <div className='row text-center' id='home'>
                    <div className='col-sm-0 col-md-2'></div>
                    <div className='col-sm-12 col-md-8'>
                        <span className='greetDisplay'>Hi, I am</span><br/>
                        <span className='nameDisplay'>Muhammad Iqbal Lukman</span>
                    </div>
                    <div className='col-sm-0 col-md-2'></div>
                </div>
            </div>
        );
    }
}

export default Content;
