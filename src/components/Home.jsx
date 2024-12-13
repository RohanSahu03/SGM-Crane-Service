import React, { useEffect, useRef, useState } from "react";
import "../css/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { RxCross2 } from "react-icons/rx";
import { TbCarCrane } from "react-icons/tb";
function Home() {
  useEffect(() => {
    AOS.init({ duration: "900" });
  }, []);
  const myRef = useRef();
  const myRef2 = useRef();

  const closeCard = () => {
    myRef.current.style.visibility = "hidden";
  };
  return (
    <>
      <div className="firstPart">
        <div class="row myRow ">
          <div class="col-md-12 mb-4 myCol ">
            <h1 data-aos="flip-up" style={{color:'white'}}>
              Mobile Crane at Your Service
            </h1>
          </div>
          <div class="col-md-6">
            <h5 className="h5" ref={myRef2}>
              Lifting Your Expectations, One Crane at a Time{" "}
            </h5>
          </div>
          <div
            class="col-md-6  d-flex justify-content-center align-item-center"
            ref={myRef}
          >
            <div className="mycard" data-aos="flip-up">

              <span onClick={closeCard}>
                <RxCross2 className="crossBtn" />
              </span>
              <div className="origin">
                <br />
                <label htmlFor="">ORIGIN CITY *</label>
                <input type="text" placeholder="Banglore, KA" />
              </div>
              <br />
              <div className="destination">
                <label htmlFor="">DESTINATION CITY *</label>
                <input type="text" placeholder="Hyderabad,TL" />
              </div>
              <br />
              <button class="bn-32 bn32">Search</button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="firstPart d-flex justify-content-center">
        <img src="../images/crane2.jpg" alt="" srcset="" />
        <div class="row myRow">
          <div class="col-lg-12 mb-4">
            <h1>Crane Shipping Services</h1>
            <h5>
              Specializing in heavy in euipment transport & machinery shipping{" "}
            </h5>
          </div>
          <div class="col-lg-12 d-flex justify-content-center">
            <div className="mycard">
              <div className="origin">
                <br />
                <label htmlFor="">ORIGIN CITY *</label>
                <input type="text" placeholder="Banglore, KA" />
              </div>
              <br />
              <div className="destination">
                <label htmlFor="">DESTINATION CITY *</label>
                <input type="text" placeholder="Hyderabad,TL" />
              </div>
              <br />
              <button class="bn-32 bn32">Search</button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div> */}

      <div class=" heavyEquipment p-3">
        <div class="left">
          <h1 data-aos='slide-right'>Discover the Power of Mobility</h1>

          <p className="p">
            At SGM Crane Service, we specialize in delivering top-tier crane
            solutions tailored to meet your unique needs. Whether you're
            planning a large-scale construction project or require reliable
            lifting services for industrial operations, we are here to exceed
            your expectations. we have established ourselves as a trusted leader
            in crane rental, heavy lifting, and specialized rigging services.
            Whether you're tackling a large-scale construction project or
            managing complex industrial operations. Our mobile cranes are
            capable of lifting heavy loads with precision, whether for
            construction, industrial, or logistical applications.
          </p>
        </div>
        <div className="right">
          <img
            src="../images/craneImg3removebg.png"
            alt=""
            srcset=""
            className="truckImg"
            data-aos="fade-up"
          />
          <br />
        </div>
      </div>

      <br />

      <div className="container ">
      <h1 data-aos='slide-right'>Mobile Cranes</h1>
        <div className="row logoRow">
          <p className="paragraph smgLogo">
            Mobile cranes represent a pinnacle of versatility in the
            construction and logistics industries, offering unparalleled
            mobility combined with robust lifting capabilities. These cranes are
            indispensable tools on job sites where flexibility and efficiency
            are paramount.
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 my-3">
            <div className="myCard2">
              <div className="hline"></div>
              <h5 style={{ marginTop: "10px" }}>Adaptable Design</h5>
              <p>
                Mobile cranes are designed to be easily transported from one
                location to another, making them ideal for projects requiring
                frequent repositioning. They are mounted on wheeled chassis or
                crawlers, allowing them to navigate various terrains and access
                hard-to-reach areas.
              </p>
              <div className="hline"></div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className="myCard2">
              <div className="hline"></div>
              <h5 style={{ marginTop: "10px" }}>Multiple Configurations</h5>
              <p>
                Depending on the specific requirements of a project, mobile
                cranes come in a variety of configurations including telescopic
                boom cranes, lattice boom cranes, and truck-mounted cranes. This
                versatility ensures that there is a suitable option for lifting
                tasks ranging from light to heavy loads.
              </p>
              <div className="hline"></div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className="myCard2">
              <div className="hline"></div>
              <h5 style={{ marginTop: "10px" }}>Quick Setup</h5>
              <p>
                {" "}
                Unlike stationary cranes, mobile cranes can be set up relatively
                quickly, minimizing downtime and maximizing productivity on the
                job site. This efficiency makes them indispensable for both
                planned construction projects and emergency response situations.
              </p>
              <div className="hline"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 
      <div className="secondPart">
        <div className="leftImg">
        <img
            src="../images/crane1.jpg"
            alt=""
            srcset=""
            className="craneImg"
          />
        </div>
        <div className="rightContent">
        <h1 className="h2">
            HOW TO SHIP CRANES WITH HEAVY EQUIPMENT TRANSPORT
          </h1>
          <p>
            The first step on your crane delivery journey with Heavy Equipment
            Transport will involve a comprehensive assessment of your crane
            transport and delivery requirements. We'll take into account
            shipping origin and destination, size, weight, and schedule, to
            determine the best crane delivery method. Paperwork for customs and
            weigh stations are completed before we collect the heavy equipment,
            to ensure there are no delays. You can trust the team at Heavy
            Equipment Transport to ship a crane at any time of year, contact us
            to get started. Call now! (888) 730-2951
          </p>
        </div>
        </div> */}
        <div className="servicePart">
        <h1 data-aos='slide-right'>Common Types of Crane Service Includes</h1>
        <div className="innerDiv">
          <div className="d-flex flex-column my-3 " data-aos="fade-up">
            <div className="headingPart">
              <h5>Construction and Building Projects</h5>
            </div>
            <div className="contentPart">
              <ul className="serviceList">
                <li>Material Handling</li>
                <li>Structural Erection</li>
                <li>Equipment Installation</li>
                <li>Demolition Support</li>
              </ul>
            </div>
          </div>

          <div className="d-flex flex-column my-3 " data-aos="fade-up">
            <div className="headingPart">
              <h5>Infrastructure Development</h5>
            </div>
            <div className="contentPart">
              <ul className="serviceList">
                <li>Road and Bridge Construction</li>
                <li>Utility Installation</li>
                <li>Railway Projects</li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column my-3 " data-aos="fade-up">
            <div className="headingPart">
              <h5>Manufacturing and Industrial Applications</h5>
            </div>
            <div className="contentPart">
              <ul className="serviceList">
                <li>Factory Operations</li>
                <li>Container Handling</li>
                <li>Maintenance and Repair</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="thirdPart">
        <div className="imgDiv">
          <img
            src="../images/craneImg1removebg.png"
            alt=""
            srcset=""
            className="craneImg1"
            data-aos="fade-up"
          />
        </div>
        <div className="contentDiv">
          <h1 data-aos='slide-right'>Versatile Applications of Mobile Cranes</h1>
          <ul className="ul">
            <li data-aos="flip-up"> Heavy Lifting</li>
            <li data-aos="flip-up">Precision Placement</li>
            <li data-aos="flip-up">Rigging Services</li>
            <li data-aos="flip-up">Material Handling</li>
            <li data-aos="flip-up">Structural Erection</li>
            <li data-aos="flip-up">Equipment Installation</li>
          </ul>
        </div>
      </div>

      {/* <div class="row w-100 justify-content-center px-5 flex-column">
        <div class="col-md-6 d-flex mt-4 w-100 px-5 justify-content-center">
          <img
            src="../images/crane1.jpg"
            alt=""
            srcset=""
            className="craneImg"
          />
        </div>
        <div class="col-md-6 mt-4 d-flex w-100 px-5 justify-content-center flex-column">
          <h1 className="h1">
            HOW TO SHIP CRANES WITH HEAVY EQUIPMENT TRANSPORT
          </h1>
          <p>
            The first step on your crane delivery journey with Heavy Equipment
            Transport will involve a comprehensive assessment of your crane
            transport and delivery requirements. We'll take into account
            shipping origin and destination, size, weight, and schedule, to
            determine the best crane delivery method. Paperwork for customs and
            weigh stations are completed before we collect the heavy equipment,
            to ensure there are no delays. You can trust the team at Heavy
            Equipment Transport to ship a crane at any time of year, contact us
            to get started. Call now! (888) 730-2951
          </p>
        </div>
      </div> */}

      {/* <div class="row w-100 justify-content-center">
        <div class="col-md-6 d-flex mt-4 w-100  justify-content-center">
      <img src="../images/craneIllustraion.png" alt="" srcset=""  className="craneImg1"/>
        </div>
        <div class="col-md-6 mt-4 d-flex w-100 justify-content-center flex-column">
          <h1 className="h1">
          COMMON TYPES OF CRANE TRANSPORT
          </h1>
          <ul className="ul">
            <li>Truck-Mounted Cranes</li>
            <li>Rough-Terrain Cranes</li>
            <li>Crawler Cranes</li>
            <li>All-Terrain Cranes</li>
            <li>Pick-and-Carry Cranes</li>
            <li>SideLifter Crane</li>
        </ul>
        </div>
      </div> */}

      

      <img
        src="../images/bgfootertop.jpg"
        alt=""
        srcset=""
        className="footerImg"
        data-aos="fade-up"
      />
      <br />
    </>
  );
}

export default Home;
