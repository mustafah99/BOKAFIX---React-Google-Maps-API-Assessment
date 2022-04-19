/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "calc(100%)",
  height: "820px",
  margin: "0 auto",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map: () => JSX.Element = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBCNhke0lSL-ji2W8RLRKDm4UeeC25p5vY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(
    map: React.SetStateAction<null | any>
  ) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  },
  []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
