import { useSelector } from 'react-redux';

export function useTemperatureUnit() {
  const units = useSelector((state) => state.weather.units);

  return (text) => {
    switch (units) {
      case 'imperial':
        return `${text}\u00b0 F`;
      case 'metric':
        return `${text}\u00b0 C`;
      default:
        return text;
    }
  };
}
