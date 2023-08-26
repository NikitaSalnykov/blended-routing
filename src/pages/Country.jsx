import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const goBack = location?.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resp = await fetchCountry(id);
        setCountry(resp);
      } catch (erorr) {
        console.log(erorr.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack}>Go back</GoBackBtn>
        <CountryInfo country={country} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
