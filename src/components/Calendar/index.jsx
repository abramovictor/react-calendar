import React, { Component } from 'react';
import classnames from 'classnames';
import * as calendar from './calendar';

export default class Calendar extends Component {
    static defaultProps = {
        onChange: Function.prototype,

        date: new Date(),
        years: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        buttonMonthNames: {
            next: 'Следующий месяц',
            prev: 'Предыдущий месяц',
        },
        weekDayNames: [
            {
                short: 'Пн',
                full: 'Понедельник'
            },
            {
                short: 'Вт',
                full: 'Вторник'
            },
            {
                short: 'Ср',
                full: 'Среда'
            },
            {
                short: 'Чт',
                full: 'Четверг'
            },
            {
                short: 'Пт',
                full: 'Пятница'
            },
            {
                short: 'Сб',
                full: 'Суббота'
            },
            {
                short: 'Вс',
                full: 'Воскресенье'
            }
        ]
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    };

    get month() {
        return this.state.date.getMonth();
    };

    get day() {
        return this.state.date.getDate();
    };

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);
        this.setState({ date });
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);
        this.setState({ date });
    };

    handleDayClick = (date) => {
        this.setState({ selectedDate: date });
        this.props.onChange(date);
    };

    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;
        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div className="calendar card bg-dark shadow">
                <header className="card-header d-flex">
                    <div className="btn-group mr-3">
                        <button
                            className="btn btn-light"
                            title={this.props.buttonMonthNames.prev}
                            onClick={this.handlePrevMonthButtonClick}>

                            {'❮'}</button>
                        <button
                            className="btn btn-light"
                            title={this.props.buttonMonthNames.next}
                            onClick={this.handleNextMonthButtonClick}>

                            {'❯'}</button>
                    </div>

                    <div className="input-group">
                        <select
                            value={this.month}
                            ref={element => this.monthSelect = element}
                            onChange={this.handleSelectChange}
                            className="form-control btn-light">
                            
                            {monthNames.map((name, index) =>
                                <option key={name} value={index}>{name}</option>
                            )}
                        </select>
                        <select
                            value={this.year}
                            ref={element => this.yearSelect = element}
                            onChange={this.handleSelectChange}
                            className="form-control btn-light">
                            
                            {years.map(year =>
                                <option key={year} value={year}>{year}</option>
                            )}
                        </select>
                    </div>
                </header>
                <section className="card-body">
                    <table className="table table-bordered table-dark text-center">
                        <thead>
                            <tr>
                                {weekDayNames.map(({ short: name }) =>
                                    <th key={name}>{name}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {monthData.map((week, index) =>
                                <tr key={index}>
                                    {week.map((date, index) => date ?
                                        <td className="p-1" key={index}>
                                            <button
                                                className={classnames('btn h-100 w-100', {
                                                    'text-muted': date.getMonth() !== this.month,
                                                    'border border-light': calendar.isEqual(date, currentDate),

                                                    'btn-light': calendar.isEqual(date, selectedDate),
                                                    'btn-dark': !calendar.isEqual(date, selectedDate)
                                                })}
                                                onClick={() => this.handleDayClick(date)}>

                                                {date.getDate()}</button>
                                        </td> :
                                        <td key={index} />
                                    )}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}