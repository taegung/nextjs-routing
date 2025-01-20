import { notFound } from "next/navigation";

export default async function ReviewDetail({ params }) {

    const { reviewId, productId } = await params;

  
    
    
    if(Number(reviewId >10)){
       //not-found 페이지 렌더링???
       notFound(); //프로그램 레벨에서 (Programatically)처리
        

    }
    return (
        
        <div>상품 {productId}의 {reviewId}번째 리뷰</div>
    );
}

