"use client" //에러는 클라이언트 컴포넌트에서만 진행해서
import { useEffect } from "react"

export default function Error({ error, reset }) {
     useEffect(() => {
         console.error(error)
         console.log(error.message);
         console.log(error.digest);
     },[error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={reset}>
                 Try again
            </button>
        </div>
    );
}