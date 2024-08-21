import { gql, useQuery } from "@apollo/client";

type rocketType = {
  id: number;
  cost_per_launch: number;
  engines: { number: number };
  mass: { kg: number };
  success_rate_pct: number;
};

const ROCKETS = gql`
  query RocketDetails {
    rockets {
      id
      cost_per_launch
      engines {
        number
      }
      mass {
        kg
      }
      success_rate_pct
    }
  }
`;

const RocketsTablesComponent: React.FC = () => {
  const { loading, error, data } = useQuery(ROCKETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-auto text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Rocket Id
            </th>
            <th scope="col" className="px-6 py-3">
              Cost per Launch
            </th>
            <th scope="col" className="px-6 py-3">
              No. of Engines
            </th>
            <th scope="col" className="px-6 py-3">
              Mass (kg)
            </th>
            <th scope="col" className="px-6 py-3">
              Success Rate (%)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.rockets.map((element: rocketType) => {
            return (
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {element.id}
                </th>
                <td className="px-6 py-4">{element.cost_per_launch}</td>
                <td className="px-6 py-4">{element.engines.number}</td>
                <td className="px-6 py-4">{element.mass.kg}</td>
                <td className="px-6 py-4">{element.success_rate_pct}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RocketsTablesComponent;
