/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { Fragment, PropsWithChildren } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import {
//   faXmark
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Size = "m" | "l";

interface ModalProps {
  state: boolean;
  close: Function;
  size?: Size //s, m , l => default s
}

export default function Modal({
  state,
  children,
  size,
}: ModalProps & PropsWithChildren) {

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog as="div" className="relative z-50 w-screen h-screen" onClose={() => null}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0  z-30 overflow-y-auto scrollbar-thin">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className={`relative transform overflow-y-visible rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 ${size === "m" ? "sm:w-1/2" : size === "l" ? "sm:w-4/5" : "sm:w-1/3"} sm:h-1/2 sm:max-w-7xl sm:p-6`}>
                <div className="fixed right-0 top-2 p-3 sm:block">
                 
                </div>
                <div className="pt-5">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}