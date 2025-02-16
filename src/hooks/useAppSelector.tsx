import { useSelector } from 'react-redux';
import { RootState } from '../types/redux';

const useAppSelector = useSelector.withTypes<RootState>();

export default useAppSelector;
