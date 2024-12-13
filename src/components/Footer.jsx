import React, { useEffect } from "react";
import "../css/footer.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    AOS.init({ duration: "600" });
  }, []);
  return (
    <div>
      <div className="footer">
        <div className="upper">
          <div className="leftDiv" data-aos="fade-up">
            <h5>ABOUT US</h5>
            <p>
              Welcome to SGM crane service, your premier partner in crane
              solutions. With 10 years of industry expertise, we have
              established ourselves as leaders in providing reliable and
              efficient crane services tailored to meet the diverse needs of our
              clients.
            </p>
            <br />
            <FaXTwitter />
            &nbsp;
            <FaFacebookF />
            &nbsp;
            <FaInstagram />
          </div>
          <div className="rightDiv">
            <div className="contatInfo mb-4">
              <div>
                <FaPhone style={{ color: " #201658", fontSize: "28px" }} />{" "}
                <span
                  style={{
                    color: " #201658",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  Phone
                </span>
                <br />
                <div className="details">09845335934</div>
              </div>
              <div>
                <MdEmail style={{ color: " #201658", fontSize: "31px" }} />{" "}
                <span
                  style={{
                    color: " #201658",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </span>
                <br />
                <div className="details">sgmcraneservice@gmail.com</div>
              </div>
              <div>
                <IoLocationSharp
                  style={{ color: " #201658", fontSize: "31px" }}
                />
                <span
                  style={{
                    color: " #201658",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  Location
                </span>
                <br />
                <div className="details">
                  {" "}
                  18, 4th Cross Rd, near Kamdhenu auto cnc <br />
                  private limited, Ganapathy Nagar, 3rd phase, <br />
                  Peenya, Bengaluru, Karnataka 560058
                </div>
              </div>
            </div>
            <hr />
            <div className="navigationandService mt-4">
              <div className="navigation">
                <h5>Navigation</h5>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="/service">Service</a>
                  </li>
                  <li>
                    <a href="/contactus">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="transportService">
                <h5>Common Crane Solution Provided</h5>
                <ul>
                  <li>Heavy Lifting</li>
                  <li>Rigging Service</li>
                  <li>Transporting oversized materials</li>
                  <li>Installing structural components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lower">
          <p> Copyright © SGMCraneServices 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
