import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resp = await getCountries();
        setCountries(resp);
      } catch (erorr) {
        console.log(console.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
