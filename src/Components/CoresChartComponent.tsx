import { gql, useQuery } from "@apollo/client";
import Chart from "react-apexcharts";

type coreType = {
  id: string;
  asds_attempts: number;
  reuse_count: number;
};

const CORES_DETAILS = gql`
  query Cores {
    cores {
      id
      asds_attempts
      reuse_count
    }
  }
`;

//state 
// useeffect >> onPointOver >> state -> true ->>
// when state is true increase the width -> tailwind 

const CoresChartComponent: React.FC = () => {
  const { loading, error, data } = useQuery(CORES_DETAILS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);

  const idArray: string[] = [];
  const asdsArray: number[] = [];
  const reuseArray: number[] = [];

  let count = 0;
  data.cores.map((element: coreType) => {
    if (element.asds_attempts >= 3 && element.reuse_count !== 0 && count < 10) {
      count++;
      idArray.push(element.id);
      asdsArray.push(element.asds_attempts);
      reuseArray.push(element.reuse_count);
    }
  });

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: idArray,
    },
  };

  const series = [
    {
      name: "asds-attempts",
      data: asdsArray,
    },
    {
      name: "reuse-count",
      data: reuseArray,
    },
  ];

  return (
    <div className={`flex flex-col ${name?"hidden":"show"}`}> //ref
      <h3>Cores</h3>
      <Chart options={options} series={series} type="line" width="500" />
    </div>
  );
};

export default CoresChartComponent;
