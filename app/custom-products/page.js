export default async function Page() {

    const response =await fetch('http://localhost:3001/products',
        //기본값은 캐싱을 수행하지 않는 'no-store'로 동작
        { cache:'force-cache'}
      
    ) 
    const products = await response.json();


    return (
        <ul className="space-y-4 p-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
          </li>
        ))}
      </ul>
    );
}




