const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("collapsibleNavbar");

// eslint-disable-next-line no-undef
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((n) => {
  n.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

const projects = [
  {
    id: 1,
    name: "All Awesome Books",
    company: "Microverse",
    description:
      'This is a simple project to add and delete books using "localStorage"',
    featureImage: "Awesome-book-initial.png",
    tools: ["BootStrap", "CSS", "JavaScript", "HTML"],
    liveVersion: "https://dilsherb.github.io/awesome-books-implimenting-ES6/",
    source: "https://github.com/DilsherB/awesome-books-implimenting-ES6",
  },
  {
    id: 2,
    name: "TODO List",
    company: "Microverse",
    description:
      'Hi! Here I used localStorage to impliment the CRUD functionality. For further detail please click "see live" or "see source".',
    featureImage: "todo list.png",
    tools: ["Webpack", "CSS", "JavaScript", "HTML"],
    liveVersion: "https://dilsherb.github.io/TODO-List/dist/",
    source: "https://github.com/DilsherB/TODO-List",
  },
  {
    id: 3,
    name: "OS conference",
    company: "Microverse",
    description: "It is a dummy page for OS Conference.",
    featureImage: "OS conference.png",
    tools: ["CSS", "JavaScript", "HTML", "FontAwesome"],
    liveVersion: "https://dilsherb.github.io/OS-conference/",
    source: "https://github.com/DilsherB/OS-conference",
  },
  {
    id: 4,
    name: "Portfolio",
    company: "Myself",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featureImage: "portfolio.png",
    tools: ["BootStrap", "CSS", "JavaScript", "HTML"],
    liveVersion: "https://dilsherb.github.io/Portfolio/",
    source: "https://github.com/DilsherB/DS-Portfolio",
  },
  {
    id: 5,
    name: "Covid Updated Data",
    company: "Microverse",
    description: "Here I created a website to see Covid-19 Data",
    featureImage: "covid.png",
    tools: ["React", "TailwindCSS", "Axios/API", "HTML"],
    liveVersion: "https://capstone-h4wy.onrender.com/",
    source:
      "https://github.com/DilsherB/covid-data-capstone-project-with-react-redux.git",
  },
  {
    id: 6,
    name: "TV Maze App",
    company: "Microverse",
    description:
      "Here I am using API to fetch and show data using axios in React and styled it with css",
    featureImage: "tvmaze.png",
    tools: ["WebPack", "CSS", "JavaScript", "HTML"],
    liveVersion: "https://jscapstone-dilsher.netlify.app/",
    source: "https://github.com/DilsherB/JSCapstone.git",
  },
  {
    id: 7,
    name: "Space Travellors Hub",
    company: "Microverse",
    description:
      "Another project to show API data with routes. Styling it. doing it collaboratively.",
    featureImage: "spaceTravelorsHub.png",
    tools: ["React", "CSS/Tailwind", "API", "HTML"],
    liveVersion: "https://spacetravelorshub.onrender.com/",
    source: "https://github.com/DilsherB/Space-Travelers-Hub.git",
  },
  {
    id: 8,
    name: 'API with Search Functionality',
    company: 'Microverse',
    description: 'Another solo react project with search functionality. It uses API and fetch data. It uses bootstrap for styling.',
    featureImage: 'search.png',
    tools: ['React', 'CSS/Bootstrap', 'API', 'HTML'],
    liveVersion: 'https://dilsher-react-search.netlify.app/',
    source: 'https://github.com/DilsherB/react-recipe.git',
  },
  {
    id: 9,
    name: "Budget App",
    company: "Microverse",
    description:
      "An app to manage budget. You can create categories to record your transactions. You can record your transactions to look back and manage.",
    featureImage: "budget app.png",
    tools: ["Rails", "CSS", "Tailwind", "HTML"],
    liveVersion: "https://ror-budget-maker.onrender.com/",
    source: "https://github.com/DilsherB/ror-budget-maker.git",
  },
  {
    id: 10,
    name: "API with Search Functionality",
    company: "Microverse",
    description:
      "Another solo react project with search functionality. It uses API and fetch data. It uses bootstrap for styling.",
    featureImage: "search.png",
    tools: ["React", "CSS/Bootstrap", "API", "HTML"],
    liveVersion: "https://dilsher-react-search.netlify.app/",
    source: "https://github.com/DilsherB/react-recipe.git",
  },
];

const myProjetcs = document.querySelector("#recentWorks");
projects.forEach((project) => {
  const works = document.createElement("works");
  works.innerHTML = `
  <section class="row d-flex justify-content-around">
    
        <div class="card my-3 py-3">
            <img src="./images/${project.featureImage}" alt="Project ${project.id}" width="450px" height="250px">
            <div class="card-body">
                <h3 class="card-title text-center">${project.name}<br> ${project.company}</h3>
                <div class="d-flex gap-1 justify-content-center">
                    <button class="btn btn-secondary btn-outline-success rounded-3" disabled>${project.tools[0]}</button>
                    <button class="btn btn-secondary btn-outline-success rounded-3" disabled>${project.tools[1]}</button>
                    <button class="btn btn-secondary btn-outline-success rounded-3" disabled>${project.tools[2]}</button>
                    <button class="btn btn-secondary btn-outline-success rounded-3" disabled>${project.tools[3]}</button>
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-success m-3 showModal" data-bs-toggle="modal" data-bs-target="#project${project.id}">See Project</button>
                    <div class="modal fade" id="project${project.id}">
                        <div class="modal-dialog bg-white rounded-3 modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <img class="mx-2" src="./images/${project.featureImage}" alt="Project ${project.id}">
                                <div class="d-flex justify-content-between m-2">
                                  <h3 class="col-md-6 d-flex justify-content-start"> ${project.name}</h3>
                                  <div class="col-md-6 d-flex justify-content-end gap-3" id="modalBtnsDt">
                                    <a href="${project.liveVersion}" target="_blank">  
                                      <button type="button" class="btn btn-success px-1">See live
                                        <i class="fa fa-arrow-up-right-from-square fa-lg"></i>
                                      </button>
                                    </a>
                                    <a href="${project.source}" target="_blank">
                                      <button type="button" class="btn btn-success px-1">See source
                                        <i class="fa-brands fa-github fa-lg"></i>
                                      </button>
                                    </a>
                                  </div>
                                </div>
                                  <div class="d-flex gap-1 justify-content-start mb-3" id="body${project.id}">
                                      <button class="btn btn-sm rounded-pill langsBg" disabled>${project.tools[0]}</button>
                                      <button class="btn ms-2 btn-sm rounded-pill langsBg" disabled>${project.tools[1]}</button>
                                      <button class="btn ms-2 btn-sm rounded-pill langsBg" disabled>${project.tools[2]}</button>
                                      <button class="btn ms-2 btn-sm rounded-pill langsBg" disabled>${project.tools[3]}</button>
                                  </div>
                                <div class="mx-2 d-flex justify-content-left"> ${project.description}</div>
                                <div class="d-flex justify-content-center gap-3 mb-2" id="modalBtnsMb">
                                  <a href="${project.liveVersion}" target="_blank">  
                                    <button type="button" class="btn btn-success px-1">See live
                                      <i class="fa fa-arrow-up-right-from-square fa-lg"></i>
                                    </button>
                                  </a>
                                  <a href="${project.source}" target="_blank">
                                    <button type="button" class="btn btn-success px-1">See source
                                      <i class="fa-brands fa-github fa-lg"></i>
                                    </button>
                                  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
    `;
  myProjetcs.appendChild(works);
});

// form validation (only email)
const email = document.querySelector("#email").value;
const form = document.querySelector("#contact");
form.addEventListener("submit", (event) => {
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    document.getElementById("validationMsg").innerHTML =
      "Please use all small letters in Email";
  }
});
