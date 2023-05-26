import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import { Entypo } from "@expo/vector-icons";

type SongListProps = {
	title: string;
	desc: string;
	key: string;
	image: string;
};
const SongList = ({ title, desc, image }: SongListProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.songDetails}>
				<Image source={require("../../assets/me.jpg")} style={styles.image} />
				<View>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.desc}>{desc}</Text>
				</View>
			</View>
			<View style={styles.dots}>
				<Entypo name="dots-three-horizontal" size={12} color={colors.white} />
			</View>
		</View>
	);
};

export default SongList;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blueLight,
		borderRadius: 10,
		paddingVertical: 15,
		paddingHorizontal: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
	},
	songDetails: {
		flexDirection: "row",
		alignItems: "center",
	},

	image: {
		width: 60,
		height: 60,
		borderRadius: 10,
		marginRight: 15,
	},
	title: {
		color: colors.white,
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 10,
	},
	desc: {
		fontSize: 16,
		color: colors.white,
		opacity: 0.5,
	},

	dots: {
		borderWidth: 2,
		borderColor: colors.white,
		borderRadius: 15,
		paddig: 2,
		width: 25,
		height: 25,
		alignItems: "center",
		justifyContent: "center",
	},
});
