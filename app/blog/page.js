export default async function Page() {

    //시간 지연

    await new Promise(resolve =>setTimeout(resolve,2000));
    return (
        <div>블로그 메인 페이지</div>
    );
}