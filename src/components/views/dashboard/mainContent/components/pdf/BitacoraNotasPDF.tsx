import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import Layout from "./global/Layout";
// Crea estilos

interface BitacoraNotasPDFProps {
  data: any;
  esProfesor?: boolean;
}

const BitacoraNotasPDF: React.FC<BitacoraNotasPDFProps> = ({
  data,
  esProfesor,
}) => {
  const TableEstudiantes = () => {
    const transformData = (data: any) => {
      let counter = 0;

      const info = data.estudiantesInscritos.map((estudiante: any) => ({
        NRO: ++counter,
        CEDULA: estudiante.cedula,
        "NOMBRES Y APELLIDOS": `${estudiante.nombre} ${estudiante.apellido}`,
        NOTA: estudiante.nota,
      }));
      return info;
    };

    const transformedData = transformData(data);

    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, styles.tableHeader]}>
            <Text style={styles.tableCell}>NRO</Text>
          </View>
          <View style={[styles.tableCol, styles.tableHeader]}>
            <Text style={styles.tableCell}>CEDULA</Text>
          </View>
          <View style={[styles.tableCol, styles.tableHeader]}>
            <Text style={styles.tableCell}>NOMBRES Y APELLIDOS</Text>
          </View>
          <View style={[styles.tableCol, styles.tableHeader]}>
            <Text style={styles.tableCell}>
              {esProfesor ? "NOTA" : "FIRMA"}
            </Text>
          </View>
        </View>
        {transformedData.map((estudiante: any, index: any) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{estudiante.NRO}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{estudiante.CEDULA}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                {estudiante["NOMBRES Y APELLIDOS"]}
              </Text>
            </View>
            <View style={styles.tableCol}>
              {esProfesor ? (
                <Text style={styles.tableCell}>{estudiante.NOTA}</Text>
              ) : null}
            </View>
          </View>
        ))}
      </View>
    );
  };

  const TableInfoCarrera = () => {
    const today = new Date();
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, styles.tableColextent]}>
            <Text style={styles.tableCell}>ÁREA: @FALTA</Text>
          </View>
          <View style={[styles.tableCol, styles.tableColextent]}>
            <Text style={styles.tableCell}>CARRERA: @FALTA</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, styles.tableColextent]}>
            <Text style={styles.tableCell}>
              ASIGNATURA: {data.materia.nombre}
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>SEM.: {data.materia.semestre}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>LAPSO: 20241 - Inscripcion</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, styles.tableColextent]}>
            <Text style={styles.tableCell}>PROFESOR: PROFESOR UNICO</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>SECCIÓN: 1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              FECHA: {today.toLocaleDateString("es-ES")}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Document>
      <Page style={styles.page}>
        <Layout>
          <Text style={[styles.header, styles.horario]}>
            LISTADO DE ESTUDIANTES
          </Text>
          <TableInfoCarrera />
          <TableEstudiantes />
        </Layout>
      </Page>
    </Document>
  );
};

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
  tableColextent: {
    width: "40%",
    height: "18px",
    textAlign: "left",
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

export default BitacoraNotasPDF;
