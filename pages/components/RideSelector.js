import React from "react";
import tw from "tailwind-styled-components";
import carList from "../data/carList";
import _ from "lodash";

const carImages = {
  simpleCar: "https://cdn-icons-png.flaticon.com/512/2736/2736918.png",
};

const RideSelector = () => {
  let list = carList.map((car, index) => {
    return (
      <Car key={index}>
        <CarImage src="https://cdn-icons-png.flaticon.com/512/2736/2736918.png" />
        <CarDetails>
          <Service>1</Service>
          <Time>5 mins away</Time>
        </CarDetails>
        <Price>1</Price>
      </Car>
    );
  });

  console.log(list);
  console.dir(carList);
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car) => {
          return (
            <Car>
              <CarImage src={car.imageUrl} />
              <CarDetails>
                <Service>{car.service}</Service>
                <Time>5 mins away</Time>
              </CarDetails>
              <Price>{`\$${_.round(car.multiplier * 12.99, 2)}`}</Price>
            </Car>
          );
        })}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
flex-1  h-1/2
text-black

flex flex-col`;

const Title = tw.div`
text-center text-gray-500
text-xs py-2 border-b`;

const CarList = tw.div`
overflow-y-scroll`;

const Car = tw.div`
flex items-center`;

const CarImage = tw.img`
h-14
m-2`;

const CarDetails = tw.div`
flex-1
p-4`;
const Time = tw.div`
text-xs text-blue-500`;
const Price = tw.div``;
const Service = tw.div`
font-medium`;
