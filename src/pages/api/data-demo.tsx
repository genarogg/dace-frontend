import { NextApiRequest, NextApiResponse } from "next";

const user = [
  {
    "1": 1,
    email: "ana06rosa@gmail.com",

    firstName: "Ana",
    secondName: "Rosa",

    firstNurname: "Ramos",
    secondSurname: "Bolivar",

    birthdate: "14/07/2000",

    direction:
      "san francisco de asís, estado Aragua,municipio zamora sector santa helena, calle 23 de enero, casa numero  04",
    phoneNumber: "0412-1234567",

    sex: "Femenino",
    Parroquia: "San francisco de asís",
    Etnia: "no aplica",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(user);
}
