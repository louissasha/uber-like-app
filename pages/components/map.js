import React, { Component, useRef, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
//import mapboxGl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibG91aXNzYXNoYSIsImEiOiJjbDBnemsyNjAwM3BnM2RxYmJsbmVhYTl4In0.c8o2EOWS84tQ_gBYhIGEsA";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.032, 45.913],
      },
      properties: {
        title: "Mapbox",
        description: "Washington, D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.414, 40.776],
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-73.561, 45.508],
      },
      properties: {
        title: "Mapbox",
        description: "Montreal, Quebec",
      },
    },
  ],
};

const Map = (props) => {
  //console.log(props);
  const mapContainer = useRef(null);
  let map = useRef(null);
  const [lng, setLng] = useState(-73.6);
  const [lat, setLat] = useState(45.51);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    //if (map.current) return; // initialize map only once
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11", //mapbox://styles/mapbox/dark-v11  mapbox://styles/mapbox/streets-v12 mapbox://styles/mapbox/streets-v11
      center: [lng, lat],
      zoom: 9,
    });

    // new mapboxgl.Marker().setLngLat([-73.6, 45.1]).addTo(map);
    // //console.log(marker);

    // geojson.features.map((features) =>
    //   new mapboxgl.Marker().setLngLat(features.geometry.coordinates).addTo(map)
    // );

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLng(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    if (props.pickupCoordinates) addToMap(map, props.pickupCoordinates.center);
    if (props.dropoffCoordinates)
      addToMap(map, props.dropoffCoordinates.center);

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds(
        [props.pickupCoordinates.center, props.dropoffCoordinates.center],
        {
          padding: 50,
        }
      );
    }

    return () => map.remove();
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  // useEffect(() => {
  //   //console.log(props.pickupCoordinates.place_name);
  //   //console.log(props.pickupCoordinates.center);
  //   if (rops.pickupCoordinates) {
  //     addToMap(map);
  //   }
  // }, [props.pickupCoordinates, props.dropoffCoordinates]);

  return (
    <Wrapper id="map">
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
        rel="stylesheet"
      ></link>
    </Wrapper>
  );
};

const Wrapper = tw.div`
flex-1 h-1/2`;

export default Map;
