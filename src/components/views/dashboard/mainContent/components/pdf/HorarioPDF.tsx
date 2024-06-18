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

// Crea el documento
const HorarioPDF = () => {
  const data = [
    {
      "COD. MATERIA": "ID8082",
      "NOMBRE MATERIA": "PASANTIA",
      HORARIOS: [
        {
          SECCIÓN: "1",
          CLASE: "NO PRESENCIAL: 08:00 - 10:00",
          AULA: "A distancia",
        },
      ],
    },
    {
      "COD. MATERIA": "IC7322",
      "NOMBRE MATERIA": "SISTEMAS OPERATIVOS",
      HORARIOS: [
        {
          SECCIÓN: "2",
          CLASE: "-",
          AULA: "-",
        },
        {
          SECCIÓN: "",
          CLASE: "NO PRESENCIAL: 08:00 - 10:00",
          AULA: "A distancia",
        },
        {
          SECCIÓN: "",
          CLASE: "MIÉRCOLES: 14:35 - 16:35",
          AULA: "8",
        },
      ],
    },
    {
      "COD. MATERIA": "EL9325",
      "NOMBRE MATERIA": "ELECTIVA LIBRE I",
      HORARIOS: [
        {
          SECCIÓN: "2",
          CLASE: "-",
          AULA: "-",
        },
        {
          SECCIÓN: "2",
          CLASE: "NO PRESENCIAL: 08:00 - 10:00",
          AULA: "A distancia",
        },
        {
          SECCIÓN: "",
          CLASE: "LUNES: 13:15 - 15:15",
          AULA: "15",
        },
      ],
    },
    {
      "COD. MATERIA": "IS8424",
      "NOMBRE MATERIA": "SISTEMAS DE INFORMACION III",
      HORARIOS: [
        {
          SECCIÓN: "2",
          CLASE: "-",
          AULA: "-",
        },
        {
          SECCIÓN: "1",
          CLASE: "NO PRESENCIAL: 08:00 - 10:00",
          AULA: "A distancia",
        },
        {
          SECCIÓN: "",
          CLASE: "VIERNES: 07:45 - 09:50",
          AULA: "8",
        },
      ],
    },
    {
      "COD. MATERIA": "PG9083",
      "NOMBRE MATERIA": "PROYECTO DE GRADO I",
      HORARIOS: [
        {
          SECCIÓN: "2",
          CLASE: "-",
          AULA: "-",
        },
        {
          SECCIÓN: "1",
          CLASE: "MIÉRCOLES: 07:45 - 09:50",
          AULA: "Grado",
        },
        {
          SECCIÓN: "",
          CLASE: "LUNES: 07:45 - 09:50",
          AULA: "Grado",
        },
      ],
    },
  ];

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

  const Header = () => {
    return (
      <View>
        <Text style={styles.title}>
          UNIVERSIDAD NACIONAL EXPERIMENTAL RÓMULO GALLEGOS
        </Text>
        <Text style={styles.title}>VICERRECTORADO ACADÉMICO</Text>
        <Text style={styles.title}>DIRECCIÓN DE CONTROL DE ESTUDIOS</Text>
      </View>
    );
  };

  //funcion para generar la fecha de hoy en formato dd/mm/yyyy
  const today = new Date();

  return (
    <Document>
      <Page style={styles.page}>
        <Header />
        <Text style={[styles.header, styles.horario]}>HORARIO DE CLASES</Text>
        <Text style={styles.section}>
          C.I.: 25074591 - González González Genaro Octavio{"\n"}
          CARRERA: (601) INGENIERIA EN INFORMATICA - INGENIERIA DE SISTEMAS (SAN
          JUAN DE LOS MORROS){"\n"}
          PERÍODO: 20241 - Inscripcion
        </Text>
        {/* tabla */}
        <Table data={data} />
        <Text style={[styles.header, styles.fecha]}>SCIH - 5311632609</Text>
        <Footer />
      </Page>
    </Document>
  );
};

export default HorarioPDF;
