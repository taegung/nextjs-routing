export default async function ProductDetail({ params }) {

    // asynchronous access of `params.productId`.
  const { productId } = await params
    
    return (
        <div>상품 {productId} 디테일 페이지</div>
    );
}