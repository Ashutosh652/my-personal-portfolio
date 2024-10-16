import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";

Font.register({
  family: "Volkhov",
  src: "http://fonts.gstatic.com/s/volkhov/v8/uk1C5e7mNyA0JcFqyN2lwQ.ttf",
  fonts: [
    { src: "/assets/fonts/Volkhov/Volkhov-Regular.ttf", fontStyle: "normal" },
    { src: "/assets/fonts/Volkhov/Volkhov-Bold.ttf", fontStyle: "bold" },
    {
      src: "/assets/fonts/Volkhov/Volkhov-BoldItalic.ttf",
      fontStyle: "bolditalic",
    },
    { src: "/assets/fonts/Volkhov/Volkhov-Italic.ttf", fontStyle: "italic" },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    padding: 8,
    fontFamily: "Volkhov",
  },
  header: {
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    fontStyle: "bold",
  },
  contactInfo: {
    fontSize: 10,
    fontStyle: "normal",
  },
  headerLink: {
    fontSize: 8,
  },
  section: {
    marginTop: "15px",
  },
  sectionTitle: {
    fontSize: 12,
    fontStyle: "bold",
    textTransform: "uppercase",
  },
  sectionSubtitle: {
    fontSize: 10,
    fontStyle: "bold",
  },
  sectionContent: {
    fontSize: 10,
  },
  hr: {
    border: "0.5px solid #5C6269",
    marginVertical: 4,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bulletPoint: {
    marginLeft: "10px",
  },
  topMargin: {
    marginTop: "10px",
  },
});

const CV = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>ASHUTOSH CHAPAGAIN</Text>
          <Text style={styles.contactInfo}>
            +977-9861999836 | Kathmandu, Nepal
          </Text>
          <Text>
            <Link
              style={styles.headerLink}
              src="mailto:ashutoshchapagainpro@gmail.com"
            >
              ashutoshchapagainpro@gmail.com
            </Link>{" "}
            <Link
              style={styles.headerLink}
              src="https://www.linkedin.com/in/ashutosh-chapagain-304a73252/"
            >
              Linkedin
            </Link>{" "}
            <Link
              style={styles.headerLink}
              src="https://github.com/Ashutosh652"
            >
              Github
            </Link>{" "}
            <Link style={styles.headerLink} src="https://www.ashutoshc.com.np/">
              Portfolio
            </Link>
          </Text>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <View style={styles.hr} />
          <Text style={styles.sectionContent}>
            Software Developer with experience in Python, Django, Flask and
            FastAPI.
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.hr} />
          <View style={styles.flexRow}>
            <Text>
              <Text style={styles.sectionSubtitle}>
                Bachelor of Computer Engineering
              </Text>
              <Text style={styles.sectionContent}>
                , Nepal Engineering College, Pokhara University
              </Text>
            </Text>
            <Text style={styles.sectionContent}>2018-2023</Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.hr} />
          <View style={styles.flexRow}>
            <Text style={[styles.sectionSubtitle, { width: "20%" }]}>
              Technical Skills
            </Text>
            <Text style={[styles.sectionContent, { width: "80%" }]}>
              Python, Django, Django REST Framework, Flask, FastAPI, PostgreSQL,
              Pandas, Numpy, Web Scraping
            </Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={[styles.sectionSubtitle, { width: "20%" }]}>
              Soft Skills
            </Text>
            <Text style={[styles.sectionContent, { width: "80%" }]}>
              Analytical Skills, Time Management Skills, Communication,
              Collaboration
            </Text>
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.hr} />
          <View>
            <View style={styles.flexRow}>
              <Text style={styles.sectionSubtitle}>Backend Developer</Text>
              <Text style={styles.sectionContent}>Jan 2024 - Present</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.sectionContent}>Milo Logic Pvt. Ltd.</Text>
              <Text style={styles.sectionContent}>Kathmandu, Nepal</Text>
            </View>
            <View>
              <Text style={[styles.sectionContent, styles.bulletPoint]}>
                {"\u2022"} Developed the backend of a SaaS to use internally in
                the company as well as to sell it as a product.
              </Text>
              <Text style={[styles.sectionContent, styles.bulletPoint]}>
                {"\u2022"} Developed a web scraping system using Selenium to
                scrape data from websites in order to use for training AI
                models.
              </Text>
              <Text style={[styles.sectionContent, styles.bulletPoint]}>
                {"\u2022"} Developed a tool to rank resumes using spaCy and NLTK
                based on the contents of the resume and the job description.
              </Text>
              <Text style={[styles.sectionContent, styles.bulletPoint]}>
                {"\u2022"} Developed and deployed quick proof of concept APIs
                (built using FastAPI) on a Virtual Private Server.
              </Text>
              <Text style={[styles.sectionContent, styles.bulletPoint]}>
                {"\u2022"} Developed custom APIs for no-code/low-code ERP/CRM
                platforms like Odoo and Frappe. Managed the development and
                deployment of the APIs on a development server on Linode.
              </Text>
            </View>
          </View>
          <View style={styles.topMargin}>
            <View style={styles.flexRow}>
              <Text style={styles.sectionSubtitle}>Python Developer</Text>
              <Text style={styles.sectionContent}>Oct 2023 - Jan 2024</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.sectionContent}>Tech Temple</Text>
              <Text style={styles.sectionContent}>Kathmandu, Nepal</Text>
            </View>
            <View>
              <Text style={[styles.sectionContent, styles.bulletPoint]}>
                {"\u2022"} Developed a template for a CMS using Flask that aided
                in quick development of future projects.
              </Text>
            </View>
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={styles.hr} />
          <Text>
            <Text style={styles.sectionSubtitle}>
              Crop Production Prediction.
            </Text>
            <Text style={styles.sectionContent}>
              {" "}
              Built a website to predict the production amount of five crops
              (Paddy, Maize, Millet, Barley, Wheat) in each disctrict of Nepal.
              The website is developed using Django REST Framework for backend
              and ReactJS for frontend. The climate data of each of Nepal's
              districts were collected using NASA's Power Access API. The crop
              production data of 31 years of each district was obtained from
              ICIMOD's website. The data was processed and explored and various
              models were trained. The best performing model was integrated in
              the website.{" "}
              <Link src="http://www.google.com">(Data Processing)</Link>{" "}
              <Link src="http://www.google.com">(Backend)</Link>{" "}
              <Link src="http://www.google.com">(Frontend)</Link>
            </Text>
          </Text>
          <Text style={styles.topMargin}>
            <Text style={styles.sectionSubtitle}>RamroBazar</Text>
            <Text style={styles.sectionContent}>
              {" "}
              A C2C e-commerce website built using Django REST framework for
              back-end APIs and React for front-end.
            </Text>
          </Text>
          <Text style={styles.topMargin}>
            <Text style={styles.sectionSubtitle}>PokeWeb</Text>
            <Text style={styles.sectionContent}>
              {" "}
              A website front-end created using ReactJS and PokeAPI
              (https://pokeapi.co/) treating pokemon cards as products where you
              can buy those pokemon cards.
            </Text>
          </Text>
          <Text style={styles.topMargin}>
            <Text style={styles.sectionSubtitle}>Birthday Wisher</Text>
            <Text style={styles.sectionContent}>
              {" "}
              A simple python script built using Selenium that sends happy
              birthday message at 12:00am(+30sec error margin) to anyone whose
              birthday is in the provided excel file.
            </Text>
          </Text>
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          <View style={styles.hr} />
          <View>
              <Text style={styles.sectionSubtitle}>Neural Networks and Deep Learning</Text>
              <Text style={styles.sectionContent}>DeepLearning.AI</Text>
              <Text style={styles.sectionContent}>Issued April 2024</Text>
              <Link style={styles.sectionContent} src="http://www.google.com">(View Credential)</Link>
          </View>
          <View style={styles.topMargin}>
              <Text style={styles.sectionSubtitle}>Neural Networks and Deep Learning</Text>
              <Text style={styles.sectionContent}>DeepLearning.AI</Text>
              <Text style={styles.sectionContent}>Issued April 2024</Text>
              <Link style={styles.sectionContent} src="http://www.google.com">(View Credential)</Link>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CV;
