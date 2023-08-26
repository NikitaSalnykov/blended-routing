import { Grid, GridItem, Heading } from 'components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <>
      <Heading style={{ marginBottom: '24px', textAlign: 'center' }}>
        CountryList
      </Heading>
      <Grid>
        {countries.map(({ id, country, flag }) => (
          <GridItem key={id}>
            <Link to={`${routes.COUNTRY}/${id}`} state={{ from: location }}>
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
