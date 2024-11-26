import imgdaniel from "./assets/images/image-daniel.jpg";
import imgjonathan from "./assets/images/image-jonathan.jpg";
import imgkira from "./assets/images/image-kira.jpg";
import imgjeanette from "./assets/images/image-jeanette.jpg";
import imgpatrick from "./assets/images/image-patrick.jpg";

import Card from "./components/Card";

function App() {
  const CardItems = [
    {
      img: imgdaniel,
      name: "Daniel Clifford",
      header:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      text: "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
    },
    {
      img: imgjonathan,
      name: "Jonathan Walters",
      header: "The team was very supportive and kept me motivated",
      text: "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
    },
    {
      img: imgkira,
      name: "Kira Whittle",
      header: "Such a life-changing experience. Highly recommended!",
      text: "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
    },
    {
      img: imgjeanette,
      name: "Jeanette Harmon",
      header: "An overall wonderful and rewarding experience",
      text: "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
    },

    {
      img: imgpatrick,
      name: "Patrick Abrams",
      header:
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      text: "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
    },
  ];

  return (
    <div className="min-h-screen flex  justify-center items-center bg-[var(--Lightgrayishblue)]  ">
      <div className="container grid grid-cols-4 grid-rows-2 gap-4 rounded-lg  w-[70%] max-xl:w-[85%]  max-lg:my-20 ">
        <div
          className="card1 card col-start-1 col-end-3 row-start-1 row-end-2 bg-[var(--Moderateviolet)] shadow-lg text-white py-6 px-8 
          "
        >
          <Card
            img={CardItems[0].img}
            name={CardItems[0].name}
            header={CardItems[0].header}
            text={CardItems[0].text}
          />
        </div>
        <div className="card2 card col-start-3 col-end-4 row-start-1 row-end-2 bg-[var(--Verydarkgrayishblue)] shadow-lg text-white py-6 px-8 ">
          <Card
            img={CardItems[1].img}
            name={CardItems[1].name}
            header={CardItems[1].header}
            text={CardItems[1].text}
          />
        </div>
        <div className="card3 card col-start-4 col-end-5 row-start-1 row-end-3  bg-[var(--White)]  shadow-lg py-6 px-8 ">
          <Card
            img={CardItems[2].img}
            name={CardItems[2].name}
            header={CardItems[2].header}
            text={CardItems[2].text}
          />
        </div>
        <div className="card4 card col-start-1 col-end-2 row-start-2 row-end-3 bg-[var(--White)] shadow-lg py-6 px-8 ">
          <Card
            img={CardItems[3].img}
            name={CardItems[3].name}
            header={CardItems[3].header}
            text={CardItems[3].text}
          />
        </div>
        {/* max-lg:row-span-1 max-lg:col-span-2 max-lg:row-start-1 max-lg:row-end-2 max-lg:col-start-1 max-lg:col-end-3  */}
        <div className="card5 card col-start-2 col-end-4 row-start-2 row-end-3  bg-[var(--Verydarkblackishblue)]  shadow-lg text-white py-6 px-8  ">
          <Card
            img={CardItems[4].img}
            name={CardItems[4].name}
            header={CardItems[4].header}
            text={CardItems[4].text}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
