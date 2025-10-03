import { productos } from "@/app/data/productos";

export async function generateStaticParams() {
    return productos.map(producto => ({
        id: producto.id.toString(),
    }));
}


export default function PaginaDetalleProducto({params}) {
    const producto = productos.find(p => p.id === Number(params.id));

    if(!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div>
            <h1>{producto.nombre}</h1>
            <p>Precio: ${producto.precio}</p>
            <p>{producto.descripcion}</p>
        </div>
    )
}