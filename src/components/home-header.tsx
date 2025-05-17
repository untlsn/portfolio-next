import { Icon } from '@iconify/react/'
import NextImage from 'next/image'
import { Link } from '@/i18n/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { getTranslations } from 'next-intl/server'

export default async function HomeHeader() {
  const t = await getTranslations()
  const languageText = t('language-select')

  return (
    <header className="border-b-1 border-vaporware-600/60 flex py-2 px-12 gap-4 items-center">
      <NextImage
        src="/favicon.svg"
        alt="logo"
        width={32}
        height={32}
      />
      <h1 className="text-2xl mr-auto">
        Filip Skoczeń Portfolio
      </h1>
      <DropdownMenu>
        <DropdownMenuTrigger>{languageText}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{languageText}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/" locale="en">English</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/" locale="pl">Polski</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        href="https://github.com/untlsn"
        target="_blank"
        aria-label="GitHub"
      >
        <Icon
          icon="simple-icons:github"
          className="text-3xl leading-0"
        />
      </Link>
    </header>
  )
};

/* <script lang="ts" setup>
const { locale: getLocale, setLocale } = useI18n();
const locale = computed({
  get: () => getLocale.value,
  set: (value) => setLocale(value),
});

const items = [
  { label: 'English', value: 'en' },
  { label: 'Polski', value: 'pl' },
];
</script>

<template>
  <header class="border-b-1 border-vaporware-600/60 flex py-2 px-12 gap-4 items-center">
    <NuxtImg
      src="/favicon.svg"
      width="32"
    />
    <h1 class="text-2xl mr-auto">
      Filip Skoczeń Portfolio
    </h1>
    <USelect
      v-model="locale"
      :items
      default-value="English"
    />
    <NuxtLink
      href="https://github.com/untlsn"
      target="_blank"
      aria-label="GitHub"
    >
      <UIcon
        name="simple-icons:github"
        class="text-3xl leading-0"
      />
    </NuxtLink>
  </header>
</template>

<style scoped>

</style> */
