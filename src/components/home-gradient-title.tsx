import type { ReactNode } from 'react'

export default function HomeGradientTitle(props: { children: ReactNode }) {
  return (
    <header className="text-3xl py-4 px-12 border-b">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-vaporware-900">
        {props.children}
      </span>
    </header>
  )
};
