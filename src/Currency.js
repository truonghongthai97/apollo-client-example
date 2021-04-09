import React from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

// https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-samples
// a field policy
// local-only fields

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

const Currency = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  // const [GetExchangeRates, { loading, error, data }] = useLazyQuery(
  //   EXCHANGE_RATES
  // );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data.rates.map(({ currency, rate, name }) => (
        <div key={currency}>
          <p>
            {currency}: {rate} - {name}
          </p>
        </div>
      ))}
    </>
  );
};

export default Currency;
