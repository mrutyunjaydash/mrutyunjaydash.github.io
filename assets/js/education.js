AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "The Web Developer Bootcamp 2020",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/the-web-developer-bootcamp/",
  },
  {
    title: "Complete React Tutorial",
    cardImage: "assets/images/education-page/youtube.png",
    moocLink: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG",
  },
  {
    title: "Python3",
    cardImage: "assets/images/education-page/sololearn.jpg",
    moocLink: "https://www.sololearn.com/play/python",
  },
  {
    title: "Firebase Firestore Tutorial",
    cardImage: "assets/images/education-page/youtube.png",
    moocLink: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9itfjle0ji1xOZ2cjRGY_WB",
  },
  {
    title: "PHP",
    cardImage: "assets/images/education-page/progate.jpg",
    moocLink: "https://progate.com/languages/php",
  },

];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage,moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);



/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "International Institute of Information Technology",
    image: "./assets/images/education-page/iiitbbsrlogo.png",
    subheading:"B.Tech, Computer Science & Engineering",
    description:"Year: 2018-Present</br>CGPA: 8.64",
  },
  {
    heading: "DAV Public School,MCL,Jagannath Area",
    image: "./assets/images/education-page/davderalogo.jpg",
    subheading:"CBSE, XII (Senior Secondary)",
    description:"Year of Completion: 2018</br>Percentage: 95.6%",
  },
  {
    heading: "DAV Public School,MCL,Jagannath Area",
    image: "./assets/images/education-page/davderalogo.jpg",
    subheading:"CBSE, X (Secondary)",
    description:"Year of Completion: 2016</br>CGPA: 10",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description}) =>
      (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <br/>
            <span style="opacity: 0.9; font-size: 15px;">
              ${description}
            </span>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);