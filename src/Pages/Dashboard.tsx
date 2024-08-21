import React from "react";
import CompanyComponent from "../Components/CompanyComponent";
import CoresChartComponent from "../Components/CoresChartComponent";
import SearchBar from "../Components/Searchbar";
import MainLayout from "../Layouts/MainLayout";
import CoresBarGraphComponent from "../Components/CoresBarGraphComponent";
import RocketsTablesComponent from "../Components/RocketsTablesComponent";
import RocketsGraphComponent from "../Components/RocketsGraphComponent";

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <SearchBar />
      <div className="gap-4 mt-4">
        <CompanyComponent />
      </div>
      <h3 className="text-red-400 font-bold m-4">Core Metrics </h3>
      <div className="flex flex-wrap justify-around mt-10 mr-5">
        {/* <CoresChartComponent /> */}
        <CoresBarGraphComponent />
      </div>
      <h3 className="text-red-400 font-bold m-4">Rockets Metrics</h3>
      <div>
        <RocketsTablesComponent />
        {/* <RocketsGraphComponent/> */}
      </div>
    </MainLayout>
  );
};

export default Dashboard;
