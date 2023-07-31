//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/aakash.png",
    place: "Aakash BYJUs",
    time: "(July, 2022 - Present)",
    desp: "<li>Hands on experience building and maintaining REST microservices in a project based on Microservice architecture.</li><li>Delivered scalable design architecture and automated Notification services like Email and SMS services using CRON.</li><li>Created and curated CRUD APIs, handled complicated search queries using specifications, fixed bugs and delivered before deadlines.</li>"},
  {
    title: "SDE Intern",
    cardImage: "assets/images/experience-page/aakash.png",
    place: "Aakash BYJUs",
    time: "(January, 2022 - July, 2022)",
    desp: "<li>An Integral part of the Technology Innovation Lab, working on a project which is based on Microservice Architecture</li><li>Implemented Audit Aware, which helped in keeping track of changes and made resolving issues more convenient.</li><li>Implemented JUnit Testing in the services which automated the process of testing services,resulting in saving 3x more time</li>",
  },
  {
    title: "Community Influencer",
    cardImage: "assets/images/experience-page/mentorboxx.png",
    place: "MentorBoxx",
    time: "(July, 2021 - August, 2021)",
    desp: "<li>Created, curated and managed published content for feed and stories across social media channels</li><li>Produced relevant product content to reach target customers.</li><li>Learned about the services inside and out to give best possible explanantions and answer consumer questions.</li>",
  },
  {
    title: "Frontend Developer Intern",
    cardImage: "assets/images/experience-page/marketgad.jfif",
    place: "MarketGad",
    time: "(July, 2020 - September, 2020)",
    desp: "<li>Worked in making the Frontend UI of the website</li><li>Used React for making context hooks and linking APIs</li><li>Conceived and built optimized web pages in ReactJS , including Bootstrap integration and cross-browser compatibility, to support marketing .</li><li>Collaborated with the team during the entire period which enhanced my interpersonal skills.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "30 DaysofFlutter",
    cardImage: "assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);