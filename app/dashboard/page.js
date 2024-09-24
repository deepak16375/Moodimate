import Main from "@/components/Main";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
export const metadata = {
    title: "Moodimate ⋅ Dashboard",
   
  };

export default function DashboardPage (){
    return (
      
        <Main>
           <Dashboard/>
        </Main>
    )
}