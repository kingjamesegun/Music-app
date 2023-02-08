import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

type ThrowbackCardProps = {
	artistImage: boolean;
};

const ThrowbackCard = ({ artistImage }: ThrowbackCardProps) => {
	const navigation = useNavigation();

	const handlePress = () => {
		// navigation.navigate("RecentlyPlayed");
	};
	return (
		<TouchableOpacity style={styles.container} onPress={handlePress}>
			<Image
				source={require("../../assets/me.jpg")}
				style={
					artistImage
						? [styles.container, styles.artistCoverImage]
						: styles.coverImage
				}
			/>
			<View style={styles.texts}>
				<Text style={styles.title}>90 Anthem </Text>
				<Text style={styles.desc}>The songs rocked the 90s....</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ThrowbackCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blueLight,
		paddingVertical: 25,
		borderRadius: 15,
		justifyContent: "center",
		width: 160,
		alignItems: "center",
		marginRight: 10,
	},
	coverImage: {
		height: 130,
		width: 130,
		borderRadius: 10,
	},
	artistCoverImage: {
		height: 130,
		width: 130,
		borderRadius: 65,
	},
	texts: {
		marginTop: 15,
		paddingHorizontal: 10,
	},
	title: {
		color: colors.white,
		fontSize: 16,
		fontWeight: "bold",
	},
	desc: {
		color: colors.white,
		opacity: 0.7,
		fontSize: 14,
		marginTop: 5,
	},
});
