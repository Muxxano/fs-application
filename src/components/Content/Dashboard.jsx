import Tab from "../UI/Tabs/Tab";
import Tabs from "../UI/Tabs/Tabs";

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
      <div className="content-status">
        <div className="status-overall">
          <h2>OVERALL</h2>
          <p>coming soon</p>
        </div>
        <div className="status-completion">
          <h2>COMPLETION</h2>
          <p>coming soon</p>
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
