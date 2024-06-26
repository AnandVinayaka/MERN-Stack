export default function Products({productId, productName, productPrice}){
    return(
        <>
        <li>
            productId={productId}
            <br/>
            productName={productName}
            <br/>
            productPrice={productPrice}
        </li>
        </>
    )
}