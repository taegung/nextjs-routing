import LineChart from "@/components/dashboard/line-chart";


export default  function Dashboard() {

    return (
        //dashboard 페이지에 필여한 컴포넌트들을 불러와서 page.js에 구성
        //Linchart에 필요한 컴포넌트 구성 
       <div>
           <LineChart/>
            <div>Dashboard</div>
       </div>
    );
}

