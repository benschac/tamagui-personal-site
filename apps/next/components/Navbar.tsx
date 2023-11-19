import { YStack, XStack, isWeb, styled, Paragraph, Image, SizableText, Spacer } from '@my/ui'
import { logo } from 'public'
import React from 'react'
import { useLink, Link } from 'solito/link'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = React.useState(false)
  const handleActive = () => {
    setActive(!active)
    if (isWeb) {
      window.scrollTo(0, 0)
    }
  }

  return (
    // @ts-expect-error - TODO: fix this
    <YStack
      $platform-web={{
        pos: 'fixed',
      }}
      tag="nav"
      px
      w="100%"
      ai="center"
      top="0"
      zi={10}
      // bg="$background"
      py="$5"
    >
      <XStack w="100%" jc="space-between" ai="center" mx="auto" px="$3">
        <Link
          onClick={handleActive}
          style={{
            display: 'flex',
            alignItems: 'center',
            // come back to this size
            gap: '12px',
          }}
          href="/"
        >
          <Image
            alt="Solito Logo"
            width={100}
            height={100}
            objectFit="contain"
            // @ts-expect-error - TODO: fix this
            source="https://avatars.githubusercontent.com/u/2502947?v=4"
          />
          <SizableText
            $sm={{
              display: 'none',
            }}
            size="$3"
            fontWeight="bold"
          >
            bensch.ac
          </SizableText>
        </Link>
        <Spacer flex />
        <XStack tag="ul" gap="$2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              onClick={handleActive}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                // come back to this size
                gap: '12px',
              }}
            >
              <Paragraph>{link.title}</Paragraph>
            </Link>
          ))}
        </XStack>
      </XStack>
    </YStack>
  )
}

export default Navbar
