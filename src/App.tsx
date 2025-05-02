import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ImageOne from './assets/image_1.png'
import ImageTwo from './assets/image_2.png'
import ImageThree from './assets/image_3.png'
import { green } from "@mui/material/colors";

const sections = ["Home","About Us","Career","Our Team","Contact Us"];

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDdX4zyRAIoiiq1zPn51YvMIYst5Z-5MlVQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
  "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
];
const projectImages = [
  { src: ImageOne, label: "HGA Hyderabad, India" },
  { src: ImageTwo, label: "Ramat Hovav, power station, Israel" },
  { src: ImageThree, label: "Ganei Tikva, Israel" }
];
const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="app-container">
      
      <nav className="navbar">
        <div className="logo">
          <span className="logo-box"></span>
          <span className="logo-text">Geonova</span>
        </div>
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</div>
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <li onClick={() => setActiveSection("Home")}>Home</li>
          <li onClick={() => setActiveSection("About Us")}>About Us</li>
          <li onClick={() => setActiveSection("Solutions")}>Solutions</li>
          <li onClick={() => setActiveSection("Our Team")}>Our Team</li>
          <li onClick={() => setActiveSection("Contact Us")}>Contact Us</li>
        </ul>

      </nav>
      {activeSection === "Home" && (
        <div>
      {/* Navigation Section */}
      <div className="nav-section">
        <video className="nav-video" autoPlay loop muted>
          <source src={require("./video.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Typography variant="h2" className="nav-title">Geonova</Typography>
        <Typography variant="h5" className="nav-subtitle">
          Nature-based solutions for cleaner, healthier water bodies
        </Typography>
        <Button className="nav-button">Contact Us</Button>

      </div>


      {/* Header */}


      {/* Navigation Menu */}
      <Box className={'menu ${menuOpen ? "open" : ""}'}>
        {sections.map((section) => (
          <Button
            key={section}
            className="menu-item"
            onClick={() => setActiveSection(section)}
          >
            {section}
          </Button>
        ))}
      </Box>

      {/* Content Section */}
      <Box className="home-container" display="flex" alignItems="center" justifyContent="space-between">
        <Box className="home-left" flex={1} padding={15}>
          <Typography variant="h4">Who are we?</Typography>
          <Typography variant="body1">
            Geonova is a pioneering company dedicated to restoring water ecosystems through innovative, nature-based solutions. Specializing in floating wetlands and advanced water treatment technologies, we focus on enhancing water quality, biodiversity, and ecological balance in lakes and other water bodies. Our mission is to deliver sustainable, science-backed solutions that drive environmental resilience and community well-being.
          </Typography>
        </Box>

        <Box className="home-right" flex={1} display="flex" justifyContent="center" alignItems="center" padding={10}>
          <Box className="carousel" display="flex" alignItems="center">
            <IconButton className="carousel-btn" onClick={prevImage}>
              <ArrowBackIosIcon />
            </IconButton>
            <Box className="carousel-images">
              <img src={images[currentImage]} alt={'Slide ${currentImage + 1}'} className="carousel-image" />
            </Box>
            <IconButton className="carousel-btn" onClick={nextImage}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box className="project-section" >
        <Box className="project-container" display="flex" flexDirection="row" alignItems="center" gap="50px">

          <Box className="project-images" flex="1" display="flex" flexDirection="row" alignItems="center" gap="50px" >
            {projectImages.map((project, index) => (
              <Box key={index} className="project-image-container hover-effect">
                <img src={project.src} alt={project.label} className="project-image" />
                <Typography className="project-label">{project.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="why-geonova" display="flex" alignItems="center" justifyContent="center" padding={4}>
  {/* Left Side - Image */}
  <Box className="why-geonova-image-container" sx={{ padding: 10 }}>
  <img src={require("./assets/image_4.png")} alt="Beautiful lake with ducks" className="why-geonova-image" />
  <div className="green-box top-right"></div>
  <div className="green-box bottom-left"></div>
</Box>


  {/* Right Side - Text Content */}
  <Box className="why-geonova-text">
    <Typography variant="h4" className="why-geonova-title">Why Geonova?</Typography>
    <Typography variant="body1" className="why-geonova-content">
      Geonova is a pioneering company dedicated to restoring water ecosystems through innovative, nature-based solutions. 
      <span className="highlight"> Specializing in floating wetlands and advanced water treatment technologies</span>, we focus on enhancing water quality, biodiversity, and ecological balance in lakes and other water bodies. 
      Our mission is to deliver sustainable, science-backed solutions that drive environmental resilience and community well-being.
    </Typography>
  </Box>
</Box>

<Box className="real-time-monitoring" position="relative" >
  {/* Background Image */}
  <img src={require("./assets/image_4.png")} alt="Ecosystem Monitoring" className="monitoring-image" />

  {/* Content Overlay */}
  <Box className="monitoring-content" >
    <Typography variant="h3" className="monitoring-title" >
      Real-time Monitoring of Ecosystems
    </Typography>

    <Typography variant="body1" className="monitoring-description">
      <strong>Track vegetation</strong> dynamics, soil health trends, land use and land cover changes, and restoration outcomes through 
      intuitive dashboards powered by satellite-driven analytics, ground-truth data integration, and AI-based insights—enabling 
      timely interventions and evidence-based decision-making.
    </Typography>

    <Button className="monitoring-button">Get in Touch</Button>
  </Box>
</Box>
<Box className="who-we-work-with" textAlign="center" py={12}>
  <Typography variant="h3" className="work-title"  sx={{ marginTop: 0 }}>Who We Work With?</Typography>
  
  <Box className="work-grid" sx={{ marginTop: 15 }}>
    {[
      {
        icon: require("./assets/icon1.png"),
        title: "Urban Development Bodies & Municipalities",
      },
      {
        icon: require("./assets/icon2.png"),
        title: "Industrial Sectors (Textile, Pharma, F&B)",
      },
      {
        icon: require("./assets/icon3.png"),
        title: "NGOs & Global Development Agencies",
      },
      {
        icon: require("./assets/icon4.png"),
        title: "Real Estate Developers & Eco-tourism Projects",
      },
    ].map((work, index) => (
      <Box key={index} className="work-card">
        <img src={work.icon} alt={work.title} className="work-icon" />
        <Typography variant="h6" className="work-text">{work.title}</Typography>
      </Box>
    ))}
  </Box>
</Box>
<Box className="sustainability-impact" position="relative" >
  {/* Background Image */}
  <img src={require("./assets/image_4.png")} alt="Sustainability Impact" className="impact-image" />

  {/* Content Overlay */}
  <Box className="impact-content" >
    <Typography variant="h3" className="impact-title">
      Sustainability Impact
    </Typography>

    <Typography variant="body1" className="impact-description">
      <strong>Track vegetation</strong> dynamics, <span >soil health trends</span>, land use and land cover changes, and restoration outcomes 
      through intuitive dashboards powered by satellite-driven analytics, ground-truth data integration, and AI-based insights—
      enabling timely interventions and evidence-based decision-making.
    </Typography>

    <Button className="impact-button">Know more</Button>
  </Box>
</Box>

<Box className="land-story" textAlign="center" py={4}>
  <Button variant="contained" className="land-button">
  See your land. Know its story.
  </Button>
</Box>
</div>
 )}
{activeSection === "About Us" && (
  <Box className="about-us-section" position="relative">
    {/* Background Image */}
    <img
      src={require("./assets/image_5.png")}
      alt="Wetlands Background"
      className="about-us-image"
    />

    {/* Content Overlay */}
    <Box className="about-us-content">
      <Typography variant="h2" className="about-us-title">
        Smarter Decisions for a <br /> Changing Planet
      </Typography>

      <Button className="about-us-button">Contact Us</Button>

      <Typography variant="body1" className="about-us-description">
        From mapping to management, smarter tools for thriving wetlands.
      </Typography>
    </Box>

    {/* About Us Section */}
    <Box className="about-us-geonova">
      <Typography variant="h3" className="about-us-geonova">
        About <strong>Geonova</strong>
      </Typography>
      <Typography variant="body1" className="about-us-geo" >
        GeoNova is an integrated geospatial intelligence platform developed by Geo Climate Risk Solutions Pvt. Ltd. (GCRS), designed to support climate resilience, ecological restoration, and sustainable land and water management.
      </Typography>
      <Typography variant="body2" className="about-us-text">
        By combining satellite data, AI-powered analytics, and domain expertise, GeoNova helps governments, NGOs, and businesses make better, faster, and science-driven decisions. Whether you’re tracking restoration progress, assessing water availability, or planning climate adaptation strategies—GeoNova equips you with the clarity and tools to act with confidence.
        It’s more than just a platform—it’s your partner in building a resilient, data-informed future.
      </Typography>
      <Button className="follow-button">Follow Us</Button>
    </Box>
    <Box className="decision-section">
      <Box className="decision-image">
        <img src={require("./assets/image_6.png")} alt="Nature View" />
      </Box>
      <Box className="decision-content">
        <Typography variant="h3" className="decision-title">
          <strong>Smarter Decisions</strong> for a <br /> Changing Planet
        </Typography>
        <Typography variant="body1" className="decision-text">
          Geonova is an integrated geospatial intelligence platform developed by Geo Climate Risk Solutions Pvt. Ltd. (GCRS), designed to support climate resilience, ecological restoration, and sustainable land and water management.
        </Typography>
        <Button className="decision-button">Get in Touch</Button>
      </Box>
    </Box>

    {/* Core Expertise Section */}
    <Box className="core-expertise">
      <Typography variant="h4" className="expertise-title">
        Our Core Expertise
      </Typography>
      <Box className="expertise-icons">
        <Box className="expertise-item">
          <img src={require("./assets/a1.png")} alt="Water Restoration" />
          <Typography>Water Restoration</Typography>
        </Box>
        <Box className="expertise-item">
          <img src={require("./assets/a2.png")} alt="Aerators" />
          <Typography>Aerators</Typography>
        </Box>
        <Box className="expertise-item">
          <img src={require("./assets/a3.png")} alt="Floating Wetlands" />
          <Typography>Floating Wetlands</Typography>
        </Box>
        <Box className="expertise-item">
          <img src={require("./assets/a4.png")} alt="Microbiome Technology" />
          <Typography>Microbiome Technology</Typography>
        </Box>
        <Box className="expertise-item">
          <img src={require("./assets/a5.png")} alt="GIS & Remote Sensing" />
          <Typography>GIS & Remote Sensing</Typography>
        </Box>
        <Box className="expertise-item">
          <img src={require("./assets/a6.png")} alt="Hydrogeology" />
          <Typography>Hydrogeology</Typography>
        </Box>
        <Box className="expertise-item">
          <img src={require("./assets/a7.png")} alt="Climate Resilience" />
          <Typography>Climate Resilience</Typography>
        </Box>
      </Box>
    </Box>
    {/* New Section: Mission, Vision & Goals */}
    <Box className="mission-vision-section">
      <Box className="mission-content">
        <Typography variant="h3" className="mission-title">
          geonova
        </Typography>
        <Box className="mission-tabs">
          <Typography className="mission-tab active">Our Mission</Typography>
          <Typography className="mission-tab">Our Vision</Typography>
          <Typography className="mission-tab">Our Goals</Typography>
        </Box>
        <Typography className="mission-text">
          To rejuvenate polluted water bodies with innovative, low-maintenance, and eco-friendly technologies that enhance environmental resilience and community well-being.
        </Typography>
      </Box>
      <Box className="mission-image">
        <img src={require("./assets/image_7.png")} alt="Teamwork" />
      </Box>
    </Box>

  </Box>
)}


{activeSection === "Solutions" && (
  <div className="solutions-container">
    {/* Solutions Section */}
    <div className="solutions-section">
      <div className="solutions-background"></div>
      <div className="solutions-overlay">
        <h1>Transform Your Waterbody <br /> with Proven Eco-Solutions</h1>
        <p>
          From mapping to management. Smarter tools <br /> for thriving wetlands.
        </p>
        <button className="solutions-btn">Go to Products</button>
      </div>
    </div>

    {/* Eco-Innovations Section (Added Below Solutions, Above Footer) */}
    <div className="eco-innovations">
      <div className="eco-content">
        <h2>Discover Our Eco-Innovations</h2>
        <p>
          At Geonova, we blend nature’s intelligence with cutting-edge technology to restore 
          the health of water bodies. Our suite of products—ranging from <strong>floating wetlands</strong> 
          to <strong>microbiome treatments</strong> and <strong>real-time monitoring systems</strong>—is 
          designed to address today’s most pressing water challenges. Whether you're revitalizing a 
          polluted lake or seeking sustainable water solutions for your industry, our modular, 
          low-maintenance innovations are built for performance, impact, and ecological balance.
        </p>
        <button className="eco-btn">Request Demo</button>
      </div>
    </div>
    <div className="solutions-offered">
      <h2>Solutions Offered By Geonova</h2>
      <div className="solutions-grid">
        {[
          {
            title: "Floating Wetland Systems",
            description:
              "Modular, scalable platforms designed to filter pollutants, support aquatic plants, and improve water quality.",
          },
          {
            title: "Aerators",
            description:
              "High-efficiency oxygenation systems that boost dissolved oxygen levels and support aquatic biodiversity.",
          },
          {
            title: "Microbiome-Based Water Treatment",
            description:
              "Harnessing beneficial microbes to break down pollutants and naturally purify water.",
          },
          {
            title: "IoT Water Quality Monitoring",
            description:
              "AI-enabled, real-time monitoring and analytics for effective, data-driven water management.",
          },
          {
            title: "Consulting Services",
            description:
              "Expert guidance in GIS mapping, hydrogeological assessments, and environmental impact studies.",
          },
          {
            title: "Ecosystem Restoration Projects",
            description:
              "Complete project execution — from design to deployment — to restore lakes and water bodies.",
          },
          {
            title: "Customized Solutions",
            description:
              "Tailored treatment plans to meet the unique ecological and industrial needs of every client.",
          },
        ].map((solution, index) => (
          <div className="solution-card" key={index}>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <ul>
              <li>✅ Modular & easy to install</li>
              <li>✅ Enhances nutrient absorption</li>
              <li>✅ Supports native aquatic flora</li>
              <li>✅ Low-maintenance, long-lasting</li>
            </ul>
            <button className="quote-btn">Get Quote</button>
          </div>
        ))}
      </div>
      </div>
  </div>
)}



{activeSection === "Contact Us" && (
    <div className="contact-container">
        <div className="contact-info">
            <h1 className="contact-header">Contact Us</h1>
            <p>Whether you're exploring collaboration, need a demo, or have questions about how GeoNova can support your landscape or restoration goals—our team is ready to help. Reach out and we’ll get back to you soon.</p>

            <div className="contact-details">
                <div><i className="fa-solid fa-envelope"></i> info@geonova.com</div>
                <div><i className="fa-solid fa-phone"></i> +91 9999999999</div>
                <div><i className="fa-solid fa-map-marker-alt"></i> Innovation Valley, Visakhapatnam</div>
                <div><i className="fa-solid fa-map-marker-alt"></i> IIT Kanpur, Uttar Pradesh</div>
            </div>

            <div className="support-container">
                <div className="support-box">
                    <i className="fas fa-headset"></i>
                    <h3>Customer Support</h3>
                    <p>Our support team is here to assist with technical issues.</p>
                </div>
                <div className="support-box">
                    <i className="fas fa-comments"></i>
                    <h3>Give Your Feedback</h3>
                    <p>Share your thoughts and help us improve.</p>
                </div>
                <div className="support-box">
                    <i className="fas fa-newspaper"></i>
                    <h3>Media Support</h3>
                    <p>Looking for media kits or interviews? We're happy to connect.</p>
                </div>
            </div>
        </div>

        <div className="contact-form">
            <h3>Tell us your Query</h3>
            <form>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Organization" />
                <input type="text" placeholder="Phone Number" />
                <input type="email" placeholder="Email ID" />
                <textarea placeholder="Tell us your Query"></textarea>
                <label>Upload (Supported files: PDF)</label>
                <input type="file" />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
)}


      {/* Footer */}
      <footer className="footer">
        {/* Scroll to top button */}
        <div className="scroll-to-top" onClick={scrollToTop}>
          <KeyboardArrowUpIcon className="arrow-icon" />
        </div>

        <Box className="footer-content">
          <Box className="footer-nav">
            {sections.map((section) => (
              <Button key={section} className="footer-link">
                {section}
              </Button>
            ))}
          </Box>
          <Typography variant="body2" className="footer-text">
          <span className="logo-box1"></span>
          <span className="logo-text1">Geonova</span>
          <div>Copyright © 2023 Geonova Pvt. Ltd.</div>
          </Typography>
        </Box>
      </footer>
    </div>
  );
};

export default App;