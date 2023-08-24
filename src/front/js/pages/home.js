import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import OffersCard from "../component/offersCard";
import CardSearchCode from "../component/cardSearchCode";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<CardSearchCode/>
			<OffersCard />
			

		</div>

	);
};

