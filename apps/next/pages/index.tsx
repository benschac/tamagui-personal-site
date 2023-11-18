import { HomeScreen } from 'app/features/home/screen'
import { About, Experience, Hero, Tech, Works, Feedbacks, Navbar, Contact } from '../components'
import Head from 'next/head'
import { YStack } from '@my/ui'
import Stars from 'components/canvas/Stars'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <Hero />
      <YStack>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <YStack pos="relative" zi={0}>
          <Contact />
          <Stars />
        </YStack>
      </YStack>
    </>
  )
}
