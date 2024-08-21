import React, { useEffect } from "react";
import DataMaps from "datamaps";

const RocketsGraphComponent: React.FC = () => {
  console.log("in graph");
  useEffect(() => {
    // Initialize DataMaps
    const map = new DataMaps({
      projection: "mercator",
      fills: {
        defaultFill: "#f5f5f5", // Default fill color for countries
        highlighted: "#ff9999", // Highlighted fill color for selected countries
      },
      data: {
        USA: { fillKey: "highlighted" },
        MH: { fillKey: "highlighted" }, // The country code for Republic of the Marshall Islands
      },
      geographyConfig: {
        highlightBorderColor: "#bada55",
        highlightBorderWidth: 2,
        highlightFillColor: "highlighted",
        popupTemplate: (geo: any) => {
          return `<div>${geo.properties.name}</div>`;
        },
      },
    });

    return () => {
      // Cleanup: Remove the map instance when the component is unmounted
      map.updateChoropleth({});
    };
  }, []);

  return <div id="map" style={{ height: "500px" }}></div>;
};

export default RocketsGraphComponent;
