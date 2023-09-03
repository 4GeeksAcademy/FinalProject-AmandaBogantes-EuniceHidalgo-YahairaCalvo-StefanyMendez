import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardSearchCode from "../component/cardSearchCode";
import CardProducts from "../component/cardProducts";
import CardOffers from "../component/cardOffers";
import CardInformation from "../component/cardInformation";

export const Home = () => {
	const { store, actions } = useContext(Context)

	return (

		<div>
			<CardSearchCode />
			<CardProducts />
			<CardInformation />
			<CardOffers />
		</div>

	);
};
