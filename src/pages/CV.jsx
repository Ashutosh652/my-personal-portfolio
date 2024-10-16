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
import degrees from "../data/resume/degrees";
import { skills } from "../data/resume/skills";
import work from "../data/resume/work";
import projects from "../data/projects";
import certificates from "../data/resume/certificates";

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
  console.log(certificates);

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
          {degrees.map((degree) => (
            <View style={styles.flexRow} key={degree.degree}>
              <Text>
                <Text style={styles.sectionSubtitle}>{degree.degree}</Text>
                <Text style={styles.sectionContent}>, {degree.school}</Text>
              </Text>
              <Text style={styles.sectionContent}>{degree.year}</Text>
            </View>
          ))}
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
              {skills
                .filter((skill) => skill.showInCV && skill.type === "technical")
                .map((skill) => skill.title)
                .join(", ")}
            </Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={[styles.sectionSubtitle, { width: "20%" }]}>
              Soft Skills
            </Text>
            <Text style={[styles.sectionContent, { width: "80%" }]}>
              {skills
                .filter((skill) => skill.showInCV && skill.type === "soft")
                .map((skill) => skill.title)
                .join(", ")}
            </Text>
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.hr} />
          {work.map((job, index) => (
            <View
              key={`${job.name}-${job.position}`}
              style={index > 0 ? styles.topMargin : {}}
            >
              <View style={styles.flexRow}>
                <Text style={styles.sectionSubtitle}>{job.position}</Text>
                <Text style={styles.sectionContent}>
                  {job.startDate} - {job.endDate ? job.endDate : "PRESENT"}
                </Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.sectionContent}>{job.name}</Text>
                <Text style={styles.sectionContent}>Kathmandu, Nepal</Text>
              </View>
              <View>
                {job.highlights.map((highlight) => (
                  <Text
                    key={highlight}
                    style={[styles.sectionContent, styles.bulletPoint]}
                  >
                    {"\u2022"} {highlight}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={styles.hr} />
          {projects.map((project, index) => (
            <Text key={project.title} style={index > 0 ? styles.topMargin : {}}>
              <Text style={styles.sectionSubtitle}>{project.title}.</Text>
              <Text style={styles.sectionContent}>
                {" "}
                {project.desc}{" "}
                {project.sourceCodeLinks.map((link) => (
                  <Link key={link.link} src={link.link}>
                    ({link.linkTitle}){" "}
                  </Link>
                ))}
              </Text>
            </Text>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          <View style={styles.hr} />
          {certificates.map((certificate, index) => (
            <View
              key={certificate.title}
              style={index > 0 ? styles.topMargin : {}}
            >
              <Text style={styles.sectionSubtitle}>{certificate.title}</Text>
              <Text style={styles.sectionContent}>{certificate.provider}</Text>
              <Text style={styles.sectionContent}>
                Issued {certificate.issuedDate}
              </Text>
              <Link style={styles.sectionContent} src={certificate.url}>
                (View Credential)
              </Link>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default CV;
