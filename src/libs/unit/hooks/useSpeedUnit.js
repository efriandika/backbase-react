import { useSelector } from 'react-redux';

export function useSpeedUnit() {
  const units = useSelector((state) => state.weather.units);

  return (text) => {
    switch (units) {
      case 'imperial':
        return `${text} miles/h`;
      case 'metric':
        return `${text} meter/s`;
      default:
        return text;
    }
  };
}
