import Image from "next/image";
import styles from "./page.module.css";

function FichaDeProducto(props) {
  return (
    <div style= {{border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px'}}>
      <h2>{props.titulo}</h2>
      <p>Precio: ₡ {props.precio}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <h1><center>SnackPass</center></h1>

      <FichaDeProducto titulo="Pocky sabor Fresa" precio="1200" />
      <FichaDeProducto titulo="Pocky sabor Matcha" precio="1200" />
    </main>
  );
}
