import { RequireAuth } from "@/components/utility";
import Sidebar from "@/components/common/Sidebar";
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <RequireAuth children={undefined} /> 
      <div className="grid grid-cols-12 gap-4 h-full pt-[4%]">
        <div className="col-span-2">
          <Sidebar />
          
        </div>
        
        <div className="col-span-10">{children}</div>
      </div>
      
    </div>
  );
}
