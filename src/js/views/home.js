import React, { useContext } from "react";
import Card from "../component/Card.jsx"
import "../../styles/home.css";
import { Context } from "../store/appContext"

export const Home = () => {
	const { store } = useContext(Context);
	return (
		<>
			<div className="container">

				<h1 className="head-text pt-3 pb-3">People</h1>
				<div className="home-card-list">
					{store.people.map((person) => {

						return (<Card key={person.uid} item={person} nature="people">

						</Card>)
					})}

				</div>



				<h1 className="head-text pt-3 pb-3"> Planets</h1>
				<div className=" home-card-list">
					{store.planets.map((planets) => {
						return (
							<Card key={planets.uid} item={planets} nature="planets">
							</Card>)
					})}
				</div>


				<h1 className="head-text pt-3 pb-3"> Vehicles</h1>
				<div className=" home-card-list">
					{store.vehicles.map((vehicles) => {
						return (<Card key={vehicles.uid} item={vehicles} nature="vehicles">

						</Card>)
					})}

				</div>




			</div>




		</>
	);
};

