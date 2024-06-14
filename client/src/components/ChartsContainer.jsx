import { useState } from 'react';

import BarChart from './BarChart';
import Wrapper from '../assets/wrappers/ChartsContainer';
import AreaChartComponent from './AreaChart';

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChartComponent data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
