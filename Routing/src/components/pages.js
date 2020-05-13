import {NavLink, Route} from "react-router-dom";
import {MainMenu, AboutMenu, HomeMenu} from "./menus";
import React from "react";
import '../stylesheets/pages.scss';

const PageTemplate = ({children}) => (
   <div className="pageTemplate">
      <MainMenu className="pageTemplate__mainMenu"/>
      <div className="pageTemplate__mainArea">
         {children}
      </div>
   </div>
)

export const Home = () => (
   <div className="home">
      <h1 className="home__title">[Company website]</h1>
      <HomeMenu className="home__menu"/>
   </div>
)

export const About = () => (
   <PageTemplate>
      <section className="about">
         <Route component={AboutMenu}/>
         <Route exact path="/about" component={Company}/>
         <Route path="/about/history" component={History}/>
         <Route path="/about/services" component={Services}/>
         <Route path="/about/location" component={Location}/>
      </section>
   </PageTemplate>
)

const Company = () => (
   <section className="company">
      <h2>About the Company</h2>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
         Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
         Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
         sodales ligula in libero.
      </p>
      <p>
         Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
         In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
         nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
         quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
         nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
         nostra, per inceptos himenaeos.
      </p>
   </section>
)

const History = () => (
   <section className="history">
      <h2>Our History</h2>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
         Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
         Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
         sodales ligula in libero.
      </p>
      <p>
         Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
         In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
         nunc egestas porttitor.
      </p>
      <p> Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
         quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
         nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
         nostra, per inceptos himenaeos.
      </p>
   </section>
)

const Services = () => (
   <section className="services">
      <h2>Our Services</h2>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
         Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
         Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
         sodales ligula in libero.
      </p>
      <p>
         Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
         In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
         nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
         quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
         nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
         nostra, per inceptos himenaeos.
      </p>
   </section>
)

const Location = () => (
   <section className="location">
      <h2>Our Location</h2>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
         Sed cursus ante dapibus diam.
      </p>
      <p>
         Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
         Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
         sodales ligula in libero.
      </p>
      <p>
         Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
         In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
         nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
         quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
         nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
         nostra, per inceptos himenaeos.
      </p>
   </section>
)

export const Events = () => (
   <PageTemplate>
      <div className="events">
         <h1>[Events Calendar]</h1>
      </div>
   </PageTemplate>
)

export const Products = () => (
   <PageTemplate>
      <div className="products">
         <h1>[Products]</h1>
      </div>
   </PageTemplate>
)

export const Contact = () => (
   <PageTemplate>
      <div className="contact">
         <h1>[Contact]</h1>
      </div>
   </PageTemplate>
)

export const Woops404 = ({location}) => (
   <PageTemplate>
      <h1>Sorry, resource not found at {location.pathname}</h1>
   </PageTemplate>
)