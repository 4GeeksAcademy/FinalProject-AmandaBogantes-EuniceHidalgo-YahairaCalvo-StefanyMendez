import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardSearchCode from "../component/cardSearchCode";
import CardProducts from "../component/cardProducts";
import CardOffers from "../component/cardOffers";
import CardInformation from "../component/cardInformation";
import MapLocation from "../component/mapLocation";


export const Home = () => {
	const { store, actions } = useContext(Context)

	return (

		<div>
			<CardSearchCode />
			<CardInformation />
			<CardProducts />
			<CardOffers />
			<MapLocation />
		</div>

	);
};
