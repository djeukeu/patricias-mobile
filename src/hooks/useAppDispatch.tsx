import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/redux';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default useAppDispatch;
