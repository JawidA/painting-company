import React from "react";
import "./services_style.css";
import "./assets/internalPainting.png"

export default function Services() {
  return (
    <div className="services-section">
      <div className="services-centered">
        <div className="services-contaner">
          <h3 className="section-name">Our Services</h3>
          <h1 className="section-title">Experience Makes Us Confident</h1>
          <p className="section-par">
            Join us at Behsud Painting Company on a journey to redefine the
            aesthetics of your space. Let's paint a masterpiece together.
          </p>

          <div className="services-card-contaner">
            <div className="internal-painting">
              <img
                src="https://cdn3.iconfinder.com/data/icons/construction-376/64/paint-paintbrush-interior-color-tool-decoration-256.png"
                alt="Internal Painting image"
                className="service-icon icon"
              />
              <h2>Internal Painting</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur. Eget aliquet phasellus
                ut mi netus risus. In luctus facilisi hendrerit aliquam ornare
                aliquet rhoncus augue euismod.
              </p>
            </div>

            <div className="external-painting">
              <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/house-painting-1952039-1658258.png?f=webp&w=256" alt="" className="service-icon icon" />
              <h2>External Painting</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Est vulputate sed lectus
                sed donec leo ac id. Eget mauris interdum rutrum cursus.
              </p>
            </div>

            <div className="residential-painting">
              <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/painting-98893.png?f=webp&w=256" alt="" className="service-icon icon" />
              <h2>Residential Painting</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Est id congue commodo
                malesuada vitae sapien. Aliquet arcu porttitor etiam sit massa
                habitant duis..
              </p>
            </div>

            <div className="commercial-painting">
              <img src="https://cdn.iconscout.com/icon/free/png-512/free-building-1182-460359.png?f=webp&w=256" alt="" className="service-icon icon" />
              <h2>Commercial Painting</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Habitant purus purus
                tincidunt nisl cras in semper feugiat tellus. Fames facilisis
                platea vitae tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
