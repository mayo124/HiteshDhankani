import React from "react";

const FounderCard = () => {
  const contactDetails = {
    linkedin: "https://www.linkedin.com/in/hitesh-dhankani/",
    whatsapp: "https://wa.me/919920802789",
    phone: "+971505178677",
    email: "mailto:hd@fracassets.com",
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "20px",
      maxWidth: "350px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      margin: "auto",
    },
    logo: {
      textAlign: "center",
      marginBottom: "10px",
    },
    profileImage: {
      width: "100%",
      borderRadius: "10px",
      marginBottom: "15px",
    },
    name: {
      textAlign: "center",
      color: "#4A90E2",
      fontSize: "24px",
      margin: "10px 0",
    },
    contact: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
      cursor: "pointer",
    },
    icon: {
      width: "30px",
      height: "30px",
      marginRight: "10px",
    },
    text: {
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D0BAQHgptHSkEu0vw/company-logo_200_200/company-logo_200_200/0/1719256442160/analah_logo?e=2147483647&v=beta&t=YcVA_qZDOuSRaywAn_UlMR1NhkdJ1W1-ZAyjodWfcz8" // Replace with Analah logo
          alt="Analah Logo"
          style={{ height: "60px" }}
        />
      </div>
      <img
        src="https://media.licdn.com/dms/image/C4D03AQFj55mVMWWi9g/profile-displayphoto-shrink_200_200/0/1656158017012?e=2147483647&v=beta&t=TI0j8lWHVZvBdzlNv0WCcnx_zq2aPtWi3V_EPdnyokA" // Replace with Hitesh Dhankani's profile image
        alt="Hitesh Dhankani"
        style={styles.profileImage}
      />
      <div style={styles.name}>Hitesh Dhankani</div>
      <div style={styles.text}>C.E.O. and Founder</div>
      <div style={styles.text}>Private Equity | Real Estate</div>
      <a
        href={contactDetails.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.contact}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          style={styles.icon}
        />
        <span style={styles.text}>LinkedIn</span>
      </a>
      <a
        href={contactDetails.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.contact}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          style={styles.icon}
        />
        <span style={styles.text}>+91 99208 02789</span>
      </a>
      <a href={`tel:${contactDetails.phone}`} style={styles.contact}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          alt="Phone"
          style={styles.icon}
        />
        <span style={styles.text}>+971 50 517 8677</span>
      </a>
      <a href={contactDetails.email} style={styles.contact}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
          alt="Email"
          style={styles.icon}
        />
        <span style={styles.text}>hd@fracassets.com</span>
      </a>
    </div>
  );
};

export default FounderCard;
