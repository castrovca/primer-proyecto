import styles from "./page.module.css";
import Link from "next/link";

function FichaProducto(props) {

  
  return (
    <div style= {{border: '3px solid #ccc', padding: '32px', margin: '80px', borderRadius: '8px'}}>
      <h2>{props.titulo}</h2>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Link href="/productos">
        <FichaProducto titulo="Mira nuestros productos"></FichaProducto>
      </Link>
    </main>
  );
}
