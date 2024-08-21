import React from "react";
import CompanyComponent from "../Components/CompanyComponent";
import SearchBar from "../Components/Searchbar";
import MainLayout from "../Layouts/MainLayout";
import CoresBarGraphComponent from "../Components/CoresBarGraphComponent";
import RocketsTablesComponent from "../Components/RocketsTablesComponent";
import RocketsGraphComponent from "../Components/RocketsGraphComponent";

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-4 m-4">
        <SearchBar />
        <div className="mt-4">
          <div className="gap-4">
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
            <RocketsGraphComponent/>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
