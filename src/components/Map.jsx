import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 2000,
      }}
    >
      <ZoomableGroup center={[39.7151, 41.8271]}>
        <Geographies
          geography="/features.json"
          fill="#0000000a"
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
        subject={[6.7, 50.2]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#e2e2e2",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          className="text-5xl"
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
