import React, { Component } from 'react';
import Calendar from './components/Calendar';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 col-md-10 justify-content-center">
                        <Calendar />
                    </div>
                </div>
            </div>
     );
    }
}

export default App;
