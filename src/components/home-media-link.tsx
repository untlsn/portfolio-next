import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { Icon } from '@iconify/react'

export default async function HomeMediaLink(props: { icon: string, href: string, children: ReactNode }) {
  return (
    <p>
      <Link
        href={props.href}
        target="_blank"
        className="flex gap-2 items-center justify-end"
      >
        <Icon
          icon={props.icon}
          className="inline-block"
        />
        <span>{props.children}</span>
      </Link>
    </p>
  )
};
