import React, { Component } from 'react';
import './App.css';
import ServiceSelect from './components/ServiceSelect';
import PlaceInput from './components/PlaceInput';
import HoursTable from './components/HoursTable';
import services from './data/services';
import sedes from './data/sedes';
import shedule from './data/schedule';
import DaysTable from './components/DaysTable';
import HeadArea from './components/HeadArea';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sede: '',
      service: '',
      shedule: [],
      day: '',
      intervals: []
    };
    this.getHorario = this.getHorario.bind(this);
    this.getDay = this.getDay.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    console.log(name)
    console.log(value)
    this.setState({ [name]: value })
  }

  async getDay(event) {
    await this.setState({ day: event.target.id })
    const hours = this.state.shedule.find(item => item.day === this.state.day).intervals;
    this.setState({ intervals: hours })
  }
  getHorario() {
    const { sede, service } = this.state;
    let result = shedule[sede];
    result = result[service];
    let days = Object.keys(result);
    let final = days.map(day => {
      return { day, intervals: result[day] }
    })
    console.log(final)
    this.setState({ shedule: final })
  }
  render() {
    return (
      <div className="container">
        <div className="card mb-3">
            <HeadArea title={'Agendar Cita'} />
            <div className="row justify-content-center p-sm-5 py-lg-3">
              <div className="col-12 col-xl-5">
                <ServiceSelect services={services} handleChange={this.handleChange} />
              </div>
              <div className="line d-none d-xl-block" />
              <div className="col-12 col-xl-4">
                <PlaceInput sedes={sedes} handleChange={this.handleChange} />
              </div>
            </div>
            <div className="d-flex justify-content-center my-3">
              <button onClick={this.getHorario} type="button" className=" btn btn-primary">{'Buscar Disponibilidad'}</button>
            </div>
        </div>
        <div className="card">
          <HeadArea title={'Tilt Test'} />
          <div className="row justify-content-center p-4">
            <div className="col-sm-12 col-lg-2">
              <DaysTable days={this.state.shedule} getDay={this.getDay} />
              <br />
            </div>
            <div className="col-sm-12 col-lg-8">
              {this.state.intervals.map((interval, index) =>
                <div className="table-responsive">
                  <HoursTable key={index} hours={interval.interval} />
                </div>)}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
