import {PropsWithChildren} from 'react';
import layoutStyles from '@/app/layout.module.css';

export default function Layout({children}: PropsWithChildren) {
  return (
    <div className={layoutStyles.mobileContainer}>
      <h1>Mobile Header</h1>
      {children}
    </div>
  );
}
