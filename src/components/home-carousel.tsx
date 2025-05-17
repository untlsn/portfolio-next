'use client'

import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import AutoScroll from 'embla-carousel-auto-scroll'

const frontendMentorProjects = [
  { image: '/screens/frontend-mentor-1.png', link: 'https://www.frontendmentor.io/solutions/nuxt3-with-unocss-cgrYMGG-yq' },
  { image: '/screens/frontend-mentor-2.png', link: 'https://www.frontendmentor.io/solutions/solidstart-static-with-unocss-NskJDyVfG-' },
  { image: '/screens/frontend-mentor-3.png', link: 'https://www.frontendmentor.io/solutions/solidjs-with-unocss-pg5BFH-eXO' },
  { image: '/screens/frontend-mentor-4.png', link: 'https://www.frontendmentor.io/solutions/solidstart-static-with-unocss-088rc8H2k3' },
  { image: '/screens/frontend-mentor-5.png', link: 'https://www.frontendmentor.io/solutions/solidstart-static-with-unocss-9ST2Nn3RZf' },
  { image: '/screens/frontend-mentor-6.png', link: 'https://www.frontendmentor.io/solutions/solidstart-static-with-unocss-BR9JH0LrEn' },
  { image: '/screens/frontend-mentor-7.png', link: 'https://www.frontendmentor.io/solutions/vue-with-vitesse-UcXXmyXUbF' },
  { image: '/screens/frontend-mentor-8.png', link: 'https://www.frontendmentor.io/solutions/vue3-random-advice-app-with-cooldown-XEQd8E-gB' },
]

export default function HomeCarousel() {
  return (
    <Carousel
      className="mx-4"
      opts={{ loop: true }}
      plugins={[
        AutoScroll(),
      ]}
    >
      <CarouselContent>
        {frontendMentorProjects.map((project, i) => (
          <CarouselItem key={project.link} className="basis-1/2 lg:basis-1/5 self-center">
            <Link
              href={project.link}
              target="_blank"
            >
              <Image
                src={project.image}
                alt={`frontend-mentor-${i}`}
                width={250}
                height={150}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
};
