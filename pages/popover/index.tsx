import Card from '@/components/card';
import Popover from '@/components/popover';

function PopoverContent({ close }) {
  return (
    <div className="flex w-44 items-center justify-between">
      <p>Hello~</p>
      <div className="cursor-pointer bg-red-400 p-2" onClick={close}>
        Close!
      </div>
    </div>
  );
}
export default function PopoverPage() {
  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-3 p-4">
      <Card title="Popover" desc="This is Popover Page">
        <div className="flex flex-col items-center gap-4">
          <Popover render={({ close }) => <PopoverContent close={close} />}>
            <div className="cursor-pointer bg-blue-400 p-2">Click Me, Popover bottom</div>
          </Popover>

          <Popover placement="left" render={({ close }) => <PopoverContent close={close} />}>
            <div className="cursor-pointer self-end bg-blue-400 p-2">Click Me, Popover left</div>
          </Popover>

          <Popover placement="right" render={({ close }) => <PopoverContent close={close} />}>
            <div className="cursor-pointer self-start bg-blue-400 p-2">Click Me, Popover right</div>
          </Popover>

          <Popover placement="top" render={({ close }) => <PopoverContent close={close} />}>
            <div className="cursor-pointer bg-blue-400  p-2">Click Me, Popover top</div>
          </Popover>
        </div>
      </Card>
    </main>
  );
}
