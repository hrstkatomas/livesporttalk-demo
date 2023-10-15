const path = require("path");
const isProduction = process.env.NODE_ENV === "production";

const config = {
	entry: {
		index: "./client/index.tsx",
		clientHydrater: "./client/clientHydrater.tsx",
		styles: ["@flashscore/web-component-library/index.css", "@flashscore/web-component-library/colorVariables.css"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: "ts-loader",
				exclude: ["/node_modules/"],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"],
	},
};
const ssrConfig = {
	...config,
	entry: {
		serverRenderer: "./client/serverRenderer.tsx",
	},
	target: "node",
};

module.exports = () => {
	const configs = [config, ssrConfig];
	configs.forEach((config) => (config.mode = isProduction ? "production" : "development"));
	return configs;
};
