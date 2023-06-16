import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import clsx from 'clsx';
import React, { cloneElement, useState } from 'react';
import { CgClose } from 'react-icons/cg';

type DialogProps = {
  rootId?: string;
  open?: boolean;
  initialOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: JSX.Element;
  render: (props: { close: () => void }) => React.ReactNode;
  className?: string;
  overlayClass?: string;
  containerClass?: string;
  isDismiss?: boolean;
  showCloseButton?: boolean;
};

export default function Dialog({
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  children,
  className,
  render,
  rootId: customRootId,
  overlayClass,
  containerClass,
  showCloseButton = true,
  isDismiss = true,
}: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const { reference, floating, context } = useFloating({
    open,
    onOpenChange: setOpen,
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { enabled: isDismiss, outsidePressEvent: 'mousedown' });

  const { getReferenceProps, getFloatingProps } = useInteractions([click, role, dismiss]);

  const onClose = () => setOpen(false);

  return (
    <>
      {children && cloneElement(children, getReferenceProps({ ref: reference, ...children.props }))}
      <FloatingPortal id={customRootId}>
        {open && (
          <FloatingOverlay
            className={clsx('absolute inset-0 z-10 flex h-full w-full items-center', overlayClass ?? 'bg-black/60')}
            lockScroll
          >
            <div className={clsx('m-auto grid place-items-center', containerClass)}>
              <FloatingFocusManager context={context}>
                <div
                  className={clsx('relative overflow-hidden rounded-md bg-white', className ?? 'mx-24')}
                  ref={floating}
                  {...getFloatingProps()}
                >
                  {showCloseButton && <CgClose className="absolute right-2 top-2 h-6 w-6 cursor-pointer" onClick={onClose} />}
                  {render({ close: onClose })}
                </div>
              </FloatingFocusManager>
            </div>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
}
