import React from "react";
import Feature from "../../Components/Feature/Feature";
import Member from "../../Components/Member/Member";

import plantInHand from "../../Assets/plant-hand.webp";
import farmerTree from "../../Assets/tree.webp";
import soilLayer from "../../Assets/block-layer.webp";
import farmer from "../../Assets/farmer.webp";
import member1 from "../../Assets/team-1.webp";
import member2 from "../../Assets/team-2.webp";
import member3 from "../../Assets/team-3.webp";
import member4 from "../../Assets/team-4.webp";
import brownTree from "../../Assets/brown-tree.webp";
import whiteTree from "../../Assets/white-tree.webp";
import road from "../../Assets/road.webp";
import "./Home.css";

const features = [
  {
    // img: "",
    title: "Community-Centric",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow",
  },
  {
    // img: "",
    title: "Community-Centric",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow",
  },
  {
    // img: "",
    title: "Community-Centric",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow",
  },
];

const members = [
  {
    photo: member1,
    name: "Shaapir Prio",
    title: "Assistant Director",
  },
  {
    photo: member2,
    name: "Shaapir Prio",
    title: "Assistant Director",
  },
  {
    photo: member3,
    name: "Shaapir Prio",
    title: "Assistant Director",
  },
  {
    photo: member4,
    name: "Shaapir Prio",
    title: "Assistant Director",
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="home__section1" id="section1">
        <div className="home__section1Content">
          <div className="home__section1Left">
            <h1 className="home__heading home__mainHeading">
              Reforest the planet.
            </h1>

            <p className="home__para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>

            <button className="btn brown-bg-btn">Discover Now</button>
          </div>

          <div className="home__section1Right">
            <img src={plantInHand} alt="Plant in a hand" />
          </div>
        </div>
      </div>

      <div className="home__section2">
        <h1 className="home__heading home__section2Heading">
          Why Regen Network?
        </h1>

        <div className="home__features">
          {features.map((feature) => (
            <Feature
              // img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <div className="home__section3">
        <div className="home__section3Left">
          <img src={farmerTree} alt="Farmer planting a tree" />
        </div>

        <div className="home__section3Right">
          <div className="home__roundContainer">About Us</div>

          <h1 className="home__heading home__smallHeading">
            About Our Soli Company
          </h1>

          <div className="home__section3ParaContainer">
            <p className="home__para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <br />
            <p className="home__para">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially
            </p>
          </div>
          <button className="white-bg-btn btn">Discover Now</button>
        </div>
      </div>

      <div className="home__section4">
        <div className="home__section4Content">
          <div className="home__section4Left">
            <div className="home__roundContainer">
              FEATURED CREDITS CARBONPLUS
            </div>

            <h1 className="home__heading home__smallHeading">
              About The Crisis
            </h1>

            <div>
              <p className="home__para home__section4Para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <br />
              <p className="home__para home__section4Para">
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially
              </p>
            </div>

            <button className="white-bg-btn btn home__section4Btn">
              Discover Now
            </button>
          </div>
          <div className="home__section4Right">
            <img src={soilLayer} alt="Layers of soil" />
          </div>
        </div>
      </div>

      <div className="home__section5">
        <div className="home__section5Content">
          <div className="home__section5Left">
            <h1 className="home__heading home__smallHeading">
              The Art we Did Provide
            </h1>

            <div>
              <p className="home__para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <br />
              <p className="home__para">
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially
              </p>
            </div>

            <button className="white-bg-btn btn">Discover Now</button>
          </div>

          <div className="home__section5Right">
            <div className="home__problem">
              <h1 className="home__problemHeading">PROBLEM:</h1>
              <p className="home__problemDescription">
                Broken economic models incentivize the degradation of land,
                destroy ecosystems and fuel climate change.
              </p>
            </div>
            <img src={farmer} alt="Man digging sand" />
          </div>
        </div>
      </div>

      <div className="home__section6">
        <h1 className="home__heading home__smallHeading">Roadmap</h1>
        <img src={brownTree} alt="Brown tree" className="home__rightTree" />
        <div className="home__section6Content">
          <img src={road} alt="road" className="home__road" />
          <div className="home__roadmapItems">
            <div className="home__roadmapItem">
              <h1 className="home__roadmapHeading home__heading">
                Q4 2021 - Q1 2022
              </h1>
              <ul className="home__roadmapList">
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
              </ul>
            </div>

            <div className="home__roadmapItem">
              <h1 className="home__roadmapHeading home__heading">
                Q4 2021 - Q1 2022
              </h1>
              <ul className="home__roadmapList">
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
              </ul>
            </div>

            <div className="home__roadmapItem">
              <h1 className="home__roadmapHeading home__heading">
                Q4 2021 - Q1 2022
              </h1>
              <ul className="home__roadmapList">
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
              </ul>
            </div>

            <div className="home__roadmapItem">
              <h1 className="home__roadmapHeading home__heading">
                Q4 2021 - Q1 2022
              </h1>
              <ul className="home__roadmapList">
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
              </ul>
            </div>

            <div className="home__roadmapItem">
              <h1 className="home__roadmapHeading home__heading">
                Q4 2021 - Q1 2022
              </h1>
              <ul className="home__roadmapList">
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
              </ul>
            </div>

            <div className="home__roadmapItem">
              <h1 className="home__roadmapHeading home__heading">
                Q4 2021 - Q1 2022
              </h1>
              <ul className="home__roadmapList">
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
                <li className="home__roadmapListItem">
                  Partnership with OneTreePlanted
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img src={whiteTree} alt="Brown tree" className="home__leftTree" />
      </div>

      <div className="home__section7">
        <h1 className="home__heading home__section7Heading">
          Introduce with Our Famous Members
        </h1>

        <div className="home__famousMembers">
          {members.map((member) => (
            <Member
              photo={member.photo}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
