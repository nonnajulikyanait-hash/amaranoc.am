import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from './useLanguageStore'; // Ներմուծում ենք լեզվի store-ը

export default function Grancvel() {
  // Լեզվի ստացումը store-ից
  const { language } = useLanguageStore();

  // Բազմալեզու բառարան
  const translations = {
    hy: {
      title: "Մուտք",
      emailPlaceholder: "Էլ. հասցե կամ հեռախոսահամար",
      passwordPlaceholder: "Գաղտնաբառ",
      forgotPassword: "Մոռացե՞լ եք գաղտնաբառը:",
      loginButton: "Մուտք",
      orText: "կամ",
      googleLogin: "Մուտք Google-ի միջոցով",
      notRegistered: "Դեռ գրանցված չե՞ք: ",
      registerLink: "Գրանցում"
    },
    ru: {
      title: "Вход",
      emailPlaceholder: "Эл. адрес или номер телефона",
      passwordPlaceholder: "Пароль",
      forgotPassword: "Забыли пароль?",
      loginButton: "Войти",
      orText: "или",
      googleLogin: "Войти через Google",
      notRegistered: "Еще не зарегистрированы? ",
      registerLink: "Регистрация"
    },
    en: {
      title: "Log In",
      emailPlaceholder: "Email or phone number",
      passwordPlaceholder: "Password",
      forgotPassword: "Forgot password?",
      loginButton: "Log In",
      orText: "or",
      googleLogin: "Sign in with Google",
      notRegistered: "Not registered yet? ",
      registerLink: "Register"
    }
  };

  const t = translations[language] || translations.hy;

  return (
    <div className="flex justify-center items-center min-h-[85vh] bg-white font-sans p-5">
      <div className="w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-neutral-900 mb-9">{t.title}</h2>
        
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="w-full">
            <input 
              type="text" 
              placeholder={t.emailPlaceholder} 
              className="w-full px-4 py-3.5 border border-neutral-200 rounded-lg text-sm outline-none box-border text-neutral-800 placeholder:text-neutral-300 focus:border-orange-500 transition-colors"
            />
          </div>
          
          <div className="w-full">
            <input 
              type="password" 
              placeholder={t.passwordPlaceholder} 
              className="w-full px-4 py-3.5 border border-neutral-200 rounded-lg text-sm outline-none box-border text-neutral-800 placeholder:text-neutral-300 focus:border-orange-500 transition-colors"
            />
          </div>
          
          <div className="text-left mt-1">
            <a href="#" className="text-sm text-neutral-900 underline font-medium">
              {t.forgotPassword}
            </a>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-amber-400 hover:bg-orange-500 text-white border-none p-3.5 rounded-full text-base font-semibold cursor-pointer mt-2.5 transition-colors"
          >
            {t.loginButton}
          </button>
        </form>
        
        <div className="my-6 relative before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 before:h-px before:bg-neutral-100 before:z-10">
          <span className="bg-white px-4 text-neutral-400 text-sm relative z-20">
            {t.orText}
          </span>
        </div>
        
        <button className="w-full bg-white text-neutral-900 border border-amber-400 p-3 rounded-full text-sm font-medium flex items-center justify-center gap-2.5 cursor-pointer transition-colors hover:bg-orange-50/50">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google" 
            className="w-4 h-4"
          />
          <a href="https://accounts.google.com/v3/signin/accountchooser?client_id=887462832347-f634quqp31ol3f1ctkri47df24834a7c.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapi.amaranoc.am%2Fauth%2Fgoogle%2Flogin%2Fcallback&response_type=code&scope=profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&dsh=S-869577613%3A1780142852041884&o2v=2&service=lso&flowName=GeneralOAuthFlow&opparams=%253F&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMyV3A0_SwPYQrY6smZm6eDfeUHOztJTVMf98mTq__JIA1z6uCf1hf5QiYRUGdmW8ihRxXBcecNzICEwzWYF4iJZsOBuSpl7PB3fs0VqgPHOuAc6Ntm_bleOM08XU-Kk06jc1TO42rlnCQjn9qAL-e_XeAaGnGrO4mr7jFC7WQLrQdyfCxuCnj3kaIODbQFQqQ3KSF6w5fzcGjFG5YHXtk5Id0EWcJkuk_tlG-k9EBjxO3O4FbUF3ZCtxQ6G3zWqoC4D5w6BLTfy3cijJ3nie2I_bGVVeLofsQjwViD_ry3spQUKyUtyvtxO9whZsgCc2Q2XKxYyQz0x12rs2quQSBp-fNrAL6hmw9W4s4Fu_DJWeupqknkEgMwQwFd9zFsO_QroyImqJwHrzowK5ZVr_dEhJZmuzoCdlYTcRagAQAbIwsWBUuuWPh0nTP2Gv2XIx7ZKjejinH4vGYQP-c9O83U42GUXQ%26flowName%3DGeneralOAuthFlow%26as%3DS-869577613%253A1780142852041884%26client_id%3D887462832347-f634quqp31ol3f1ctkri47df24834a7c.apps.googleusercontent.com%26requestPath%3D%252Fsignin%252Foauth%252Fconsent%33&app_domain=https%3A%2F%2Fapi.amaranoc.am">
            {t.googleLogin}
          </a> 
        </button>
        
        <div className="mt-9 text-sm text-neutral-900 font-medium">
          <span>{t.notRegistered}</span>
          <Link to="/grancum2" className="text-neutral-900 underline">{t.registerLink}</Link>
        </div>
      </div>
    </div>
  );
}