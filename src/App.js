import "./App.css";
import Header from "./components/Header/Header.jsx";
import Section from "./components/UI/Section/Section.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Manage from "./components/Manage/Manage.jsx";

import { useState } from "react";

function App() {
  const [selectedContent, setSelectedContent] = useState("dashboard");

  const selectHandler = (selected) => {
    setSelectedContent(selected);
  };

  let content = <Dashboard />;

  if (selectedContent === "manage") {
    content = <Manage />;
  }

  return (
    <main className="app">
      <Header onSelect={selectHandler} selected={selectedContent} />
      <Section>{content}</Section>
    </main>
  );
}

export default App;
