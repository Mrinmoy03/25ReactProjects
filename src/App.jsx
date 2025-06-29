import React from "react";
import Accordian from "./components/01accordian/Accordian";
import RandomColor from "./components/02random-color/RandomColor";
import Starrating from "./components/03StarRating/StarRating";
import { ImageSlider } from "./components/04image-slider/ImageSlider";
import ProfileCard from "./practice/ProfileCard";
import Greeting from "./practice/Greeting";
import Counter from "./practice/Counter";
import ToggleText from "./practice/ToggleText";
import InputMirror from "./practice/InputMirror";
import SimpleCalculator from "./practice/SimpleCalculator";
import FruitList from "./practice/FruitList";
import DropdownSelector from "./practice/DropdownSelector";
import LikeButton from "./practice/LikeButton";
import LightBulbToggle from "./practice/LightBulbToggle";
import Tabs from "./practice/Tabs";
import RandomQuoteGenerator from "./practice/RandomQuoteGenerator";
import RandomQuoteGenerator2 from "./practice/RandomQuoteGenerator2";
import ScrollProgressBar from "./practice/ScrollProgressBar";
import TemperatureConverter from "./practice/TemperatureConverter";
import ThemeToggler from "./practice/ThemeToggler";
import Liveclock from "./practice/Liveclock";
import UserProfile from "./practice/UserProfile";
import AutoFocusInput from "./practice/AutoFocusInput";
import ClickTRacker from "./practice/ClickTRacker";
import PageTimer from "./practice/PageTimer";
import FactorialCalculator from "./practice/FactorialCalculator";
import Parent from "./practice/Parent";
import { AuthProvider } from "./practice/AuthContext";
import Navbar from "./practice/Navbar";
import Profile from "./practice/Profile";

const App = () => {
  return (
    <>
      <Greeting />
       
      <Accordian />
      <RandomColor />
      <Starrating />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"}
      />

      <ProfileCard
        name="mrinmoy  bhattacharjee"
        age={25}
        bio={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />

      <Counter />
      <ToggleText />
      <InputMirror />
      <SimpleCalculator />
      <FruitList />
      <DropdownSelector />
      <LikeButton />
      <LightBulbToggle />
      <Tabs />
      <RandomQuoteGenerator />
      <RandomQuoteGenerator2 />
      <ScrollProgressBar />
      <TemperatureConverter />
      <ThemeToggler />
      <Liveclock/>
      <UserProfile/>
      <AutoFocusInput/>
      <ClickTRacker/>
      <PageTimer/>
      <FactorialCalculator/>
      <Parent/>
      <AuthProvider>
        <Navbar />
        <Profile/>
        </AuthProvider>
     
    </>
  );
};

export default App;

// core react question 6
