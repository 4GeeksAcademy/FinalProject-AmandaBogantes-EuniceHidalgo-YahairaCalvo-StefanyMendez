import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardSearchCode from "../component/cardSearchCode";

import CardOffers from "../component/cardOffers";
import CardInformation from "../component/cardInformation";


export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
		<div>
			<header className="header-Home">
				<section className="titles-header">
					<h1>Give your components the maintenance they deserve</h1>
					<h2>Byte by Byte</h2>
				</section>
			</header>
			<main>
				<section className="container-aboutUs-home">
					<h3 className="title-home">Our Job</h3>
					<div className="row">
						<div className="col-lg-6">
							<CardSearchCode />
						</div>
						<div className="col-lg-6">
							<div className="container-textHome m-3">
								<h6 className="subtitles-home"><i className="fa-solid fa-lightbulb"></i> The simplest way to stay updated on your team and process.</h6>
								<p className="text-homeau">On our IT page, we offer you a comprehensive solution for all your technological needs.
									From equipment maintenance to implementing the latest innovations, we are committed to providing you with a seamless and efficient experience.</p>
								<h6 className="subtitles-home" ><i className="fa-solid fa-fingerprint"></i> Our team of technology experts stays updated with the latest trends and best practices.</h6>
								<p className="text-homeau">This means you can rely on us to keep your systems running smoothly and at peak performance.</p>
								<h6 className="subtitles-home"><i className="fa-solid fa-arrow-trend-up"></i> Growing your business.</h6>
								<p className="text-homeau">Furthermore, we prioritize the security of your data and the reliability of your systems, allowing you to focus on what truly matters.</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container-cardInfHome">
						<CardInformation />
					</div>
				</section>

				<section className="portfolio">
					<div className="container container-portfolio">
						<h3 className="title-home">Services</h3>
						<div className="galeria-port">
							<div className="imagen-port">
								<img src="https://media.istockphoto.com/id/843765236/es/foto/ingeniera-electr%C3%B3nica-placa-base-del-ordenador-de-prueba-en-laboratorio.jpg?s=612x612&w=0&k=20&c=Sjh2562Iq5WgqI5Mf_5jltRfWM6hNtyFcCkhcRcKC7I=" alt="" />
								<div className="hover-galeria">
									<p><i className="fa-brands fa-medium"></i>  Maintenance</p>
								</div>
							</div>
							<div className="imagen-port">
								<img src="https://images.pexels.com/photos/7379/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
								<div className="hover-galeria">
									<p><i className="fa-brands fa-medium"></i>  Component purchase</p>
								</div>
							</div>
							<div className="imagen-port">
								<img src="https://media.istockphoto.com/id/515643040/es/foto/hombre-reparaci%C3%B3n-de-computadoras.jpg?s=612x612&w=0&k=20&c=i2lpGjyMcWZ6CSZ68hyrE4-h3JxuZdHBoNyy0Wp_MPU=" alt="" />
								<div className="hover-galeria">
									<p><i className="fa-brands fa-medium"></i>  Repair</p>
								</div>
							</div>
							<div className="imagen-port">
								<img src="https://media.istockphoto.com/id/1033711098/es/foto/auricular-auriculares-tel%C3%A9fono-y-ordenador-port%C3%A1til-en-call-center.jpg?s=612x612&w=0&k=20&c=XNar0KNCsHjD_6uFt3PJEJriZy2tUjnBp3Isd07dHD0=" alt="" />
								<div className="hover-galeria">
									<p><i className="fa-brands fa-medium"></i>  Spare parts sale</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="container-ourClients">
					<h3 className="title-home">What our costumers say</h3>
					<div className="row">
						<div className="col-md-4">
							<div className="card-group-information">
								<img src="https://static.cegos.es/content/uploads/2023/03/01165224/GettyImages-1300321639.jpg" className="card-img-clients" alt="" />
								<div className="card-body">
									<h3 className="card-title">Fiorela</h3>
									<p className="card-text">The equipment maintenance page is awesome! The intuitive interface and tracking options make the maintenance process a breeze. An invaluable resource for any business that values efficiency and optimal equipment performance!</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card-group-information">
								<img src="https://www.bncr.fi.cr/_cache_76b3/content/Banco_Nacional_personas_613x275_1-1609240000007146.jpg" className="card-img-clients" alt="" />
								<div className="card-body">
									<h3 className="card-title">Ana</h3>
									<p className="card-text">The equipment maintenance page is simply outstanding. Its clean design and scheduling tools make keeping our equipment in top shape a walk in the park. A resource every operations manager should have in their arsenal!</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card-group-information">
								<img src="https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-arrives-for-the-australian-premiere-of-thor-news-photo-1600160296.jpg?crop=1.00xw:0.668xh;0,0.0535xh&resize=2048:*" className="card-img-clients" alt="" />
								<div className="card-body">
									<h3 className="card-title">Marco</h3>
									<p className="card-text">Excellent service, it allows you to stay updated on the process and they always keep you informed. It's a very intuitive page, perfect!!</p>
								</div>
							</div>

						</div>
					</div>
				</section>

				<section className="offers">
					<CardOffers />
				</section>

				<section className="team-home">
					<div className="container team-home">
						<h3 className="title-home">Team</h3>
						<div className="row m-1">
							<div className="col-md-4">
								<div className="service-ind text-center">
									<img src="https://media.istockphoto.com/id/1171169127/es/foto/disparo-de-cabeza-de-hombre-guapo-alegre-con-corte-de-pelo-de-moda-y-gafas-aisladas-en-el.jpg?s=612x612&w=0&k=20&c=5l5tRTmRQHFFHAZZjgpIiOUY-6HHbzwuV74mcW4z_Mw=" className="img-team" />
									<h6 className="subtitles-home">Maintenance</h6>
									<p className="text-homeau">Contact: Carlos@dev.team.2023@gmail.com</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="service-ind  text-center">
									<img src="https://media.istockphoto.com/id/1280113805/es/foto/sonrisa-joven-belleza-de-cerca-retrato.jpg?s=612x612&w=0&k=20&c=X1aTHQJJA9ewNOZwWA8AV9mw6UvyZafQX3PWWTt2T5M=" className="img-team" />
									<h6 className="subtitles-home">Devoloper</h6>
									<p className="text-homeau">Contact: Nicoles@dev.team.2023@gmail.com</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="service-ind  text-center">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5tpMFF_09iqmpNENhS-eMf2gfkp2xGALufduEqoy-DLklND4PrNrt2tYY37KDQ_XQjE&usqp=CAU" className="img-team" />
									<h6 className="subtitles-home">Coustomer Service</h6>
									<p className="text-homeau">Contact: Sofia@dev.team.2023@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</section>

			</main>
		</div>
	);
};

