import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import Card from '@/components/card';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex max-w-screen-lg flex-col gap-4 p-4">
        <Card
          title="Popover Demo"
          clickable
          onClick={() => router.push('/popover')}
          desc="一个Popover的Demo，见 /pages/popover/index.tsx"
        />
        <Card
          title="Dialog Demo"
          clickable
          onClick={() => router.push('/dialog')}
          desc="施工中：一个 Dialog 的Demo，见 /pages/dialog/index.tsx"
        />
      </main>
    </>
  );
}
