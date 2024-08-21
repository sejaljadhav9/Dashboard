import { gql, useQuery } from "@apollo/client";

const COMPANY_DETAILS = gql`
  query CompanyDetails {
    company {
      employees
      valuation
    }
  }
`;

const CompanyComponent: React.FC = () => {
  const { loading, error, data } = useQuery(COMPANY_DETAILS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default">
        <div className="mt-4 flex items-end px-4 justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black">
              {data.company.employees}
            </h4>
            <span className="text-sm font-medium">Total Employee Count</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-green-500">
            +0.43%
          </span>
        </div>
      </div>
      <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default">
        <div className="mt-4 flex items-end px-4 justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black">
              $ {data.company.valuation}
            </h4>
            <span className="text-sm font-medium">Valuation</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-green-500">
            +0.05%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyComponent;
