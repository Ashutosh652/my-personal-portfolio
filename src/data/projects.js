const data = [
    {
      title: "Crop Production Prediction",
      subtitle:
        "A machine learning model to predict the amount of crop going to be produced in the next year",
      image: "/images/projects/crop_production_prediction.png",
      date: "2023-09-12",
      desc:
        "Built a website to predict the production amount of five crops (Paddy, Maize, " +
        "Millet, Barley, Wheat) in each disctrict of Nepal. The website is developed using Django REST Framework for " +
        "backend and ReactJS for frontend. The climate data of each of Nepal's districts were collected using NASA's Power " +
        "Access API. The crop production data of 31 years of each district was obtained from ICIMOD's website. The data " +
        "was processed and explored and various models were trained. The best performing model was integrated in the " +
        "website.",
      sourceCodeLinks: [
        {
          linkTitle: "Backend",
          link: "https://github.com/Ashutosh652/crop_predict_backend",
        },
        {
          linkTitle: "Frontend",
          link: "https://github.com/Ashutosh652/crop_predict_frontend",
        },
        {
          linkTitle: "Data Procecssing",
          link: "https://github.com/Ashutosh652/Crop-Yield-Prediction-Data-Preprocessing",
        },
      ],
    },
    {
      title: "RamroBazar",
      subtitle:
        "A C2C e-commerce website built using Django REST framework for back-end APIs and React for front-end.",
      image: "/images/projects/ramrobazar.png",
      date: "2022-10-20",
      desc: "A C2C e-commerce website built using Django REST framework for back-end APIs and React for front-end.",
      sourceCodeLinks: [
        {
          linkTitle: "Backend",
          link: "https://github.com/Ashutosh652/RamroBazar_Backend",
        },
        {
          linkTitle: "Frontend",
          link: "https://github.com/Ashutosh652/RamroBazar_Frontend",
        },
      ],
    },
    {
      title: "HealthPoint",
      subtitle: "A simple web-app built using Django.",
      // link: "http://www.spacepotato.org",
      image: "/images/projects/healthpoint.webp",
      date: "2022-11-17",
      desc:
        "A simple web-app built using Django. It resembles a social media website where people can make " +
        "posts and comments. They can make connections with other users by following them. There are two types of users: " +
        "doctors and normal users. Normal users can post, comment and message other users and doctors. They can request an " +
        "appointment with a doctor. Doctors can set their appointment time, accept or reject appointment requests. Doctors " +
        "need to provide proof in order to be verified.",
      sourceCodeLinks: [
        {
          linkTitle: "Source",
          link: "https://github.com/Ashutosh652/HealthPoint_Project",
        },
      ],
    },
    {
      title: "Poke Web",
      subtitle: "A website front-end created using ReactJS",
      image: "/images/projects/pokeweb.webp",
      date: "2022-03-08",
      desc:
        "A website front-end created using ReactJS and PokeAPI (https://pokeapi.co/) treating pokemon cards " +
        "as products where you can buy those pokemon cards.",
      sourceCodeLinks: [
        { linkTitle: "Source", link: "https://github.com/Ashutosh652/Poke_web" },
      ],
    },
    {
      title: "Alien Invasion",
      subtitle:
        "A classic alien invasion (space invadedrs) game built using Python and Pygame.",
      image: "/images/projects/alien_invasion.gif",
      date: "2022-11-20",
      desc: "A classic alien invasion (space invaders) game built using Python and Pygame.",
      sourceCodeLinks: [
        {
          linkTitle: "Source",
          link: "https://github.com/Ashutosh652/alien-invasion-game",
        },
      ],
    },
    {
      title: "Birthday Wisher",
      subtitle:
        "A simple python script built using Selenium that sends happy birthday message at 12:00am(+30sec error margin) to anyone whose birthday is in the provided excel file.",
      image: "/images/projects/birthday_wisher.webp",
      date: "2024-05-28",
      desc: "A simple python script built using Selenium that sends happy birthday message at 12:00am(+30sec error margin) to anyone whose birthday is in the provided excel file.",
      sourceCodeLinks: [
        {
          linkTitle: "Source",
          link: "https://github.com/Ashutosh652/birthday-wisher",
        },
      ],
    },
  ];
  
  export default data;
  