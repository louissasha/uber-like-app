import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useState } from "react";

const imgSource = {
  backbutton: "https://cdn-icons-png.flaticon.com/512/54/54476.png",
  periodDot: "https://cdn-icons-png.flaticon.com/512/9210/9210974.png",
  line: "https://cdn-icons-png.flaticon.com/512/7794/7794678.png",
  square: "https://cdn-icons-png.flaticon.com/512/8848/8848109.png",
  plusIcon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
  starIcon: "https://cdn-icons-png.flaticon.com/512/2893/2893811.png",
};
const Search = () => {
  //use useState to create a value to save the data that was in the input
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  //   console.log(pickup);
  //   console.log(dropoff);
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton src={imgSource.backbutton} />
        </Link>
      </ButtonContainer>

      {/**BACKSLASH BUTTON CONTAINER*/}
      {/**INPUT CONTAINER */}
      <InputContainer>
        <FromtoIcons>
          <Circle src={imgSource.square} />
          <Line src={imgSource.line} />
          <Square src={imgSource.square} />
        </FromtoIcons>
        <InputBoxes>
          <InputBox
            placeholder="Enter pickup Location"
            value={pickup}
            onChange={(e) => {
              setPickup(e.target.value);
            }}
          />
          <InputBox
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src={imgSource.plusIcon} />
      </InputContainer>
      {/**SAVED PLACES */}
      <SavedPlaces>
        <StarIcon src={imgSource.starIcon} />
        Saved Places
      </SavedPlaces>

      <Confirm>
        <ConfirmLocations>Confirm Locations</ConfirmLocations>
      </Confirm>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
      >
        <ConfirmLocationsContainer>
          Confirmed Locations
        </ConfirmLocationsContainer>
      </Link>

      {/**CONFIRM LOCATIONS */}
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen text-black`;

const ButtonContainer = tw.div`
bg-white px-4 py-2
`;

const BackButton = tw.img`
h-12 cursor-pointer`;

const FromtoIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`;

const InputContainer = tw.div`
bg-white flex items-center px-4
`;

const Circle = tw.img`
h-5 p-2
`;

const Line = tw.img`h-10 mb-0 p-2`;

const Square = tw.img`h-5 mb-0 p-2`;

const InputBoxes = tw.div`
flex flex-col
flex-1`;

const InputBox = tw.input`
h-10 bg-gray-100 flex my-2
rounded-md p-2
outline-none
border-none`;

const PlusIcon = tw.img`
w-10 h-10 p-2 bg-gray-200 rounded-full ml-3`;

const SavedPlaces = tw.div`
flex bg-white  items-center px-2 py-2 `;

const StarIcon = tw.img`
h-10 w-10 bg-gray-300 rounded-full p-2 m-2`;

const Confirm = tw.div`
flex`;

const ConfirmLocations = tw.button`
bg-black text-white m-2  flex-1 items-center`;

/**
 * bg-black -  makes the backgroud black
text-white - makes the text white
text-center - this will center the text 
mt-2 mx-4 -  this controls the margins the margins are outside the box so ti controls the space between the edge of the screen and the box of the containter
py-3 - this is padding, this controls the space inside the box between the content itself like the text or other buttons and you can control the x and the y axis individually as well 
text-2xl -  this controls the size of the text
cursor-pointer - this makes it so that when you hover over a element the cursor will transform into a pointer.
 */
const ConfirmLocationsContainer = tw.div`
bg-black
text-white
text-center
mt-2 mx-4
py-3
text-2xl
cursor-pointer`;
