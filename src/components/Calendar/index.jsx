import React, { Component } from 'react';

export default class Calendar extends Component {
    render() {
        return (
            <div className="calendar card bg-dark shadow">
                <header className="card-header d-flex">
                    <div className="btn-group mr-3">
                        <button className="btn btn-light">
                            ❮
                        </button>
                        <button className="btn btn-light">
                            ❯
                        </button>
                    </div>

                    <div className="input-group">
                        <select className="form-control"></select>
                        <select className="form-control"></select>
                    </div>
                </header>
                <section className="card-body">
                    <table className="table">
                        <thead>
                            <tr></tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}