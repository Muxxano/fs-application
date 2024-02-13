import Tab from "../UI/Tabs/Tab.jsx";
import Tabs from "../UI/Tabs/Tabs.jsx";
import Greet from "../UI/Greet/Greet.jsx";

import buildingImage from "../../assets/building.png";
import roomImage from "../../assets/room.png";
import spaceImage from "../../assets/space.png";
import { useState } from "react";

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("buildings");

  const selectHandle = (selected) => {
    setSelectedTab(selected);
  };

  return (
    <>
      <Greet />
      <div className="content-status">
        <div className="status-overall-container">
          <circle className="overall">
            <h1>0%</h1>
          </circle>
          <h2>OVERALL</h2>
        </div>
        <div className="status-completion-container">
          <circle className="completion">
            <h1>0%</h1>
          </circle>
          <h2>COMPLETION</h2>
        </div>
      </div>
      <div className="core-container">
        <Tabs
          buttons={
            <>
              <Tab
                buttonName="Buildings"
                isSelected={selectedTab === "buildings"}
                onSelect={() => selectHandle("buildings")}
                color="orange"
                image={buildingImage}
              />
              <Tab
                buttonName="Rooms"
                isSelected={selectedTab === "rooms"}
                onSelect={() => selectHandle("rooms")}
                color="blue"
                image={roomImage}
              />
              <Tab
                buttonName="Spaces"
                isSelected={selectedTab === "spaces"}
                onSelect={() => selectHandle("spaces")}
                color="grey"
                image={spaceImage}
              />
            </>
          }
          className="core-tabs"
        >
          <div className="core-content">
            <h2>CONTENT</h2>
            <p>coming soon</p>
          </div>
        </Tabs>
      </div>
    </>
  );
}
