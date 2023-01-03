import PropTypes from 'prop-types';
import { StatisticLoad, Title, StatList, Item, Label, Percentage } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
  return (
    <StatisticLoad>
      {title && <Title>{title}</Title>}

      <StatList >
        {stats.map(stat => {
          return (
            <Item key={stat.id} >
              <Label >{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticLoad>
  );
};
// const randomColor = Math.floor(Math.random()*16777215).toString(16);
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}
