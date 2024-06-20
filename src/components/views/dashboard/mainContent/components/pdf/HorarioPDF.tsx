import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

import Layout from "./global/Layout";

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
  },

  header: {
    fontSize: 11,
  },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#fff",
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
    height: "18px",
  },
  tableCell: {
    margin: "auto",
    fontSize: 8,
    height: "18px",
    paddingTop: 2,
    textAlign: "center", // Añadido para centrar el texto
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
          <View style={[styles.tableCol, styles.tableHeader, { width: "10%" }]}>
            <Text style={styles.tableCell}>COD. MATERIA</Text>
          </View>
          <View
            style={[
              styles.tableCol,
              styles.tableHeader,
              { width: "30%", textAlign: "left" },
            ]}
          >
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
                <View style={[styles.tableCol, { width: "10%" }]}>
                  <Text style={styles.tableCell}>
                    {horarioIndex === 0 ? subject["COD. MATERIA"] : ""}
                  </Text>
                </View>
                <View
                  style={[styles.tableCol, { width: "30%", textAlign: "left" }]}
                >
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

  const InfoUser = ({ cedula, nombre, apellido, carrera, periodo }: any) => {
    return (
      <Text>
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
        <Layout>
          <Text style={[styles.header, styles.horario]}>HORARIO DE CLASES</Text>
          <InfoUser {...dataUser} />
          {/* tabla */}
          <Table data={transformData(data)} />
          <Text style={[styles.header, styles.fecha]}>SCIH - 5311632609</Text>
        </Layout>
      </Page>
    </Document>
  );
};

export default HorarioPDF;
