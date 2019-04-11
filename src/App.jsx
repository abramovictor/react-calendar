import React, { Component } from 'react';
import Calendar from './components/Calendar';

class App extends Component {
    state = {
        date: null
    };

    handleDateChange = date => this.setState({ date });

    render() {
        const { date } = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center pt-5">
                    <div className="col-xl-6 col-lg-8 col-md-10 pt-5">
                        {date &&
                            <div className="card bg-dark text-light">
                                <header className="card-header"><strong>Выбранная дата:</strong> {date.toLocaleDateString()}</header>
                            </div>
                        }
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
