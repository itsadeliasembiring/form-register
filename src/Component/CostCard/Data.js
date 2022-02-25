// Import Icon
import RegisterIcon from "../../Assets/Icons/pendaftaran.svg";
import MoneyIcon from "../../Assets/Icons/iuran.svg";
import BeltIcon from "../../Assets/Icons/sabuk.svg";
import ClothesIcon from "../../Assets/Icons/seragam.svg";

// Mandatory Cost
const BiayaIuran = [
  {
    icon: RegisterIcon,
    item: "Biaya Pendaftaran",
    price: 50000,
  },
  {
    icon: MoneyIcon,
    item: "Iuran Bulanan",
    price: 100000,
  },
];

// Optional Cost
const Seragam = [
  {
    icon: ClothesIcon,
    item: "Seragam",
    price: 80000,
  },
];
const Sabuk = [
  {
    icon: BeltIcon,
    item: "Sabuk",
    price: 30000,
  },
];

export { BiayaIuran, Seragam, Sabuk };
