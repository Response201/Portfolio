import React from "react";
import "./about.css";

import { Card } from "../../components/Card";
/* import img from '../../assets/image/r.png' */

export const About = () => {
  return (
    <article className="about___container">
      <section className="about___content">
        <section className="about___section_text">
          <Card
            textOne="Mitt namn är Jessica
och är bosatt i Täby. Jag har flera års
arbetslivserfarenhet som receptionist/
teknisk support samt en
kandidatexamen inom miljö och
utveckling i ryggsäcken."
textTwo="Min dröm att bli utvecklare startade
redan 2011. Då jag arbetade på ett
streaming bolag. Jag var handen
mellan kund och programmerare.
Genom ett tätt samarbete med denna
yrkesgrupp fick jag upp ögonen för
denna bransch. Förra året bestämde
jag mig för att ta tag i denna dröm.
Idag behärskar jag grunderna i HTML,
CSS och Javascript samt teknikerna
inom Mern-stack!"
            textThree=" Jag älskar att lära mig nya tekniker,
utveckla kod som boostar
användarinteraktion och optimerar
användarupplevelsen. Min framtida
ambition är att fortsätta utvecklas och
bli en mångsidig programmerare"
          />
        </section>

        <section className="about___section_img">
          {/*  <Card img={img} alt='hello' /> */}
        </section>
      </section>
    </article>
  );
};
