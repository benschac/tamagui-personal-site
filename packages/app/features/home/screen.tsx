import { H1, Theme, YStack } from '@my/ui'

export function HomeScreen() {
  return (
    <Theme name="green">
      <YStack f={1} bg="$backgroundFocus">
        <H1 col="$background">Welcome to My App</H1>
      </YStack>
    </Theme>
  )
}
