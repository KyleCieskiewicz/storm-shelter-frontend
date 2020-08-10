import React, { Component } from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Shelter from './components/Shelter';

class App extends Component {
  state = {
    portfolioLinks: [
    {
      title: 'Concrete Storm Shelter',
      caption: 'Illustration'
    },
    {
      title: 'Garage Shelter',
      caption: 'Graphic Design'
    },
    {
      title: 'Steel Safe Room',
      caption: 'Identity'
    },
    {
      title: 'Underground Bunker',
      caption: 'Branding'
    }

  ]
};

render() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shelter" component={Shelter} />
        </Switch>

      </div>

    </Router>
  );
}
}

const Home = () => (

  <div>

    <header className="masthead" id="page-top">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in" style={{ color: 'white' }}>Welcome To Our Shelters!</div>
          <div className="intro-heading text-uppercase" style={{ color: 'white' }}>Why should you buy from us?</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services" style={{ backgroundColor: 'red', borderColor: 'red', color: "black" }}>Tell Me More</a>
        </div>
      </div>
    </header>


    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Twister Tales and Safety</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">The Tornado Tips</h4>
            <p className="text-muted">Click to below download our Timmy The Tornado – Tornado Tips Coloring Book. You can never be over prepared. Teach your kids these important procedures in case of a tornado touching down near you.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-shield fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Protecting your family from a tornado</h4>
            <p className="text-muted">So many have a fear of tornadoes and for a very good reason. These storms have the ability to destroy property and take lives. The good news is you can protect your family from these violent storms. By purchasing an F5 Storm Shelter you will see the quality that our...</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-question fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">How many people can my Storm Shelter or Safe Room hold?</h4>
            <p className="text-muted"> This depends on the size of the Storm Shelter or Safe Room. Underground Garage Tornado Shelters come in 4 sizes and can hold 4-16 people. Underground Cement Shelters come in 4 sizes and can hold 4-16 people. Safe Rooms come in 6 sizes and can hold 4-20 people.</p>
          </div>
        </div>
      </div>
    </section>


    <Portfolio></Portfolio>


    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 className="subheading">Location</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 className="subheading">Hours</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4 style={{ color: 'black' }}>Phone</h4>
                  <h5 style={{ color: 'black' }}>662-488-7664</h5>
                </div>


              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>


    <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit" style={{ backgroundColor: 'red', borderColor: 'red', color: "black" }}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>


    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; Your Website 2019</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#something">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#something">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>


);

export default App;
