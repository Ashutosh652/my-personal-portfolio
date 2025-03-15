const skills = [
  {
    title: "Javascript",
    competency: 3,
    category: ["Web Development", "Languages", "Javascript"],
    showInCV: false,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "Node.JS",
    competency: 1,
    category: ["Web Development", "Javascript"],
    showInCV: false,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "Next.JS",
    competency: 1,
    category: ["Web Development", "Javascript"],
    showInCV: false,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "Bash",
    competency: 2,
    category: ["Tools", "Languages"],
    showInCV: false,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "PostgreSQL/SQLite3/SQL",
    competency: 3.15,
    category: ["Web Development", "Databases", "Languages"],
    showInCV: true,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "Express.JS",
    competency: 1,
    category: ["Web Development", "Javascript"],
    showInCV: false,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "Flask",
    competency: 3.25,
    category: ["Web Development", "Python"],
    showInCV: true,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "FastAPI",
    competency: 3.75,
    category: ["Web Development", "Python"],
    showInCV: true,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "Git",
    competency: 4,
    category: ["Tools"],
    showInCV: false,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "Docker",
    competency: 2,
    category: ["Tools"],
    showInCV: false,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "Python",
    competency: 4.5,
    category: ["Languages", "Python", "ML Engineering"],
    showInCV: true,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "Pandas",
    competency: 2.5,
    category: ["Data Engineering", "ML Engineering", "Python"],
    showInCV: false,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "Django/Django REST Framework",
    competency: 4.5,
    category: ["Web Development", "Python"],
    showInCV: true,
    type: "technical",
    showInWebsite: true
  },
  {
    title: "ReactJS",
    competency: 2,
    category: ["Web Development", "Javascript"],
    showInCV: false,
    type: "technical",
    showInWebsite: true
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  "#6968b3",
  "#37b1f5",
  "#40494e",
  "#515dd4",
  "#e47272",
  "#cc7b94",
  "#3896e2",
  "#c3423f",
  "#d75858",
  "#747fff",
  "#64cb7b",
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
