import React, { useState } from 'react';

export default function Login() {
    const [login_not_registration, toggle_login_not_registration] = useState(false)
                            const [registrationInfo, setRegistrationInfo] = useState({
name: '',
lastName: '',
email: '',
phone: '',
password: '',
confirmPassword: '',
});

  const updateInfo = (key: string, newValue: string) => {
    setRegistrationInfo((prevState) => ({
      ...prevState,
      [key]: newValue,
    }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateInfo(name, value);
  };
    
    const info_block = (
        <div className="font-bold text-center text-white">
            Jetzt {login_not_registration ? `anmelden`:'registrieren'} und zurücklehnen. <br /> Wir haben alles, was dein Handy braucht.
        </div>
    )
const wrapper = (
    <section className="flex flex-col items-center justify-center w-full py-24 lg:h-screen">
        <h1 className="mb-8 text-2xl text-center">
            <span className="text-3xl">
                Hallo {registrationInfo.name.length > 0 ? registrationInfo.name : "__________"}
            </span>
            ,<br></br> willkommen bei Phone2Door!
        </h1>
        <div className="grid grid-cols-1 grid-rows-2 mt-10 md:grid-rows-1 rounded-3xl bg-slate-100 lg:h-2/3 lg:w-2/3 md:grid-cols-2 lg:overflow-hidden">
            <div className="grid order-2 grid-rows-6 py-8 pb-32 h-fit lg:order-1 lg:h-full lg:py-28 rounded-br-3xl rounded-bl-3xl">
                <h2 className="row-span-1 text-2xl font-bold text-center">Deine Infos</h2>
                <form className="grid h-full grid-cols-12 grid-rows-4 row-span-5 gap-4 p-8 px-10 lg:pb-8">
                    <input
                        type="text"
                        placeholder="Vorname"
                        className="col-span-6 row-start-1 px-4 rounded-3xl"
                        name="name"
                        value={registrationInfo.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Nachname"
                        className="col-span-6 col-start-7 row-start-1 px-4 rounded-3xl"
                        name="lastName"
                        value={registrationInfo.lastName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="E-Mail"
                        className="col-span-7 row-start-2 px-4 rounded-3xl"
                        name="email"
                        value={registrationInfo.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Telefon"
                        className="col-span-5 row-start-2 px-4 rounded-3xl"
                        name="phone"
                        value={registrationInfo.phone}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Passwort"
                        className="col-span-6 row-start-3 px-4 rounded-3xl"
                        name="password"
                        value={registrationInfo.password}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Passwort wiederholen"
                        className={`${
                            registrationInfo.confirmPassword.length > 0
                                ? registrationInfo.password === registrationInfo.confirmPassword
                                    ? "border-2 border-green-300"
                                    : "border-2 border-red-300"
                                : ""
                        } col-span-6 row-start-3 rounded-3xl px-4 outline-none`}
                        name="confirmPassword"
                        value={registrationInfo.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <div className="relative flex flex-col items-center col-span-10 col-start-2 row-span-1 row-start4 lg:col-span-8">
                        <button type="submit" className="w-2/3 h-12 font-bold bg-green-300 rounded-3xl">
                            {login_not_registration ? "Jetzt einloggen" : "Jetzt Registrieren"}
                        </button>
                        <button
                            type="button"
                            className="absolute underline translate-y-4 outline-none top-full text-slate-500"
                            onClick={() => toggle_login_not_registration(!login_not_registration)}
                        >
                            Ich habe {login_not_registration ? "noch keinen" : "schon einen"} Account: <br />
                            {login_not_registration ? "jetzt registrieren" : "zum login"}
                        </button>
                    </div>
                </form>
            </div>
            <div className="grid order-1 grid-rows-6 px-8 pt-20 overflow-hidden bg-green-600 rounded-tl-3xl rounded-tr-3xl lg:order-2 lg:rounded-3xl lg:py-28">
                <h2 className="row-span-1 text-2xl font-bold text-center text-white ">
                    {login_not_registration ? "Einfach anmelden" : "Noch keinen Account?"}
                </h2>
                {info_block}
                <div className="flex flex-col row-span-4 py-8">
                    <h3 className="mb-2">Der Server bedankt sich:</h3>
                    <p>{"{"}</p>
                    <p className="">&quot;Vorname&quot;: {JSON.stringify(registrationInfo.name)}</p>
                    <p className="">&quot;Nachname&quot;: {JSON.stringify(registrationInfo.lastName)}</p>
                    <p className="">&quot;Email&quot;: {JSON.stringify(registrationInfo.email)}</p>
                    <p className="">&quot;Telefon&quot;: {JSON.stringify(registrationInfo.phone)}</p>
                    <p>{"}"}</p>
                </div>
            </div>
        </div>
    </section>
)
  
  return wrapper;
}