import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!value) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resp = await fetchByRegion(value);
        setCountries(resp);
      } catch (erorr) {
        console.log(erorr.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [value]);

  const handleSubmit = value => setValue(value);

  return (
    <Section>
      <Container>
        <Heading>CountrySearch</Heading>
        <SearchForm handleSubmit={handleSubmit} />
        <CountryList countries={countries} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
