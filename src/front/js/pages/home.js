import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardSearchCode from "../component/cardSearchCode";
import CardProducts from "../component/cardProducts";
import CardOffers from "../component/cardOffers";

import CardInformation from "../component/cardInformation";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (

		<div>
			<CardSearchCode />
			{/* <h3 className="card-home-title m-3">Become a EyA Solutiona Rewards member to unlock exclusive perks and more!</h3> */}
			<CardProducts />
			<CardInformation />
			<CardOffers />
			


		</div>

	);
};
