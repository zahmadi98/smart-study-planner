import InfoPage from "./InfoPage";
import ProgressBar from "./ProgressBar";
import Sidebar from "./Sidebar";

const PersonalInfoPage = () => {
    
    return(
        <div className="min-h-screen flex items-center justify-center pt-10 p-8">
            
            <div className="w-full max-w-7xl rounded-3xl backdrop-blur-xl bg-[#071411]/40 border border-emerald-900/40 p-10 shadow-2xl shadow-emerald-950/40 flex gap-10">
                <div className="flex flex-col flex-[3]">
                    <ProgressBar progress={17} />
                    
                    <InfoPage />
                </div>

                <div className="w-[1px] self-stretch bg-emerald-900/40"></div>

                <Sidebar />

            </div>
        </div>
    );
};

export default PersonalInfoPage;