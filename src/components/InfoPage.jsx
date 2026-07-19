import { useState } from "react";
import {
  FiUser,
  FiUsers,
  FiCalendar,
  FiBookOpen,
  FiChevronDown,
  FiMapPin,
} from "react-icons/fi";


const InfoPage = ({className}) => {

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [gender, setGender] = useState("");
        const [birthDate, setBirthDate] = useState("");
        const [educationLevel, setEducationLevel] = useState("");
        const [fieldOfStudy, setFieldOfStudy] = useState("");
        const [province, setProvince] = useState("");
        const [city, setCity] = useState("");
    

    return(
        <div className={`${className} flex flex-col w-full gap-y-5 mt-10`}>
           <div className="flex flex-col items-center mb-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md flex items-center justify-center shadow-xl shadow-emerald-900/20">
                <FiUser className="text-3xl text-emerald-400" />
            </div>

            <h1 className="mt-3 text-3xl font-bold text-slate-100">
                اطلاعات فردی
            </h1>

            <p className="mt-2 text-center text-slate-400">
                لطفاً اطلاعات خواسته شده را با دقت وارد کنید.
            </p>
            </div>

            <div className="flex gap-4">
                <div className="w-full">
                    <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-slate-300"
                    >
                        <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 ml-2"></span>
                        نام
                    </label>

                    <div className="relative">
                        <FiUser className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg" />

                        <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="نام خود را وارد کنید"
                        className="w-full h-12 rounded-xl border border-emerald-900/40 bg-[#16231F] pr-12 pl-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        />
                    </div>
                </div>
                
                <div className="w-full">
                    <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-medium text-slate-300"
                    >
                        <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 ml-2"></span>
                        نام خانوادگی
                    </label>

                    <div className="relative">
                        <FiUsers className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg" />

                        <input
                        type="text"
                        className="w-full h-12 rounded-xl border border-emerald-900/40 bg-[#16231F] pr-12 pl-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        placeholder="نام خانوادگی خود رو وارد کنید"
                        value={lastName}
                        onChange={(e) => setLastName (e.target.value)}
                        />
                    </div>
                </div>
                
            </div>

            <div className="flex gap-4">
                <div className="w-full">
                    <label
                        htmlFor="gender"
                        className="block mb-2 text-sm font-medium text-slate-300"
                    >
                        <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 ml-2"></span>
                        جنسیت
                    </label>

                    <div className="relative">
                        <FiUsers className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg" />

                        <FiChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />

                        <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full appearance-none h-12 rounded-xl border border-emerald-900/40 bg-[#16231F] pr-12 pl-4 text-slate-100 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        >
                        <option value="">انتخاب کنید</option>
                        <option value="female">خانم</option>
                        <option value="male">آقا</option>
                        </select>
                    </div>
                </div>

                <div className="w-full">
                    <label
                        htmlFor="birthDate"
                        className="block mb-2 text-sm font-medium text-slate-300"
                    >
                        <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 ml-2"></span>
                        تاریخ تولد
                    </label>

                    <div className="relative">
                        <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg" />

                        <input
                        id="birthDate"
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="w-full h-12 rounded-xl border border-emerald-900/40 bg-[#16231F] pr-12 pl-4 text-slate-100 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        />
                    </div>
                </div>
            </div>
            
            <div className="flex gap-4">
                <div className="w-full">
                    <label
                        htmlFor="educationLevel"
                        className="block mb-2 text-sm font-medium text-slate-300"
                    >
                        <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 ml-2"></span>
                        پایه تحصیلی
                    </label>

                    <div className="relative">
                        <FiBookOpen className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg" />

                        <input
                        id="educationLevel"
                        type="text"
                        value={educationLevel}
                        onChange={(e) => setEducationLevel(e.target.value)}
                        placeholder="پایه تحصیلی خود را وارد کنید"
                        className="w-full h-12 rounded-xl border border-emerald-900/40 bg-[#16231F] pr-12 pl-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <label
                        htmlFor="EducationLevel"
                        className="block mb-2 text-sm font-medium text-slate-300"
                    >
                        <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 ml-2"></span>
                        رشته
                    </label>

                    <div className="relative">
                        <FiBookOpen className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg" />

                        <FiChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />

                        <select
                        id="EducationLevel"
                        value={fieldOfStudy}
                        onChange={(e) => setFieldOfStudy(e.target.value)}
                        className="w-full appearance-none h-12 rounded-xl border border-emerald-900/40 bg-[#16231F] pr-12 pl-4 text-slate-100 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        >
                        <option value="">انتخاب کنید</option>
                        <option value="math">ریاضی</option>
                        <option value="Experimental">تجربی</option>
                        <option value="humanities">انسانی</option>
                        <option value="art">هنر</option>
                        <option value="language">زبان</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="w-full">
                    <label
                        htmlFor="province"
                        className="block mb-2 text-sm font-medium text-slate-300"
                    >
                        <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 ml-2"></span>
                        استان
                    </label>

                    <div className="relative">
                        <FiMapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg" />

                        <input
                        id="province"
                        type="text"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        placeholder="نام استان خود را وارد کنید"
                        className="w-full h-12 rounded-xl border border-emerald-900/40 bg-[#16231F] pr-12 pl-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <label
                        htmlFor="city"
                        className="block mb-2 text-sm font-medium text-slate-300"
                    >
                        <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 ml-2"></span>
                        شهر
                    </label>

                    <div className="relative">
                        <FiMapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg" />

                        <input
                        id="city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="نام شهر خود را وارد کنید"
                        className="w-full h-12 rounded-xl border border-emerald-900/40 bg-[#16231F] pr-12 pl-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default InfoPage;