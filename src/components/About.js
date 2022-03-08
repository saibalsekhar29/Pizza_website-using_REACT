import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO PIZZA STOP</h1>
            <p>
            The pizza has been around for centuries. 
            But the modern Pizza, 
            that we know and love,
             traces its history to Naples in Italy where they used to create dishes out of Flatbread which was often topped with
              ingredients such as garlic, salt, cheese,Mozzarella cheese and basil.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
