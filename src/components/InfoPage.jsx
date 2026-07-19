import { useState } from "react";
import {
  FiUser,
  FiUsers,
  FiCalendar,
  FiBookOpen,
  FiChevronDown,
  FiMapPin,
} from "react-icons/fi";
import InputField from "./Ui/InputField";
import SelectField from "./Ui/SelectField";


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
                <InputField
                    id="firstName"
                    label="نام"
                    icon={FiUser}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="نام خود را وارد کنید"
                />
                
                <InputField
                    id="lastName"
                    label="نام خانوادگی"
                    icon={FiUsers}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="نام خانوادگی خود را وارد کنید"
                />
                
            </div>

            <div className="flex gap-4">
                <SelectField
                    id="gender"
                    label="جنسیت"
                    icon={FiUsers}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    options={[
                        { value: "female", label: "خانم" },
                        { value: "male", label: "آقا" }
                    ]}
                />

               <InputField
                    id="birthDate"
                    type="date"
                    label="تاریخ تولد"
                    icon={FiCalendar}
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                />
            </div>
            
            <div className="flex gap-4">
                <InputField
                id="educationLevel"
                type="text"
                label=" پایه تحصیلی"
                icon={FiBookOpen}
                value={educationLevel}
                onChange={(e) => setEducationLevel(e.target.value)}
                placeholder="پایه تحصیلی خود را وارد کنید"
                />

                <SelectField
                    id="fieldOfStudy"
                    label="رشته"
                    icon={FiBookOpen}
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                    options={[
                        { value: "math", label: "ریاضی" },
                        { value: "experimental", label: "تجربی" },
                        { value: "humanities", label: "انسانی" },
                        { value: "art", label: "هنر" },
                        { value: "language", label: "زبان" },
                    ]}
                />
            </div>

            <div className="flex gap-4">
                <InputField
                    id="province"
                    label="استان"
                    icon={FiMapPin}
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    placeholder="نام استان خود را وارد کنید"
                />

                <InputField
                    id="city"
                    label="شهر"
                    icon={FiMapPin}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="نام شهر خود را وارد کنید"
                />
                  
            </div>
        </div>

    );
};

export default InfoPage;