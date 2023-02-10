import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import { colors } from "../../styles/colors";

const NotificationCard = () => {
	return (
		<View style={styles.container}>
			<View>
				<Image source={require("../../assets/me.jpg")} style={styles.image} />
			</View>
			<View style={styles.details}>
				<Text style={styles.title}>
					#44: Why everyone should take acting lessons
				</Text>
				<Text style={styles.desc}>Haiyaa with Nigel</Text>
				<Text style={styles.message}>New Episode</Text>
				<View style={styles.icons}>
					<View style={styles.leftIcons}>
						<View style={styles.arrowDown}>
							<Feather name="arrow-down" size={12} color={colors.white} />
						</View>
						<View style={styles.dots}>
							<Entypo
								name="dots-three-horizontal"
								size={12}
								color={colors.white}
							/>
						</View>
					</View>
					<View style={styles.playBtn}>
						<Feather name="play" size={20} color={colors.white} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default NotificationCard;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 30,
		borderBottomColor: colors.gray,
		borderBottomWidth: 1,
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 10,
	},
	details: {
		flex: 1,
		marginLeft: 15,
	},
	title: {
		fontSize: 16,
		color: colors.white,
		fontWeight: "bold",
	},
	desc: {
		fontSize: 14,
		color: colors.gray,
		marginVertical: 5,
	},
	message: {
		color: "green",
		fontSize: 14,
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

	arrowDown: {
		borderWidth: 2,
		borderColor: colors.white,
		borderRadius: 20,
		paddig: 5,
		marginHorizontal: 10,
		width: 25,
		height: 25,
		alignItems: "center",
		justifyContent: "center",
	},

	playBtn: {
		backgroundColor: colors.pink,
		width: 35,
		height: 35,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
	icons: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	leftIcons: {
		flexDirection: "row",
		alignItems: "center",
	},
});
