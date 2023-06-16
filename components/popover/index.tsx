import {
  FloatingFocusManager,
  Placement,
  autoUpdate,
  useFloating,
  useInteractions,
  shift,
  offset,
  flip,
  useClick,
  useRole,
  useDismiss,
} from '@floating-ui/react';
import { cloneElement, useEffect, useId, useState } from 'react';

type PopoverProps = {
  disabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  render: (props: { close: () => void }) => React.ReactNode;
  placement?: Placement;
  children: JSX.Element;

  className?: string;
};
const Popover = ({ disabled, children, render, placement, open: passedOpen, onOpenChange }: PopoverProps) => {
  const [open, setOpen] = useState(false);
  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: (op) => {
      if (disabled) return;
      setOpen(op);
      onOpenChange?.(op);
    },
    middleware: [offset(10), flip(), shift()],
    placement,
    whileElementsMounted: autoUpdate,
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([useClick(context), useRole(context), useDismiss(context)]);

  const headingId = useId();

  useEffect(() => {
    if (passedOpen === undefined) return;
    setOpen(passedOpen);
  }, [passedOpen]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref: reference, ...children.props }))}
      {open && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={floating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            className="z-10 bg-yellow-400 p-2 outline-none"
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            {render({
              close: () => {
                setOpen(false);
                onOpenChange?.(false);
              },
            })}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};
export default Popover;
