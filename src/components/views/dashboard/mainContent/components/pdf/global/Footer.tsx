import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface FooterProps {}

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    fontSize: 8,
    textAlign: "center",
  },
});

const Footer: React.FC<FooterProps> = () => {
  return (
    <View style={styles.footerContainer}>
      <Text>
        Este documento sin el sello y la firma de la oficina sectorial de
        Control de Estudios, no tiene validez
      </Text>
      <Text>D.A.C.E - Página 1 de 1</Text>
    </View>
  );
};

export default Footer;
