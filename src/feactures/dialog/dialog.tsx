import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export function DialogContent({
  children,
}: PropsWithChildren<unknown>): JSX.Element {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/30 fixed inset-0 transition-all duration-300" />
      <Dialog.Content className="bg-slate-900 text-white px-4 pt-4 shadow fixed bottom-0 left-0 right-0 w-2/4 mx-auto h-3/4 rounded-t-md overflow-y-auto">
        {children}
        <Dialog.Close asChild>
          <button className="absolute top-6 right-4">
            <XMarkIcon className="w-4 h-4" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
