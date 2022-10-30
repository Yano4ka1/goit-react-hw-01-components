import style from './statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    return <section className={style.statistics}>
        {title ? <h2 className={style.title}>{title}</h2>: null}

  <ul className={style.statList}>
            {stats.map((item)=> (
                <li className={style.item} key={item.id} style={{backgroundColor: getRandomHexColor()}}>
                    <span className={style.label}>{ item.label}</span>
                    <span className={style.percentage}>{ item.percentage }%</span>
    </li>
    ))}
  </ul>
</section>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired,
}