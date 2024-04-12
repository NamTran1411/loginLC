import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, gql } from "@apollo/client";

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("auth");
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(
    new HttpLink({ uri: "https://api-legacy.thuongmaitructuyen.com/public/graphql" })
  ),
  cache: new InMemoryCache(),
});

export const LoginLegacySale = gql`
  mutation VerifyTokenCognito($input: String!) {
    verifyTokenCognito(input: { code: $code }) {
      token
      permissions
      role
      affiliate_code
    }
  }
`;
