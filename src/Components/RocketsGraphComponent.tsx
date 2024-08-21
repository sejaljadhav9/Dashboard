import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const RocketsGraphComponent: React.FC = () => {
  return (
    <div className="relative w-full h-0 pb-[56.25%] bg-white overflow-hidden">
      {/* Aspect ratio container for responsiveness */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150, // Adjust scale if needed
        }}
        width={800}
        height={400}
        className="absolute top-0 left-0 w-full h-full"
      >
        <Geographies geography="../features.json">
          {({ geographies }) => {
            console.log("in graph",geographies);

            return geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="#000"
                fill="#EEE"
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default RocketsGraphComponent;
