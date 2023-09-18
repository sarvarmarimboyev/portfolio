import React, { useState } from "react";
import "./service.css";
const Services = () => {
  const [toggleState,setToggleState]=useState(0);
  const toggleTab=(index)=>{
    setToggleState(index);
  }
   
  return (
    <section className="services section" id="service">
      <h2 className="section__title">Services </h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid service__icon"></i>
            <h3 className="services__title">Product <br /> Desiner</h3>
          </div>
          <span className="services__button" onClick={()=>toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right service__button-icon"></i>
          </span>
          <div className={toggleState===1? "services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
              <i  onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                Services with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="service_modal-services grid">
                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web page development
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Design abd mockups of products for companies.
                  </p>
                </li>
           
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow service__icon"></i>
            <h3 className="services__title">Ux Ui <br /> Designer</h3>
          </div>
          <span className="services__button">
            View More
            <i className="uil uil-arrow-right service__button-icon"></i>
          </span>
          <div className="services__modeal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                Services with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="service_modal-services grid">
          
                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web page development
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Design abd mockups of products for companies.
                  </p>
                </li>
           

              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit service__icon"></i>
            <h3 className="services__title">Visual <br />Designer</h3>
          </div>
          <span className="services__button">
            View More
            <i className="uil uil-arrow-right service__button-icon"></i>
          </span>
          <div className="services__modeal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                Services with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="service_modal-services grid">
          
                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web page development
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="ui uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Design abd mockups of products for companies.
                  </p>
                </li>
           

              </ul>
            </div>
          </div>
        </div>

     





      </div>
    </section>
  );
};

export default Services;
