import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import mapboxgl from "!mapbox-gl";
import Map from "./components/map";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
mapboxgl.accessToken =
  "pk.eyJ1IjoibG91aXNzYXNoYSIsImEiOiJjbDBnemsyNjAwM3BnM2RxYmJsbmVhYTl4In0.c8o2EOWS84tQ_gBYhIGEsA";

const imgSources = {
  ride: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png",
  wheel:
    "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1630694937/assets/43/a4d033-3346-4b1a-a42d-af4fbe2e935e/original/uber-bike.png",
  reserve:
    "https://www.chinooksd.ca/PublishingImages/Lists/Announcements/NewForm/calendar.png",
};

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* header */}
        <Header>
          <UberLogo src="https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png" />
          <Profile>
            <Name>Sasha Louis</Name>
            <UserImage src="https://freesvg.org/img/1547510251.png" />
          </Profile>
        </Header>
        {/* action buittons*/}
        {/* inout button */}
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src={imgSources.ride} />
              Ride
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src={imgSources.wheel} />
              Wheel
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src={imgSources.reserve} />
              Reserve
            </ActionButton>
          </Link>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen bg-white`;

const ActionItems = tw.div`
flex-1 p-4  text-black`;

const Header = tw.div`
flex justify-between items-center`;

const UberLogo = tw.img`
h-12`;

const UserImage = tw.img`
h-12 w-12 rounded-full border-gray p-px`;

const Profile = tw.div`
flex items-center`;

const Name = tw.div`
mr-4 w-20 text-sm text-black`;

const ActionButtons = tw.div`
flex justify-between mt-8`;

const ActionButton = tw.div`
flex flex-col justify-center
bg-gray-200 flex-1 m-1 h-32 items-center rounded-lg transform hover:scale-105 transition text-xl

`;

const ActionButtonImage = tw.img`
h-3/5`;

const InputButton = tw.div`
h-20 m-1  bg-gray-200 p-4 text-2xl flex items-center rounded-lg mt-8 `;

// const Map = tw.div`
// flex-1`;

// uber logo image source address :  https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png  https://1000logos.net/wp-content/uploads/2017/09/Uber-logo.jpg  https://1000logos.net/wp-content/uploads/2017/09/Uber-Logo-2016.jpg
// batman logo https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png
// avatar https://en.wikipedia.org/wiki/File:Avatar_Aang.png
