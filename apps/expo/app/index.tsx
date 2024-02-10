import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView
        style={{
          flex: 1,
        }}
        edges={['top', 'bottom']}
      >
        <HomeScreen />
      </SafeAreaView>
    </>
  )
}
