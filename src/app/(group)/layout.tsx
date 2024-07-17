import {ReactNode} from 'react';

interface LayoutProps {
  pc: ReactNode;
  mobile: ReactNode;
}

export default function Layout({mobile}: LayoutProps) {
  return mobile;
}
