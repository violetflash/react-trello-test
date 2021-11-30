import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatchType, RootState } from '../redux';

export const useTypedDispatch = () => useDispatch<AppDispatchType>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;