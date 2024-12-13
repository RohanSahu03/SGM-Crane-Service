import React, { useRef } from "react";
import "../css/service.css";
import { Container } from "reactstrap";

function Service() {
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);
  const targetRef5 = useRef(null);
  const targetRef6 = useRef(null);

  const handleClick1 = () => {
    const targetElement = targetRef1.current;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClick2 = () => {
    const targetElement = targetRef2.current;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClick3 = () => {
    const targetElement = targetRef3.current;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClick4 = () => {
    const targetElement = targetRef4.current;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClick5 = () => {
    const targetElement = targetRef5.current;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClick6 = () => {
    const targetElement = targetRef6.current;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Container fluid>
        <div className="globalTransport pt-3">
          {/* <div className="left">
<img src="../images/mapwithtruck.jpg" alt="" srcset="" />
    </div> */}
          <div className="right">
            <h1>Explore Our Diverse Crane Services</h1>
            <p>
              We offer a comprehensive range of crane solutions to support your
              projects with precision and reliability. With 10 years of
              experience in the industry, we specialize in providing mobile
              crane services that meet the diverse needs of construction,
              industrial, and logistical sectors. With a commitment to
              excellence and safety, we provide a wide range of solutions
              designed to meet the unique requirements of construction,
              industrial, and logistical projects. Whether you need expert heavy
              lifting capabilities or specialized rigging services.
            </p>
          </div>
        </div>
      </Container>
      <br />
      {/* <h1>Our Services</h1>
   <div class="container">
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col d-flex justify-content-center align-items-center">
        <div class="box">
        <div class="myCard">
        <h5>Heavy Lifting</h5>
        <p>
        Our expertise in heavy lifting enables us to handle even the most challenging lifting tasks with precision and safety. Whether you need to lift heavy machinery, structural components, or materials for industrial projects.
        </p>
    </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center align-items-center">
        <div class="box">
        <div className="myCard">
    <h5>Rigging Services</h5>
    <p>We provide comprehensive rigging services to secure and stabilize loads during lifting operations. Our rigging experts ensure that all lifts are conducted safely and efficiently, minimizing risks and ensuring compliance with safety standards.</p>
  
    </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center align-items-center">
        <div class="box">
        <div className="myCard">
    <h5>Material Handling</h5>
    <p>Lifting and positioning construction materials such as steel beams, precast concrete panels, and roofing materials.</p>
 
    </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center align-items-center">
        <div class="box">
        <div class="myCard">
        <h5>Equipment Installation</h5>
        <p>
        Installing heavy machinery, HVAC units, and other equipment at construction sites.
        </p>
    </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center align-items-center">
        <div class="box">
        <div className="myCard">
  <h5>Emergency Services</h5>
    <p>In urgent situations, we offer rapid response and emergency crane services to assist with critical lifts, accident recovery, or unforeseen circumstances. Our team is available 24/7 to address your immediate needs promptly and efficiently.</p>
 
  </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center align-items-center">
        <div class="box">
        <div className="myCard">
    <h5>Delivery assistance service</h5>
    <p>If you need help unloading your freight, we're here to provide. Heavy Equipment Transport helps with offloading by utilizing cranes, ramps, or whatever is needed. We provide delivery assistance solutions for all equipment and machinery.</p>
 
    </div>
        </div>
      </div>
      </div>
      </div> */}

      <div className="container">
        <div className="row d-flex justify-content-around mb-3">
          <div className="topics">
            <div className="topic" onClick={handleClick1}>
              <h6>Heavy Lifting</h6>
            </div>
            <div className="topic" onClick={handleClick2}>
              <h6> Rigging Services</h6>
            </div>
            <div className="topic" onClick={handleClick3}>
              <h6> Material Handling</h6>
            </div>
            <div className="topic" onClick={handleClick4}>
              <h6> Equipment Installation</h6>
            </div>
            <div className="topic" onClick={handleClick5}>
              <h6>Railway Projects</h6>
            </div>
            <div className="topic" onClick={handleClick6}>
              <h6> Structural Erection</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 overflow-hidden">
            <img
              src="../images/liftingCrane.jpg"
              alt=""
              srcset=""
              className="serviceImg"
            />
          </div>
          <div className="col-md-9">
            <div className="columnContent" ref={targetRef1}>
              <h5 className="head5">Heavy Lifting</h5>
              <p className="paragraph">
                Heavy lifting crane services are indispensable for industries
                requiring robust solutions for handling large-scale and
                heavy-duty lifting challenges. From meticulous planning to
                precise execution, these services provide the expertise,
                equipment, and safety measures necessary to achieve project
                success. Whether in construction, energy, manufacturing, or
                beyond, heavy lifting crane services are pivotal in driving
                efficiency and safety in complex lifting operations.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3  overflow-hidden">
            <img
              src="../images/rigging.jpg"
              alt=""
              srcset=""
              className="serviceImg"
            />
          </div>
          <div className="col-md-9">
            <div className="columnContent" ref={targetRef2}>
              <h5 className="head5">Rigging Service</h5>
              <p className="paragraph">
                Rigging services are indispensable for industries requiring
                meticulous planning, specialized equipment, and expert execution
                in lifting operations. By providing precision, safety, and
                efficiency, these services contribute to the successful
                completion of complex projects across construction, energy,
                manufacturing, and beyond. Rigging professionals play a vital
                role in ensuring that heavy loads are handled with care and
                precision, enhancing operational efficiency and safety in
                diverse industrial applications.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-3  overflow-hidden">
          <img
              src="../images/materialHandling.jfif"
              alt=""
              srcset=""
              className="serviceImg"
            />
          </div>
          <div className="col-md-9">
            <div className="columnContent" ref={targetRef3}>
              <h5 className="head5">Material Handling</h5>
              <p className="paragraph">
                Material handling crane services play a pivotal role in
                enhancing productivity, efficiency, and safety across various
                industries. By providing advanced equipment, expert solutions,
                and meticulous attention to safety and environmental
                considerations, these services support seamless operations and
                contribute to the success of projects ranging from manufacturing
                and logistics to construction and infrastructure development.
                Embracing material handling crane services translates into
                optimized workflows, reduced operational costs, and improved
                overall performance for businesses striving for excellence in
                material management and handling.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-3  overflow-hidden">
          <img
              src="../images/installation.jfif"
              alt=""
              srcset=""
              className="serviceImg"
            />
          </div>
          <div className="col-md-9">
            <div className="columnContent" ref={targetRef4}>
              <h5 className="head5">Equipment Installation</h5>
              <p className="paragraph">
                Equipment installation crane services are indispensable for
                industries requiring precise and reliable installation of heavy
                machinery and complex systems. By leveraging advanced crane
                technology, expert planning, and rigorous safety measures, these
                services facilitate seamless equipment setup, enhance
                operational efficiency, and support the successful completion of
                projects across manufacturing, energy, construction, and other
                sectors. Choosing equipment installation crane services ensures
                that installations are performed with precision, safety, and
                reliability, contributing to the overall success and
                productivity of businesses and industrial operations.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-3  overflow-hidden">
          <img
              src="../images/railwayProject.jfif"
              alt=""
              srcset=""
              className="serviceImg"
            />
          </div>
          <div className="col-md-9">
            <div className="columnContent" ref={targetRef5}>
              <h5 className="head5">Railway Projects</h5>
              <p className="paragraph">
                Railway projects crane services are indispensable for the
                development, maintenance, and expansion of railway
                infrastructure, providing essential lifting and logistical
                support across various stages of project execution. By
                leveraging specialized crane technology, stringent safety
                measures, and expertise in railway operations, these services
                contribute to the efficiency, safety, and sustainability of
                railway networks worldwide. Choosing railway projects crane
                services ensures that lifting operations are conducted with
                precision and reliability, supporting the seamless delivery of
                railway infrastructure projects and enhancing transportation
                connectivity and efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-3  overflow-hidden">
          <img
              src="../images/erection.jfif"
              alt=""
              srcset=""
              className="serviceImg"
            />
          </div>
          <div className="col-md-9">
            <div className="columnContent" ref={targetRef6}>
              <h5 className="head5">Structural Erection</h5>
              <p className="paragraph">
                Structural erection crane services are essential for the
                successful execution of building construction projects,
                providing critical support in lifting and installing heavy
                structural components with precision and safety. By leveraging
                advanced crane technology, rigorous safety measures, and
                expertise in construction logistics, these services contribute
                to the efficiency, reliability, and safety of building erection
                operations. Choosing structural erection crane services ensures
                that construction projects are completed on schedule, within
                budget, and with the highest standards of quality, supporting
                the growth and development of urban and industrial
                infrastructure worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="form">
          <h2>Start Your Shipping Today</h2>
          <br />
          <label htmlFor="">Hauling From</label>
          <br />
          <input type="text" placeholder="Origin" />
          <br />
          <br />
          <br />
          <label htmlFor="">Hauling To</label>
          <br />
          <input type="text" placeholder="Destination" />
          <br />

          <button className="bn33">Search</button>
        </div>
      </div>

      <img
        src="../images/bgfootertop.jpg"
        alt=""
        srcset=""
        className="footerImg"
      />
      <br />
      <br />
      {/* <div class="row">
  <div class="col-6 col-md-4 d-flex justify-content-center align-items-center">
    <div class="myCard">
        <h5>DRIVE AWAY SERVICES</h5>
        <p>
        Drive away services is when you have a professional physically drive your truck or equipment from one place to another. Every driver we work with is licensed, bonded, and insured. Each professional has years of experience in drive away service.
        </p>
    </div>
  </div>
  <div class="col-6 col-md-4 d-flex justify-content-center align-items-center">
    <div className="myCard">
    <h5>DRYAGE TRUCKING SERVICES</h5>
    <p>Drayage trucking is transporting equipment and machinery over short distances. This tends to be part of a bigger move. Drayage trucking may be moving your equipment from the job to the shipyard. Let us handle your drayage trucking solutions now.</p>
  
    </div>
  </div>
  <div class="col-6 col-md-4 d-flex justify-content-center align-items-center">
    <div className="myCard">
    <h5>DELIVERY ASSISTANCE SERVICES</h5>
    <p>If you need help unloading your freight, we're here to provide. Heavy Equipment Transport helps with offloading by utilizing cranes, ramps, or whatever is needed. We provide delivery assistance solutions for all equipment and machinery.</p>
 
    </div>
   </div>
   <br />
  
   
   
</div> */}
    </>
  );
}

export default Service;
