import React, { Component } from 'react';
import Calendar from './components/Calendar';


class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center pt-5">
                    <div className="col-xl-6 col-lg-8 col-md-10 pt-5">
                        <Calendar />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
