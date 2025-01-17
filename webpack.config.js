import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve("./dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        host: "127.0.0.1",
        port: "5500",
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource",
            },
        ],
    },
};
