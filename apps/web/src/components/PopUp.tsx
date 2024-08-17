import { Button, Popover } from 'flowbite-react';
import { RxAvatar } from 'react-icons/rx';

export function PopUp() {
  const content = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Popover title
        </h3>
      </div>
      <div className="px-3 py-2">
        <p>Hello Hazriyatul</p>
      </div>
    </div>
  );

  return (
    <Popover content={content} placement="top">
      <div className="flex flex-col items-center">
        <RxAvatar className="text-xl" />
        <p className="text-xs">Profile</p>
      </div>
    </Popover>
  );
}
