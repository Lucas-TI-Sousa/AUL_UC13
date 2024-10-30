function ListaDeMarcas (lista) {
    return lista.map(function (marca) {
        return (
            <div>
               {marca} 
            </div>
        )
    })
}
export default ListaDeMarcas;