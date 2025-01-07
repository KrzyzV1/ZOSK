import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>O nas</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>

          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>O ZOSK</h2>
            <p className='fs-17'>Jesteśmy firmą, która od wielu lat wspiera przedsiębiorstwa w zarządzaniu magazynami, finansami i procesami sprzedaży. Naszym celem jest dostarczanie intuicyjnych rozwiązań, które ułatwiają codzienną pracę i pozwalają na efektywne wykorzystanie zasobów.</p>

            <p className='fs-17'> Wyróżnia nas indywidualne podejście do każdego klienta oraz zaangażowanie w dostosowanie naszych produktów do specyficznych potrzeb. Dzięki temu nasze narzędzia wspierają rozwój zarówno małych firm, jak i dużych korporacji, zapewniając niezawodność i innowacyjność. Dołącz do grona naszych zadowolonych klientów!</p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default About