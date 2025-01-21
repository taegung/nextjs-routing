import Link from "next/link";

const ProductList = () => {
    const productList = [3, 4]; // 상품 목록이 들어있는 리스트

    return (
        <div>
            <h1>Product List</h1>
            <h2>
                <Link href="products/1">Product 1</Link>
            </h2>
            <h2>
                <Link href="products/2">Product 2</Link>
            </h2>
            {/* Array.map()을 통해 동적으로 렌더링 */}
            {productList.map(productId => (
                <h2 key={productId}>
                    <Link href={`products/${productId}`}>Product {productId}</Link>
                </h2>
            ))}

            {/* {productList.map(productId =>(
               <h2 key={productId}> <Link href={`products/${productId}'}> </Link>  </h2>
            ))} 
             */}
        </div>
    );
}
export default ProductList;