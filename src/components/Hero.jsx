import { HERO_CONTENT } from "../constants"
import { useTranslation } from "react-i18next";


const Hero = () =>{
  const { t, i18n } = useTranslation();

    return(
        <section className="max-w-7xl mx-auto border-b-2">
            <div className="flex flex-col itemns-center my-20">
                <h3 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
                    {t("hero.title")}
                </h3>
                <p className="lg:ml-6 text-sm mb-4 font-medium tracking-lighter">
                    {t("hero.subtitle")}
                </p>
                <img src={HERO_CONTENT.image} className="w-full h-[65vh] object-cover rounded-2xl p-2" alt="HERO"/>
            </div>
        </section>
    )
}

export default Hero