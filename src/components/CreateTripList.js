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
return () => { window.addEventListener("popstate", popStateListener);}
  })

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
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Home <HomeIcon />{" "}
      </Button>
      <Season setSelectSeason={setSelectSeason} />
      <TransportList
        transportName={transportName}
        setTransportName={setTransportName}
      />
      <CalendarDate selectDate={selectDate} setSelectDate={setSelectDate} />
      <Country
        selectCountry={selectCountry}
        setSelectCountry={setSelectCountry}
      />
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

      {select.length || <Modal />}
    </div>
  );
}
