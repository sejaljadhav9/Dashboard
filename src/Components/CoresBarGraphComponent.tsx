import { gql, useQuery } from "@apollo/client";
import Chart from "react-apexcharts";


const STATUS = gql`
  query Cores {
    cores {
      status
    }
  }
`;

const CoresBarGraphComponent: React.FC = () => {
  const { loading, error, data } = useQuery(STATUS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);


  const statuses = data.cores.map((item: { status: string }) => item.status);

  const statusCounts = statuses.reduce(
    (acc: Record<string, number>, status: string) => {
      if (acc[status]) {
        acc[status] += 1;
      } else {
        acc[status] = 1;
      }
      return acc;
    },
    {}
  );

  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Active", "Expended", "Lost", "Inactive",],
    },
  };

  const series = [
    {
      name: "status",
      data: [statusCounts.active, statusCounts.expended, statusCounts.lost, statusCounts.inactive]
    }
  ]

  return (
    <div className="flex flex-col">
      <h3>Core Status</h3>
      <Chart options={options} series={series} type="bar" width="500" />
    </div>
  );
};

export default CoresBarGraphComponent;
