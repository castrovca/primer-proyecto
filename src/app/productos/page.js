import { productos } from "../data/productos";
import Link from "next/link";

export default function PaginaProductos() {
    return (
        <div>
            <h1>Nuestros productos: </h1>

            <ul>
                {productos.map(producto => (
                    <li key={producto.id} style={{margin: '1rem 0'}}>
                        <Link href={`/productos/${producto.id}`}>
                            {producto.nombre}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}