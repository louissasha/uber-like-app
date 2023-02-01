import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import Map from "./components/map";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  // get the value for location from the search parameters

  const router = useRouter();
  console.dir(router);
  const { pickup, dropoff } = router.query;
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();
  //   setPickupCoordinates(router.query.pickup);
  //   setDropoffCoordinates(router.query.dropoff);
  const getPickupCoordinates = async (pickupLocation) => {
    const pickup = pickupLocation; // "Montreal Quebec";

    const YOUR_MAPBOX_ACCESS_TOKEN =
      "pk.eyJ1IjoibG91aXNzYXNoYSIsImEiOiJjbDBnemsyNjAwM3BnM2RxYmJsbmVhYTl4In0.c8o2EOWS84tQ_gBYhIGEsA";

    //url "https://api.mapbox.com/geocoding/v5/mapbox.places/
    //url $ curl "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN"
    // :fire
    await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibG91aXNzYXNoYSIsImEiOiJjbDBnemsyNjAwM3BnM2RxYmJsbmVhYTl4In0.c8o2EOWS84tQ_gBYhIGEsA",
          limit: 3,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        //console.dir(data.features[0].center, { depth: null });
        setPickupCoordinates(data.features[0]);
      });
  };

  const getDropOffCoordinates = async (dropoffLocation) => {
    const dropoff = dropoffLocation; //"Toronto Ontario";

    const YOUR_MAPBOX_ACCESS_TOKEN =
      "pk.eyJ1IjoibG91aXNzYXNoYSIsImEiOiJjbDBnemsyNjAwM3BnM2RxYmJsbmVhYTl4In0.c8o2EOWS84tQ_gBYhIGEsA";

    //url "https://api.mapbox.com/geocoding/v5/mapbox.places/
    //url $ curl "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN"
    // :fire
    await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibG91aXNzYXNoYSIsImEiOiJjbDBnemsyNjAwM3BnM2RxYmJsbmVhYTl4In0.c8o2EOWS84tQ_gBYhIGEsA",
          limit: 3,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.dir(data.features[0], { depth: null });
        setDropoffCoordinates(data.features[0]);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmationButton>Confirm UberX</ConfirmationButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

// const RideSelector = tw.div`
// bg-white flex-1`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const Wrapper = tw.div`
flex h-screen flex-co bg-white flex-col`;

const RideContainer = tw.div`
flex-1 flex flex-col text-black`;

const ConfirmationButton = tw.div`
text-white
bg-black
m-4
py-4
text-xl
text-center`;
