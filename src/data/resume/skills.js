const skills = [
  {
    title: "Javascript",
    competency: 3.5,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "Node.JS",
    competency: 2,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "Next.JS",
    competency: 1,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "Bash",
    competency: 2,
    category: ["Tools", "Languages"],
  },
  {
    title: "PostgreSQL/SQLite3/SQL",
    competency: 4,
    category: ["Web Development", "Databases", "Languages"],
  },
  {
    title: "Express.JS",
    competency: 2.5,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "Flask",
    competency: 4,
    category: ["Web Development", "Python"],
  },
  {
    title: "FastAPI",
    competency: 3.5,
    category: ["Web Development", "Python"],
  },
  {
    title: "Git",
    competency: 4,
    category: ["Tools"],
  },
  {
    title: "Docker",
    competency: 2,
    category: ["Tools"],
  },
  {
    title: "Numpy",
    competency: 2,
    category: ["Data Science", "Data Engineering", "Python", "ML Engineering"],
  },
  {
    title: "Jupyter Notebook",
    competency: 3,
    category: ["Data Science", "Python"],
  },
  {
    title: "Typescript",
    competency: 1,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "HTML + CSS",
    competency: 4,
    category: ["Web Development", "Languages"],
  },
  {
    title: "Python",
    competency: 5,
    category: ["Languages", "Python", "ML Engineering"],
  },
  {
    title: "C++",
    competency: 1,
    category: ["Languages"],
  },
  {
    title: "Pandas",
    competency: 2.5,
    category: ["Data Engineering", "ML Engineering", "Python"],
  },
  {
    title: "Matplotlib",
    competency: 2,
    category: ["Data Engineering", "ML Engineering", "Python"],
  },
  {
    title: "Scikit-Learn",
    competency: 2,
    category: ["Data Engineering", "ML Engineering", "Python"],
  },
  {
    title: "Django/Django REST Framework",
    competency: 5,
    category: ["Web Development", "Python"],
  },
  {
    title: "ReactJS",
    competency: 2.5,
    category: ["Web Development", "Javascript"],
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
