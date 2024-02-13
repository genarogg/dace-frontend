import { NextApiRequest, NextApiResponse } from "next";

const users = [
  {
    "1": 1,
    email: "genarrogg@gmail.com",

    "first-name": "Genaro",
    "second-name": "Octavio",

    "first-surname": "Gonzalez",
    "second-surname": "Gonzalez",

    birthdate: "09/12/1996",

    direction:
      "san francisco de asís, estado Aragua,municipio zamora sector santa helena, calle 23 de enero, casa numero  04",
    "phone-number": "0412-1234567",

    sex: "masculino",
    Parroquia: "San francisco de asís",
    Etnia: "no aplica",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(users);
}
