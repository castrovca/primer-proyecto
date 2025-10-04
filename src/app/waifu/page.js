async function obtenerImagenes() {
    const res = await fetch(' https://api.waifu.pics/many/sfw/waifu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            exclude: []
        }),
        next: {revalidate: 3600},
    });

    if (!res.ok) 
    {
        throw new Error('Hubo un problema al obtener las imágenes.');
    }

    const data = await res.json();
    console.log('Respuesta de la API: ', data);
    return data;
}


export default async function PaginaWaifu() {
    let urls = [];
    try {
        const data = await obtenerImagenes();
        urls = data.files || [];
    } catch(error) {
        console.error("Error al cargar las imágenes: ", error);

        return <div>Error al cargar</div>;
    }

    return (
        <div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'}}>
            

            {urls.length > 0 ? (
                urls.map((url,index) => (
                    <div key={index} style={{textAlign: 'center'}}>
                        <img src={url} alt="waifu" style={{width: '100%', height: 'auto'}}/>
                    </div>
                ))
            ) : (<p>No se encontraron imagenes</p>)}



            </div>
            
        </div>
    )

}