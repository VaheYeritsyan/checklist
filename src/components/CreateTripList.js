import React, { useState } from "react";
import Country from "./country/Country";
import CalendarDate from "./data/Data";
import Save from "./Save";
import Season from "./Season";
import TransportList from "./transport/TransportList";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import Modal from "./Modal";
import { useEffect } from "react";

export default function CreateTripList(props) {
  const {
    select,
    setSelectSeason,
    transportName,
    setTransportName,
    selectCountry,
    setSelectCountry,
    newTrip,
    setNewTrip,
    setSelectDate,
    selectDate,
  } = props;
  const navigate = useNavigate();
  const location = useLocation();

  var backButtonPrevented = false;
  window.history.pushState(null, document.title, location.href);

  function popStateListener() {
    if (backButtonPrevented === false) {
      window.history.pushState(null, document.title, location.href);
      console.log("Back Button Prevented");
      backButtonPrevented = true;
    } else {
      window.removeEventListener("popstate", popStateListener);
      window.history.back();
    }
  }

  useEffect(() => {
    window.addEventListener("popstate", popStateListener);
    return () => {
      window.addEventListener("popstate", popStateListener);
    };
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <div style={{ display: "flex", color: "blue" }}>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          <HomeIcon />
        </Button>
        <p style={{ textAlign: "center" }}> Checklist options</p>
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <div style={{ display: "flex" }}>
            <span style={{ width: "50%" }}>1.Season </span>
            <Season setSelectSeason={setSelectSeason} />
          </div>

          <div style={{ display: "flex", gap: 31 }}>
            <span style={{ width: "50%" }}>2.Transport </span>
            <TransportList
              style={{ width: "50%" }}
              transportName={transportName}
              setTransportName={setTransportName}
            />
          </div>

          <div style={{ display: "flex" }}>
            <span style={{ width: "50%" }}> 3.Destination</span>
            <Country
              selectCountry={selectCountry}
              setSelectCountry={setSelectCountry}
            />
          </div>
          
          <div style={{ display: "flex" }}>
            <span style={{ width: "50%" }}> 4.Trip date </span>
            <CalendarDate
              selectDate={selectDate}
              setSelectDate={setSelectDate}
            />
          </div>

          
        </div>
      </div>

      <Save
        select={select}
        setSelectSeason={setSelectSeason}
        transportName={transportName}
        setTransportName={setTransportName}
        selectCountry={selectCountry}
        setSelectCountry={setSelectCountry}
        newTrip={newTrip}
        setNewTrip={setNewTrip}
        selectDate={selectDate}
      />

      {/* {select.length || <Modal />} */}
    </div>
  );
}
