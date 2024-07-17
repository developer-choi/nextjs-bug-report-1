import {PropsWithChildren} from 'react';
import layoutStyles from '@/app/layout.module.css';

export default function Layout({children}: PropsWithChildren) {
  return (
    <div className={layoutStyles.pcContainer}>
      <h1>PC Header</h1>
      {children}
    </div>
  );
}
