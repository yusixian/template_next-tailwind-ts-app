import clsx from 'clsx';
import { poppins } from '../../constants/font';
import { Footer } from './footer';
import { Header } from './header';
import { useIsMounted } from '@/hooks/useIsMounted';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const isMounted = useIsMounted();
  return (
    <div
      className={clsx('flex min-h-screen flex-col bg-cos-gradient dark:bg-cos-gradient-dark dark:text-white', poppins.variable)}
    >
      <Header />
      {isMounted && <main className="relative h-full w-full flex-grow">{children}</main>}
      <Footer />
    </div>
  );
}
