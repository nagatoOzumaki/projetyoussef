import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { MdOutlineInventory } from "react-icons/md";




const menu = [
  {
    title: "Accueil",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Ajouter un produit",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Compte",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Facture Client",
    icon: <MdOutlineInventory />,
    path: "/add-client",
  },
  {
    title: "Facture Fournisseur",
    icon: <MdOutlineInventory />,
    path: "/add-fournisseur",
  },
  {
    title: "Signaler un bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;