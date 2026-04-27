import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';

const font = { fontFamily: 'PressStart2P_400Regular' };

export default function App() {
  const { width, height } = useWindowDimensions();
  const [fontsLoaded] = useFonts({ PressStart2P_400Regular });

  const logoSize = Math.floor(Math.min(width, height) * 0.24);
  const buttonWidth = Math.round(width * 0.52);

  if (!fontsLoaded) {
    return (
      <View style={[styles.container, styles.fontLoading]}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={[
            styles.logo,
            {
              width: logoSize,
              height: logoSize,
              borderRadius: Math.max(8, logoSize * 0.12),
            },
          ]}
        >
          <Image source={require('./Logo.jpeg')} style={styles.logoImage} resizeMode="cover" />
        </View>
        <Text style={[styles.lockerBrand, font]}>LOCKER</Text>
        <Text style={[styles.bienvenido, font]}>Bienvenido</Text>
        <View style={styles.promptBlock}>
          <Text style={[styles.promptLine, font]}>Elige tu</Text>
          <Text style={[styles.promptLine, font]}>ocupacion</Text>
        </View>
      </View>

      <View style={styles.lower}>
        <View style={styles.actions}>
          <Pressable style={[styles.button, { width: buttonWidth }]}>
            <Text style={[styles.buttonText, font]}>Docente</Text>
          </Pressable>
          <Pressable style={[styles.button, { width: buttonWidth }]}>
            <Text style={[styles.buttonText, font]}>Alumno/a</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3DFBE',
    alignItems: 'center',
    paddingTop: 36,
  },
  fontLoading: {
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    overflow: 'hidden',
    marginTop: 8,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  lockerBrand: {
    marginTop: 10,
    color: '#333',
    fontSize: 10,
    letterSpacing: 1,
  },
  bienvenido: {
    marginTop: 16,
    color: '#333',
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center',
  },
  promptBlock: {
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  lower: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 12,
  },
  promptLine: {
    color: '#333',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
  actions: {
    width: '100%',
    paddingBottom: 24,
    gap: 6,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F4C2C4',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2d2d2d',
  },
  buttonText: {
    color: '#333',
    fontSize: 12,
    lineHeight: 16,
  },
});
