import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function App() {
  const { width, height } = useWindowDimensions();
  // Tamaño: más pequeño, hasta ~un tercio del "lado menor" de la pantalla.
  const logoSize = Math.floor(Math.min(width, height) * 0.32);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.logo,
          {
            width: logoSize,
            height: logoSize,
            borderRadius: logoSize / 2,
          },
        ]}
      >
        <Image
          source={require('./Logo.jpeg')}
          style={styles.logoImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.actions}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Docente</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Alumno</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3DFBE',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 48,
  },
  logo: {
    overflow: 'hidden',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  actions: {
    width: '80%',
    marginTop: 24,
    gap: 12,
  },
  button: {
    backgroundColor: '#EC595A',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});
