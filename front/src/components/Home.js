import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import iconsax from "./icon.svg";
import messageicon from "./iconsax-2.svg";
import icontalk from "./iconsax-3.svg";
import iconsearch from "./iconsax-4.svg";
import iconschedule from "./iconsax-5.svg";
import iconsettings from "./settings.svg";
import "./home.css";

function Home() {
  const location = useLocation();

  return (
    <div className="homepage">
      <div class="sidebar">
        <div class="frame">
          <div class="div">
            <button class="iconsax">
              <img src={iconsax} />
            </button>
            <button class="iconsax">
              <img src={messageicon} />{" "}
            </button>
            <button class="iconsax">
              <img src={icontalk} />
            </button>

            <button class="iconsax">
              <img src={iconsearch} />
            </button>
            <button class="iconsax">
              <img src={iconschedule} />
            </button>
          </div>
        </div>
        <img class="iconsax" src={iconsettings} />
      </div>
    </div>
  );
}

export default Home;
