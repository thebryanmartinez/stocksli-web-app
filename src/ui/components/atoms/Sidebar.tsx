import { ReactNode } from 'react'

interface SideBarProps {
  children: ReactNode
}

export const Sidebar = ({ children }: SideBarProps) => {
  return (
    <div className='hidden lg:drawer-open lg:fixed lg:inset-y-0 lg:z-50 lg:block'>
      <input
        id='my-drawer-2'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu min-h-full w-80 bg-base-200 p-4 text-base-content'>
          {children}
        </ul>
      </div>
    </div>
  )
}
