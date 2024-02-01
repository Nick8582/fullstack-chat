import { Loader2 } from 'lucide-react';
import React from 'react';

import cl from './Loader.module.scss';

const Loader = () => {
  return <Loader2 className={cl.loader} />;
};

export default Loader;
