import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.columnContainer}>
        <div style={styles.column}>
          <h4
            style={{
              display: "flex",
              alignItems: "left",
              fontWeight: "300",
              color: "#f67366",
            }}
          >
            Ship
            <span
              style={{
                color: "#ffffff",
                textAlign: "left",
                display: "flex",
                alignItems: "left",
                fontWeight: "700",
              }}
            >
              Up
            </span>
          </h4>
          <p style={{ fontSize: "14px", textAlign: "left" }}>
            ShipUp delivers an unparalleled customer service through dedicated
            customer teams, engaged people working in an agile culture, and a
            global footprint
          </p>
        </div>
        <div style={styles.column}>
          <h5
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
              lineHeight: "21.6px",
            }}
          >
            Explore
          </h5>
          <span>
            <a style={styles.footerListText} href="#">
              About Us
            </a>
          </span>
          <br />
          <span>
            <a style={styles.footerListText} href="#">
              Our Warehouses
            </a>
          </span>
          <br />
          <span>
            <a style={styles.footerListText} href="#">
              Blog
            </a>
          </span>
          <br />
          <span>
            <a style={styles.footerListText} href="#">
              News And Media
            </a>
          </span>
        </div>
        <div style={styles.column}>
          <h5
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
              lineHeight: "21.6px",
            }}
          >
            Legal
          </h5>

          <span>
            {" "}
            <a style={styles.footerListText} href="#">
              Terms
            </a>
          </span>
          <br />
          <span>
            {" "}
            <a style={styles.footerListText} href="#">
              Privacy
            </a>
          </span>
        </div>
        <div style={styles.column}>
          <h3 style={styles.social}>Social Media</h3>
          <div style={styles.iconContainer}>
            <span className="icon-background" style={styles.iconColor}>
              <FaFacebookF style={styles.icon} />
            </span>
            <span className="icon-background" style={styles.iconColor}>
              <FaTwitter style={styles.icon} />
            </span>
            <span className="icon-background" style={styles.iconColor}>
              <AiFillInstagram style={styles.icon} />
            </span>
            <span className="icon-background" style={styles.iconColor}>
              <IoLogoWhatsapp style={styles.icon} />
            </span>
          </div>
        </div>
      </div>
      <div style={styles.borderBottom}>
        <p style={{ fontWeight: "300", fontSize: "20px", lineHeight: "24px" }}>
          Ship
          <span
            style={{
              color: "#f67366",
              fontSize: "20px",
              lineHeight: "24px",
              fontWeight: "700",
            }}
          >
            Up
          </span>
          <b>.ng</b>
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#2c2d5b",
    color: "#fff",
    padding: "50px 150px 15px 150px",
    textAlign: "center",
    left: "0",
    bottom: "0",
    width: "100vw",
    marginTop: "50px"
  },
  columnContainer: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px 0 30px 0",

    paddingTop: "20px", 
  },
  column: {
    flex: "1",
    paddingBottom: "20px",
  },
  borderBottom: {
    borderTop: "1px solid #fff",
    paddingTop: "20px", 
  },
  iconContainer: {
    marginTop: "10px", 
    display: "flex",
    justifyContent: "left",
  },
  icon: {
    position: "absolute",
    top: "10px",
    right: "0px",
    height: "30px",
    width: "30px",
    marginLeft: "10px", 
    color: "#2c2d5b",
    marginRight: "10px",
  },
  iconColor: {
    position: "relative",
    height: "50px",
    width: "50px",
    backgroundColor: "#F4F6F9",
    borderRadius: "30px",
    marginLeft: "10px",
  },
  social: {
    fontSize: "18px",
    lineHeight: "21.6px",
    fontWeight: "700",
    textAlign: "left",
    marginLeft: "10px",
  },
  footerListText: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "16.8px",
    fontWeight: "500",
    textAlign: "left",
  },
};

export default Footer;