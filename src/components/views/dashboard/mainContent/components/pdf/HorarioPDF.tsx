import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Crea estilos
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 30,
  },
  title: {
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
    /* marginBottom: 10, */
  },
  section: {
    /*  */
  },
  header: {
    fontSize: 11,
  },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ccc",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    overflow: "hidden",
    marginBottom: 15,
    marginTop: 15,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderCollapse: "collapse",
  },
  tableCell: {
    margin: "auto",
    fontSize: 8,
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },

  footerContainer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    fontSize: 8,
    textAlign: "center",
  },

  fecha: {
    fontSize: 8,
    textAlign: "right",
  },

  horario: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 25,
    marginTop: 25,
  },
});

interface HorariosPDFProps {
  data: any;
}

const HorarioPDF: React.FC<HorariosPDFProps> = ({ data }) => {
  console.log(data);
  const transformData = (data: any) => {
    return data.map((item: any) => ({
      "COD. MATERIA": item.materia.codigo,
      "NOMBRE MATERIA": item.materia.nombre,
      HORARIOS: item.horario.map((horario: any) => ({
        SECCIÓN: item.materia.seccion,
        CLASE: `${horario.dia}: ${horario.horaInicio} - ${horario.horaFin}`,
        AULA: horario.aula,
      })),
    }));
  };

  const Table = ({ data }: any) => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, styles.tableHeader]}>
            <Text style={styles.tableCell}>COD. MATERIA</Text>
          </View>
          <View style={[styles.tableCol, styles.tableHeader]}>
            <Text style={styles.tableCell}>NOMBRE MATERIA</Text>
          </View>
          <View style={[styles.tableCol, styles.tableHeader]}>
            <Text style={styles.tableCell}>SECCIÓN</Text>
          </View>
          <View style={[styles.tableCol, styles.tableHeader]}>
            <Text style={styles.tableCell}>CLASE</Text>
          </View>
          <View style={[styles.tableCol, styles.tableHeader]}>
            <Text style={styles.tableCell}>AULA</Text>
          </View>
        </View>
        {data.map((subject: any, subjectIndex: any) => (
          <View key={subjectIndex}>
            {subject.HORARIOS.map((horario: any, horarioIndex: any) => (
              <View key={horarioIndex} style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {horarioIndex === 0 ? subject["COD. MATERIA"] : ""}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {horarioIndex === 0 ? subject["NOMBRE MATERIA"] : ""}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{horario.SECCIÓN}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{horario.CLASE}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{horario.AULA}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };

  const Footer = () => (
    <View style={styles.footerContainer}>
      <Text>
        Este documento sin el sello y la firma de la oficina sectorial de
        Control de Estudios, no tiene validez
      </Text>
      <Text>D.A.C.E - Página 1 de 1</Text>
    </View>
  );
  const today = new Date();

  const Header = () => {
    return (
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
    );
  };

  const InfoUser = ({ cedula, nombre, apellido, carrera, periodo }: any) => {
    return (
      <Text style={styles.section}>
        {`C.I.: ${cedula} - ${nombre} ${apellido}\n`}
        {`CARRERA: ${carrera}\n`}
        {`PERÍODO: ${periodo} - Inscripcion`}
      </Text>
    );
  };

  const dataUser = {
    cedula: data[0]?.profesor?.cedula || "",
    nombre:
      data[0]?.profesor?.nombre + " " + data[0]?.profesor?.segundoNombre || "",
    apellido: data[0]?.profesor?.apellido || "",
    carrera: "INGENIERIA EN INFORMATICA - INGENIERIA DE SISTEMAS",
    periodo: "2021-1",
  };

  return (
    <Document>
      <Page style={styles.page}>
        <Header />
        <Text style={[styles.header, styles.horario]}>HORARIO DE CLASES</Text>
        <InfoUser {...dataUser} />
        {/* tabla */}
        <Table data={transformData(data)} />
        <Text style={[styles.header, styles.fecha]}>SCIH - 5311632609</Text>
        <Footer />
      </Page>
    </Document>
  );
};

export default HorarioPDF;
