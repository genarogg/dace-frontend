import React, { useState, useEffect } from "react";
import ContainerInput from "@form/ContainerInput";
import BannerPosition from "./global/BannerPosition";
interface UserDataProps {}

const UserData: React.FC<UserDataProps> = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    secondName: "",
    firstSurname: "",
    secondSurname: "",
    birthdate: "",
    direction: "",
    phoneNumber: "",
    sex: "",
    parroquia: "",
    etnia: "",
  });

  useEffect(() => {
    fetch("/api/data-demo")
      .then((response) => response.json())
      .then((data) => setFormData(data[0])); // Suponiendo que la API devuelve un array y quieres el primer objeto
  }, []);

  return (
    <>
      <BannerPosition title="Cambiar Contraseña" />
      <div className="perfil new-pass-container login front">
        <form>
          <ContainerInput
            type="email"
            name="email"
            placeholder={"Email"}
            value={formData.email}
            valueChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="firstName"
            placeholder={"Primer Nombre"}
            value={formData.firstName}
            valueChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="secondName"
            placeholder={"Segundo Nombre"}
            value={formData.secondName}
            valueChange={(e) =>
              setFormData({ ...formData, secondName: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="firstSurname"
            placeholder={"Primer Apellido"}
            value={formData.firstSurname}
            valueChange={(e) =>
              setFormData({ ...formData, firstSurname: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="secondSurname"
            placeholder={"Segundo Apellido"}
            value={formData.secondSurname}
            valueChange={(e) =>
              setFormData({ ...formData, secondSurname: e.target.value })
            }
          />
          <ContainerInput
            type="date"
            name="birthdate"
            placeholder={"Fecha de Nacimiento"}
            value={formData.birthdate}
            valueChange={(e) =>
              setFormData({ ...formData, birthdate: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="direction"
            placeholder={"Dirección"}
            value={formData.direction}
            valueChange={(e) =>
              setFormData({ ...formData, direction: e.target.value })
            }
          />
          <ContainerInput
            type="tel"
            name="phoneNumber"
            placeholder={"Número de Teléfono"}
            value={formData.phoneNumber}
            valueChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="sex"
            placeholder={"Sexo"}
            value={formData.sex}
            valueChange={(e) =>
              setFormData({ ...formData, sex: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="parroquia"
            placeholder={"Parroquia"}
            value={formData.parroquia}
            valueChange={(e) =>
              setFormData({ ...formData, parroquia: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="etnia"
            placeholder={"Etnia"}
            value={formData.etnia}
            valueChange={(e) =>
              setFormData({ ...formData, etnia: e.target.value })
            }
          />
          <div className="submit-container">
            <button className="submit" id="">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserData;
