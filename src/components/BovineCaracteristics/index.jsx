import { ImageBackground, StyleSheet, View } from "react-native";

import Inputs from "../Fragments/Inputs";
import Buttons from "../Fragments/Buttons";
import DropDownList from "../Fragments/DropDownList";

export default function BovineCaracteristics({
	background,
	navigation_,
	context: {
		values = {},
		section = [],
		error = <></>,
		languages = {},
		operations = {},
		decorations = {},
		grassFreshness = [],
	},
}) {
	const { COW, CART, BALANCE } = decorations;
	const { leyends = {}, placeholders = {} } = languages;
	const { forrageConsume, animalWeight, ocupationPeriode } = values;
	const { END, FORRAGE_CONSUME, ANIMAL_WEIGHT, OCUPATION_PERIODE } = operations;

	return (
		<ImageBackground
			style={st.container}
			source={background}
			resizeMode="cover">
			{error}

			{/* 
			<Image style={st.bal} source={balan} /> 
			*/}

			<Inputs
				inputMode="numeric"
				value={animalWeight}
				keyboardType="numeric"
				leyend={leyends.ANIMAL_WEIGHT}
				placeholder={placeholders.ANIMAL_WEIGHT}
				onEndEditing={(event) =>
					ANIMAL_WEIGHT(parseFloat(event.nativeEvent.text))
				}
			/>
			<View style={st.line} />

			{section[0] && (
				<>
					<Inputs
						inputMode="numeric"
						keyboardType="numeric"
						value={ocupationPeriode}
						leyend={leyends.OCUPATION_PERIODE}
						placeholder={placeholders.OCUPATION_PERIODE}
						onEndEditing={(event) =>
							OCUPATION_PERIODE(parseFloat(event.nativeEvent.text))
						}
					/>
					<View style={st.line} />
				</>
			)}

			{section[1] && (
				<>
					<DropDownList
						value={forrageConsume}
						items={grassFreshness}
						dispatch={FORRAGE_CONSUME}
						leyend={leyends.FORRAGE_CONSUME}
					/>
					<View style={st.line} />
				</>
			)}

			{section[2] && (
				<View style={st.btns}>
					<Buttons
						leyend={leyends.BUTTON_1}
						press={() => navigation_.navigate("paddocksAreaForm")}
					/>
					<Buttons
						leyend={leyends.BUTTON_2}
						press={() => {
							END();
							navigation_.navigate("report");
						}}
					/>
				</View>
			)}
		</ImageBackground>
	);
}
const st = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",

		backgroundColor: "rgb(0,0,0)",
	},
	line: {
		width: 300,
		height: 5,

		marginTop: 40,
		marginBottom: 40,

		borderBottomWidth: 4,
		borderBottomColor: "rgb(0,0,0)",
	},
	btns: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	b_ico: {
		width: 200,
		height: 200,

		position: "absolute",

		right: -80,
		top: 150,

		zIndex: 0,
	},
	c_ico: {
		position: "absolute",

		width: 200,
		height: 200,

		bottom: -35,
		left: 10,
	},
	ca_icoo: {
		position: "absolute",

		width: 175,
		height: 175,

		bottom: -15,
		right: -20,
	},
});
