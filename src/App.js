import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Button, Spinner} from 'react-bootstrap'

import Result from './components/Result'


class App extends React.Component{
  state ={
    city: "",
    weather: "*result will be here*"
  }

  onChange = (e) => this.setState({ [e.target.name] : e.target.value });

  onSubmit = async (e) => {
    e.preventDefault()
    this.setState({ weather : "" })
    await axios.post('https://flask-backend-testing.herokuapp.com/api', {city: this.state.city})
    .then(response => this.setState({ weather : response.data }))
  }

  render(){
    return (
      <div style={styles.mainBodyStyle}>
          <Container style={styles.contentStyle} fluid>
              <h1>How's the weather in?</h1>
              <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                  <input 
                      type = "text"
                      name = "city"
                      className="form-control"
                      placeholder = "City ..."
                      value = {this.state.city}
                      onChange = { this.onChange }
                      required
                      />
                  </div>
                  <Button type="submit" size="md" variant="primary" block>Let's see...</Button>
               </form>
               </Container>

               {
                 this.state.weather === ""?
                  <div className="text-center"><Spinner animation="grow" variant="light" /></div>
                  : <Result weather={this.state.weather} />
               }
          
      </div>
    );
  }
}

const styles = {
  mainBodyStyle: {
    background: 'linear-gradient(to bottom, #3a1c71, #d76d77, #ffaf7b)',
    minHeight: '100vh',
    paddingTop: '10vh',
    
    paddingLeft: '15vw',
    paddingRight: '15vw',
  },
  contentStyle: {
    textAlign: 'center',
    color: 'white',
    marginBottom: "5vh",
  }
}

export default App;
