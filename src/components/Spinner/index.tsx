import { FC } from 'react';

import {
  Spin,
} from './styled';

interface SpinnerProps{
  loading: boolean;
}

const Spinner: FC<SpinnerProps> = ({ children, loading }) => (loading ? <Spin /> : <>{children}</>);

export default Spinner;
