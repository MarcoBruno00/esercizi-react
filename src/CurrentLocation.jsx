import { useCurrentLocation } from "./useCurrentLocation";

export const CurrentPosition = () => {
  const { findMe, latitude, longitude, positionLink } = useCurrentLocation();

  return (
    <>
      {latitude ? (
        <div>
          <a href={positionLink}>Open Map</a>
          <p>
            Latitudine: {latitude}
            <hr />
            Longitudine: {longitude}
          </p>
        </div>
      ) : null}

      <button onClick={findMe}>Find Me</button>
    </>
  );
};