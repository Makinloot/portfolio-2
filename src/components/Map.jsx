import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to update dimensions when the window is resized
    window.addEventListener("resize", updateDimensions);

    // Initial call to set dimensions
    updateDimensions();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52, 0],
        center: [-8, dimensions.width > 880 ? -5 : -3],
        scale: dimensions.width >= 900 ? 1200 : 2000,
      }}
    >
      <ZoomableGroup center={[39.7151, 41.8271]}>
        <Geographies
          geography="/features.json"
          fill="transparent"
          stroke="#ccc"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ZoomableGroup>
      <Annotation
        subject={[
          dimensions.width > 880 ? 2.8 : 2,
          dimensions.width > 880 ? 48.2 : 50,
        ]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#e2e2e2",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          className="text-3xl"
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#e2e2e2"
        >
          {"Tbilisi"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
