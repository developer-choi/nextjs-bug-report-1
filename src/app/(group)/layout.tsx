import {ReactNode} from 'react';

interface LayoutProps {
  pc: ReactNode;
  mobile: ReactNode;
}

export default function Layout({pc}: LayoutProps) {
  return pc;
}
