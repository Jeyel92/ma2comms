import { useEffect, useRef, useMemo } from "react";
import { useJsApiLoader, GoogleMap, MarkerF  } from "@react-google-maps/api";
export default function Map() {
  const libraries = useMemo(() => ["maps"], []);
  const mapCenter = useMemo(() => ({ lat: 5.394960, lng: -25.977414 }), []);
  
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBu2vKKH_fvvuQaCqMFDsVxgFiPPzcfSrI",
    libraries: libraries,
  });
  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      scrollwheel: false,
      keyboardShortcuts: false,
      gestureHandling:"none"
    }),
    []
  );
  if (!isLoaded) return <div>Loading...</div>;
  // eslint-disable-next-line no-undef
  return  <GoogleMap zoom={2} center={mapCenter}  options={mapOptions}  mapTypeId={google.maps.MapTypeId.TERRAIN}>
  <MarkerF  position={{ lat: -23.5475, lng: -46.63611 }}  label="São Paulo" />
  <MarkerF  position={{lat: 53.86893, lng: 10.68729}}  label="Lübeck"  />
</GoogleMap>
  
}
