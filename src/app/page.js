import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


function Frase(props) {

  
  return (
    <div style= {{border: '3px solid #ccc', padding: '32px', margin: '80px', borderRadius: '8px'}}>
      <h2>{props.titulo}</h2>
      <p>{props.frase}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      
      <Frase titulo="Sobre nosotros" frase="Somos una wea de prueba. Nadie sabe muy bien por qué existimos, pero aquí estamos. Quizá por error, quizá por destino. Lo único seguro es que hacemos lo que hacemos, porque sí."/>
      <Frase titulo="Sobre ellos" frase="Algo asi como lo de arriba lol"/>
    </main>
  );
}
