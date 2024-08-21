import { gql, useQuery } from "@apollo/client";

const COMPANY_DETAILS = gql`
  query CompanyDetails {
    company {
      name
      ceo
      headquarters {
        city
        state
      }
    }
  }
`;

const Header: React.FC = () => {
  const { loading, error, data } = useQuery(COMPANY_DETAILS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);

  return (
    <header className="bg-gray-800 text-white flex justify-between p-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">{data.company.name}</h1>
        <span className="ml-4">{data.company.ceo}</span>
      </div>
      <div className="flex items-center">
        <span>
          HQ: {data.company.headquarters.city},{" "}
          {data.company.headquarters.state}
        </span>
      </div>
    </header>
  );
};

export default Header;
