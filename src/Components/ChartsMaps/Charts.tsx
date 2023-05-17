import React, { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import LineChart from './LineChart';

const Chart = () => {
  const fetchData = useCallback(async () => {
    const response = await fetch(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }, []);

  const { data, isLoading, isError } = useQuery(['covidData'], fetchData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching data</p>;
  }

  return (
    <>
      <LineChart data={data} />
    </>
  );
};

export default Chart;
