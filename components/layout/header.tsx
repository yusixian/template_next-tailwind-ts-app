import { useToggleTheme } from '@/hooks/useToggleTheme';
import { useRouter } from 'next/router';
import { AiFillGithub } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';

export function Header() {
  const router = useRouter();
  const toggleTheme = useToggleTheme();

  return (
    <header className="flex h-16 w-full items-center justify-between gap-2 p-2">
      <div className="flex items-center gap-2">
        <AiFillGithub
          className="h-9 w-9 cursor-pointer"
          onClick={() =>
            window.open('https://github.com/yusixian/template_next-tailwind-ts-app/tree/draft/floating-ui-demo', '_blank')
          }
        />
        <BiUserCircle
          className="h-9 w-9 cursor-pointer"
          onClick={() => window.open('https://ysx.cosine.ren/floating-ui-experience-popover', '_blank')}
        />
      </div>
      <div className="flex-grow cursor-pointer text-center text-3xl" onClick={() => router.push('/')}>
        Floating UI 使用演示
      </div>
      <div className="cursor-pointer" onClick={toggleTheme}>
        切换日夜模式
      </div>
    </header>
  );
}
