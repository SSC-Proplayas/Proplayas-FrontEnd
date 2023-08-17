import { RequireAuth } from "@/components/utility";
import Sidebar from "@/components/common/Sidebar";
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
     
      <div className="grid grid-cols-12 gap-4 h-full pt-[4%]">
        <div className="col-span-2">
          <Sidebar />
        </div>
        
        <div className="col-span-10">{children}</div>
      </div>
      
    </div>
  );
}


/**
 *  Version que se conecta con el backend
 * 
 * import { RequireAuth } from "@/components/utility";
import Sidebar from "@/components/common/Sidebar";
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
     
      <div className="grid grid-cols-12 gap-4 h-full pt-[4%]">
        <div className="col-span-2">
          <Sidebar />
          <RequireAuth children={undefined} />  
        </div>
        
        <div className="col-span-10">{children}</div>
      </div>
      
    </div>
  );
}
 */