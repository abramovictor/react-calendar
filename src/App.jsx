import React, { Component } from 'react';
import Calendar from './components/Calendar';

class App extends Component {
    state = {
        date: null
    };

    handleDateChange = date => this.setState({ date });

    render() {
        let date = this.state.date ? this.state.date : new Date();

        return (
            <div className="container">
                <div className="row justify-content-center pt-5">
                    <div className="col-xl-6 col-lg-8 col-md-10 pt-5">
                        <div className="card bg-dark text-light rounded-0">
                            <header className="card-header border-bottom-0 rounded-0"><strong>Выбранная дата:</strong> {date.toLocaleDateString()}</header>
                        </div>
                        <Calendar
                            onChange={this.handleDateChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
