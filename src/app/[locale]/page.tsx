import HomeGradientTitle from '@/components/home-gradient-title'
import HomeHeader from '@/components/home-header'
import HomeMediaLink from '@/components/home-media-link'
import IconButtonList from '@/components/icon-button-list'
import { Accordion, AccordionContent } from '@/components/ui/accordion'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Link } from '@/i18n/navigation'
import { Icon } from '@iconify/react'
import { AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import HomeCarousel from '@/components/home-carousel'

export default async function Home() {
  const t = await getTranslations()

  return (
    <div>
      <HomeHeader />
      <main className="max-w-7xl mx-auto border-x-2 py-12">
        <div className="grid lg:grid-cols-3 px-12">
          <h1 className="text-4xl mt-12 text-blue-400">
            {t('welcome-message')}
          </h1>
          <Image
            src="/title-image.svg"
            alt="title-image"
            width={256}
            height={256}
            className="mx-auto mb-12"
          />
          <p className="text-2xl mb-12 ml-auto self-end text-vaporware-900">
            Web developer
          </p>
        </div>
        <div className="grid lg:grid-cols-2 border-y">
          <article className="py-6 px-12">
            <header className="text-3xl my-4 text-blue-400">
              {t('dev-desc.0')}
            </header>
            {
              [...Array(5)].map((_, i) => (
                <p key={i}>{t(`dev-desc.${i + 1}`)}</p>
              ))
            }
          </article>
          <article className="text-right border-l py-6 px-12">
            <header className="text-3xl my-4 text-vaporware-900">
              Media
            </header>
            <HomeMediaLink
              href="https://github.com/untlsn"
              icon="simple-icons:github"
            >
              Github
            </HomeMediaLink>
            <HomeMediaLink
              href="https://exercism.org/profiles/Untlsn"
              icon="simple-icons:exercism"
            >
              Exercism
            </HomeMediaLink>
            <HomeMediaLink
              href="https://www.frontendmentor.io/profile/untlsn"
              icon="simple-icons:frontendmentor"
            >
              Frontend Mentor
            </HomeMediaLink>
          </article>
        </div>
        <article className="contents">
          <HomeGradientTitle>
            Frontend:
          </HomeGradientTitle>
          <div className="grid grid-cols-2 items-end p-6">
            <IconButtonList
              list={[
                { label: 'NuxtJS', href: 'https://nuxt.com/', icon: 'devicon:nuxtjs' },
                { label: 'NextJS', href: 'https://nextjs.org/', icon: 'devicon:nextjs' },
                { label: 'SolidJS', href: 'https://docs.solidjs.com/', icon: 'devicon:solidjs' },
                { label: 'NestJS', href: 'https://nestjs.com/', icon: 'devicon:nestjs' },
              ]}
            >
              {t('frameworks')}
              :
            </IconButtonList>
            <IconButtonList
              right
              list={[
                { label: 'Tailwind', href: 'https://tailwindcss.com/', icon: 'devicon:tailwindcss' },
                { label: 'ChartJS', href: 'https://www.chartjs.org/', icon: 'devicon:chartjs' },
                { label: 'Clerk', href: 'https://clerk.com/', icon: 'simple-icons:clerk' },
                { label: 'tRPC', href: 'https://trpc.io/', icon: 'devicon:trpc' },
              ]}
            >
              {t('additional-technologies')}
              :
            </IconButtonList>
          </div>
          <section className="border-y py-6 px-12 space-y-4">
            <p>{t('frontend-desc.0')}</p>
            <p>{t('frontend-desc.1')}</p>
          </section>
        </article>
        <article>
          <HomeGradientTitle>
            {t('project-types.generic')}
          </HomeGradientTitle>
          <section>
            <header className="text-2xl px-12 py-6 text-blue-400">
              {t('project-types.internal')}
            </header>
            <div className="px-12">
              <Accordion
                className="border-1 px-4"
                type="multiple"
              >
                {[...Array(7)].map((_, index) => (
                  <AccordionItem
                    key={index}
                    value={String(index)}
                    className="border-b-1 py-2"
                  >
                    <AccordionTrigger className="flex items-center w-full">
                      <span className="min-w-32 inline-block text-left">
                        {t(`projects-names.${index}`)}
                        :
                      </span>
                      <span>{ t(`projects-subname.${index}`) }</span>
                      <Icon className="inline-block ml-auto" icon="ph:caret-down" />
                    </AccordionTrigger>
                    <AccordionContent>
                      {[...Array(3)].map((_, i) => (
                        <p
                          key={i}
                          className="my-2"
                        >
                          <b className="inline-block w-48">
                            {t(`project-desc-names.${i}`)}
                            :
                            {' '}
                          </b>
                          {t(`project-desc.${index}.${i}`)}
                        </p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
          <section>
            <header className="text-2xl px-12 py-6 text-right text-vaporware-900">
              Frontend Mentor
            </header>
            <HomeCarousel />
          </section>
        </article>
      </main>
    </div>
  )
}
