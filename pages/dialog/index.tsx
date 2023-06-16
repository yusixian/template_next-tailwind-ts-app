import Button from '@/components/button';
import Card from '@/components/card';
import Dialog from '@/components/dialog';
import { useState } from 'react';

export default function DialogPage() {
  const [open, setOpen] = useState<number>(0);
  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-3 p-4">
      <Card className="flex flex-col items-start" title="Dialog">
        <Button type="primary" onClick={() => setOpen(1)}>
          Click To Open Dialog 1
        </Button>
        <div className="text-md flex items-center gap-2">
          <Button type="primary" onClick={() => setOpen(2)}>
            Click To Open Dialog 2
          </Button>
          isDismiss=false 点击遮罩不关闭
        </div>

        <Dialog
          render={({ close }) => (
            <div className="flex flex-col gap-2 p-6">
              <div className="text-3xl">Children Dialog</div>
              <div className="flex items-center justify-center gap-2">
                <Button onClick={close}>Close</Button>
                <Button onClick={close} type="primary">
                  Confirm
                </Button>
              </div>
            </div>
          )}
        >
          <Button type="primary">Children Button</Button>
        </Dialog>
      </Card>
      <Dialog
        open={open === 1}
        onOpenChange={(op) => {
          if (!op) setOpen(0);
        }}
        render={({ close }) => (
          <div className="flex flex-col gap-2 p-6">
            <div className="text-3xl">Title 1</div>
            <div className="flex items-center justify-center gap-2">
              <Button onClick={close}>Close</Button>
              <Button onClick={close} type="primary">
                Confirm
              </Button>
            </div>
          </div>
        )}
      />
      <Dialog
        isDismiss={false}
        open={open === 2}
        onOpenChange={(op) => {
          if (!op) setOpen(0);
        }}
        render={({ close }) => (
          <div className="flex flex-col gap-2 p-6">
            <div className="text-3xl">Title 2</div>
            <div className="flex items-center justify-center gap-2">
              <Button onClick={close}>Close</Button>
              <Button onClick={close} type="primary">
                Confirm
              </Button>
            </div>
          </div>
        )}
      />
    </main>
  );
}
