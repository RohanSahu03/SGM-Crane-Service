import React, { useEffect } from "react";
import "../css/about.css";
import OwlCarousel from "react-owl-carousel";
import { Container } from "reactstrap";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: "900" });
  }, []);
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  };

  const options1 = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <Container fluid>
        <div className="about-us-container pt-3">
          <div className="innerDiv" data-aos='fade-up'>
            <div className="left">
              <img src="../images/craneImg2removebg.png" alt="" srcset="" />
            </div>
            <div className="right">
              <h1 >About Us</h1>
              <p>
                At SGM crane service, we are dedicated to revolutionizing the
                world of shipping and logistics with our innovative crane
                solutions. With years of experience and a passion for
                excellence, we have established ourselves as leaders in the
                industry, providing reliable and efficient services to our
                valued clients worldwide.At SGM Crane Service, we specialize in providing reliable and efficient mobile crane services tailored to meet the diverse needs of our clients. With a commitment to safety, precision, and customer satisfaction, we are your trusted partner for lifting solutions across various industries.. With years of expertise and a
                dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* <div>
          {" "}
          <h1 className="h1">ABOUT US</h1>
        </div> */}
      {/* <div className="row mt-3 w-100">
          <div className="col-md-6 w-100">
            <img
              src="../images/constructionSite.jpg"
              alt=""
              srcset=""
              className="aboutImge"
            />
          </div>
          <div className="col-md-6">
            <p>
              At [Company Name], we are dedicated to revolutionizing the world
              of shipping and logistics with our innovative crane solutions.
              With years of experience and a passion for excellence, we have
              established ourselves as leaders in the industry, providing
              reliable and efficient services to our valued clients worldwide.
              Our mission at [Company Name] is simple: to provide unparalleled
              crane shipping solutions that exceed our customers' expectations.
            </p>
          </div>
        </div>
   */}
      {/* <br />
      <Container style={{ width: "100%" }}>
        <div className="content">
          <h1 className="h1">AFFILIATIONS & AWARDS</h1>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-12">
            <OwlCarousel
              className="ui-theme "
              loop
              margin={5}
              nav
              {...options1}
            >
              <div class="item d-flex justify-content-center align-item-center">
        
                <div class="image-box imgBox1">
                  <img src="../images/sarusCrane.jpg" alt="" srcset="" />
                </div>
        
              </div>

              <div class="item d-flex justify-content-center align-item-center">

                <div class="image-box imgBox1">
                  <img src="../images/craneaward1.jpg" alt="" srcset="" />
           
              </div>

              <div class="item d-flex justify-content-center align-item-center">
         
                <div class="image-box imgBox1">
                  <img src="../images/LogisticsAward.png" alt="" srcset="" />
                </div>
      
              </div>
              <div class="item d-flex justify-content-center align-item-center">
            
                <div class="image-box imgBox1">
                  <img src="../images/TV9award.jpg" alt="" srcset="" />
                </div>

              </div>
              <div class="item d-flex justify-content-center align-item-center">
      
                <div class="image-box imgBox1">
                  <img src="../images/MobileCranes.jpg" alt="" srcset="" />
                </div>

              </div>
              <div class="item d-flex justify-content-center align-item-center">
             
                <div class="image-box imgBox1">
                  <img src="../images/craneaward.jpg" alt="" srcset="" />
                </div>
         
              </div>
            </OwlCarousel>
          </div>
        </div>
      </Container> */}

      <br />
      <div className="speciality">
        <h1 >What Sets Apart</h1>
        <div className="lower" data-aos="fade-up">
          <div className="card1">
            <h5>Expertise</h5>
            <p>
              Our team consists of seasoned professionals with extensive
              knowledge and expertise in crane operations and logistics. We
              leverage our skills and experience to tackle even the most complex
              shipping challenges with precision and efficiency.
            </p>
          </div>
          <div className="card2">
            <h5>Customer Focus</h5>
            <p>
              At SGM crane service, customer satisfaction is our top priority.
              We take the time to understand our clients' unique needs and
              tailor our services to meet their specific requirements. With
              personalized attention and dedicated support, we strive to build
              long-lasting relationships based on trust and reliability.
            </p>
          </div>
        </div>
      </div>
      <br />
      <Container style={{ width: "100%" }}>
        <div className="content">
          <h1>Testimonials</h1>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-12">
            <OwlCarousel className="ui-theme " loop margin={5} nav {...options}>
              <div class="item ">
                <div class="card ">
                  <div class="image-box imgBox">
                    "We've been partnering with SGM crane service for several
                    years now, and they continue to impress us with their
                    professionalism and expertise in crane shipping. Whether
                    it's a local or international shipment, their team
                    consistently delivers exceptional service.
                    <br />
                    <span style={{ color: "gray" }}>
                      Michael Rodriguez, CEO of XYZ Heavy Industries
                    </span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="card ">
                  <div class="image-box imgBox">
                    Working with SGM crane service was an absolute pleasure from
                    start to finish. We needed to transport several oversized
                    cranes for a critical project, and their team delivered
                    beyond our expectations. Their attention to detail,
                    professionalism, and commitment to safety were evident every
                    step of the way.
                    <br />
                    <span style={{ color: "gray" }}>
                      Sarah Thompson, Operations Manager at GHI Construction
                      Group
                    </span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="card ">
                  <div class="image-box imgBox">
                    What impressed us most was their dedication to safety. They
                    implemented rigorous safety protocols and conducted thorough
                    inspections to ensure that our cranes were transported
                    securely. It's clear that safety is a top priority for SGM
                    crane service, and it gave us peace of mind knowing that our
                    valuable equipment was in good hands.
                    <br />
                    <span style={{ color: "gray" }}>
                      Mark Davis, Project Manager at DEF Industries
                    </span>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="card ">
                  <div class="image-box imgBox">
                    "Our experience with SGM crane service was nothing short of
                    exceptional. As a company that relies heavily on crane
                    operations, finding a reliable shipping partner was crucial
                    for us. From the moment we contacted SGM crane service, we
                    knew we were in good hands.
                    <br />
                    <span style={{ color: "gray" }}>
                      Emily Johnson, Procurement Manager at XYZ Engineering
                      Solutions
                    </span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="card ">
                  <div class="image-box imgBox">
                    Their team's expertise and attention to detail were evident
                    from our first conversation. They took the time to
                    understand our project requirements and provided tailored
                    solutions to meet our needs. Throughout the shipping
                    process, they kept us informed every step of the way,
                    ensuring transparency and peace of mind.
                    <br />
                    <span style={{ color: "gray" }}>
                      John Smith, CEO of ABC Construction Company
                    </span>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </Container>
      <br />

      {/* <div>
        <h1 className="h1">WHAT SETS APART</h1>
        <br />
        <h5>Expertise</h5>
        <p>
          Our team consists of seasoned professionals with extensive knowledge
          and expertise in crane operations and logistics. We leverage our
          skills and experience to tackle even the most complex shipping
          challenges with precision and efficiency.
        </p>
        <h5>Customer Focus</h5>
        <p>
          At [Company Name], customer satisfaction is our top priority. We take
          the time to understand our clients' unique needs and tailor our
          services to meet their specific requirements. With personalized
          attention and dedicated support, we strive to build long-lasting
          relationships based on trust and reliability.
        </p>
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

export default AboutUs;
