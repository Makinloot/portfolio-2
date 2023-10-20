import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";
import { useAppContext } from "../context/ContextProvider";

const Map = () => {
  const { dimensions } = useAppContext();
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [
          dimensions.width >= 750 ? 14 : 20,
          dimensions.width >= 750 ? -3 : -7,
        ],
        scale: 1600,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#0d1a32"
        stroke="#636363"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[44.3, 41.75]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Tbilisi"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
