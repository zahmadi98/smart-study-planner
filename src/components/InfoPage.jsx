import { useState } from "react";

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
        <div className={`${className} flex flex-col w-full gap-y-5 mt-20`}>
            <h1 className="text-3xl text-center font-bold text-slate-100 mb-2">
                اطلاعات فردی
            </h1>

            <p className="text-center text-slate-400 mb-8">
                لطفاً اطلاعات خواسته شده را با دقت وارد کنید.
            </p>
            <div className="flex gap-2">
                <input
                type="text"
                className="w-full h-14 rounded-xl border border-emerald-900/40 bg-[#16231F] px-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                placeholder="نام خود را وارد کنید"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                type="text"
                className="w-full h-14 rounded-xl border border-emerald-900/40 bg-[#16231F] px-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                placeholder="نام خانوادگی خود رو وارد کنید"
                value={lastName}
                onChange={(e) => setLastName (e.target.value)}
                />
            </div>

            <div className="flex gap-2">
                <div className="w-full h-14 rounded-xl border border-emerald-900/40 bg-[#16231F] px-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20">
                <label htmlFor="gender">جنسیت</label>

                <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">انتخاب کنید</option>
                    <option value="female">خانم</option>
                    <option value="male">آقا</option>
                </select>
                </div>

                <input
                type="date"
                className="w-full h-14 rounded-xl border border-emerald-900/40 bg-[#16231F] px-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                placeholder="تاریخ تولد خود رو وارد کنید"
                value={birthDate}
                onChange={(e) => setBirthDate (e.target.value)}
                />
            </div>
            
            <div className="flex gap-2">
                <input
                type="text"
                className="w-full h-14 rounded-xl border border-emerald-900/40 bg-[#16231F] px-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                placeholder="پایه تحصیلی خود را وارد کنید"
                value={educationLevel}
                onChange={(e) => setEducationLevel (e.target.value)}
                />

                <div className="w-full h-14 rounded-xl border border-emerald-900/40 bg-[#16231F] px-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20">
                    <label htmlFor="EducationLevel">رشته</label>

                <select
                    id="EducationLevel"
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
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

            <div className="flex gap-2">
                <input
                type="text"
                className="w-full h-14 rounded-xl border border-emerald-900/40 bg-[#16231F] px-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                placeholder="نام استان خود را وارد کنید"
                value={province}
                onChange={(e) => setProvince (e.target.value)}
                />

                <input
                type="text"
                className="w-full h-14 rounded-xl border border-emerald-900/40 bg-[#16231F] px-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                placeholder="نام شهر خود را وارد کنید"
                value={city}
                onChange={(e) => setCity (e.target.value)}
                />
            </div>
        </div>

    );
};

export default InfoPage;