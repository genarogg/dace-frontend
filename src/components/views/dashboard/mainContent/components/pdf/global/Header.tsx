import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

interface HeaderProps {}

const styles = StyleSheet.create({
  constiner: {
    /* flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10, */
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 115,
    
  },
  title: {
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
  },

  header: {
    fontSize: 11,
  },

  fecha: {
    fontSize: 8,
    textAlign: "right",
  },
});

const today = new Date();

const Header: React.FC<HeaderProps> = () => {
  return (
    <View style={styles.constiner}>
      <Image src="/pdf/logoUner.png" style={styles.img} />
      <View>
        <Text style={[styles.header, styles.fecha]}>
          {today.toLocaleDateString("es-ES")}
        </Text>
        <Text style={styles.title}>
          UNIVERSIDAD NACIONAL EXPERIMENTAL RÓMULO GALLEGOS
        </Text>
        <Text style={styles.title}>VICERRECTORADO ACADÉMICO</Text>
        <Text style={styles.title}>DIRECCIÓN DE CONTROL DE ESTUDIOS</Text>
      </View>
    </View>
  );
};

export default Header;
