import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './icon-button-list.module.css'
import { Icon } from '@iconify/react'
import { Link } from '@/i18n/navigation'

export default function IconButtonList(props: { list: { icon: string, label: string, href: string }[], right?: boolean, children: ReactNode }) {
  return (
    <section>
      <header
        className={clsx('text-2xl mb-4', props.right ? 'text-vaporware-900 text-right' : 'text-blue-400')}
      >
        {props.children}
      </header>
      <div
        className={clsx('flex gap-4 ml-2 w-min max-lg:flex-col', props.right && 'ml-auto flex-row-reverse')}
      >
        {props.list.map(({ icon, label, href }, i) => (
          <Link
            key={icon}
            style={{ animationDuration: `${i * 0.2}s`, translate: `${(props.right ? i : -i) * 5}rem` }}
            className={clsx('text-white size-16 relative group border-1 rounded-lg flex items-center justify-center lg:motion-safe:translate-x-(--translate-x) max-lg:motion-safe:translate-y-(--translate-y)', styles.Move)}
            aria-label={label}
            target="_blank"
            href={href}
          >
            <Icon
              icon={icon}
              className="text-[4rem] size-12"
            />
            <span className="absolute top-full left-0 w-16 text-center -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
};

{ /* <script lang="ts" setup>
defineProps<{
  list:   { icon: string; label: string; href: string }[];
  right?: boolean;
}>();
</script>

<template>
  <section
    class="px-12 py-6"
    :class="right && 'text-right'"
  >
    <header
      class="text-2xl mb-4 "
      :class="right ? 'text-vaporware-900' : 'text-blue-400'"
    >
      <slot />
    </header>
    <div
      ref="buttons-root"
      class="flex gap-4 ml-2 w-min max-lg:flex-col"
      :class="right && 'ml-auto flex-row-reverse'"
    >
      <UButton
        v-for="({ icon: name, label, href }, i) in list"
        :key="name"
        variant="outline"
        :style="{ 'animation-duration': `${i * .2}s`, '--translate-x': `${(right ? i : -i) * 5}rem`, '--translate-y': `${i * -5}rem` }"
        class="text-white size-16 relative group move lg:motion-safe:translate-x-(--translate-x) max-lg:motion-safe:translate-y-(--translate-y)"
        :aria-label="label"
        target="_blank"
        :href
      >
        <UIcon
          :name
          class="text-[4rem] size-12"
        />
        <span class="absolute top-full left-0 w-16 text-center -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {{ label }}
        </span>
      </UButton>
    </div>
  </section>
</template>

<style scoped>

</style> */ }
