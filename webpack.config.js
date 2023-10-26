const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

const config = {
	entry: {
		index: "./client/index.tsx",
		client: "./client/client.tsx",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: "ts-loader",
				exclude: ["/node_modules/"],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
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
		server: "./client/server.tsx",
	},
	target: "node",
};

module.exports = () => {
	const configs = [config, ssrConfig];
	configs.forEach(
		(config) => (config.mode = isProduction ? "production" : "development"),
	);
	return configs;
};
