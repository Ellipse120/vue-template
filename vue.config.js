module.exports = {
	// devServer: {
	//   proxy: {
	//     "/Login": {
	//       target: process.env.VUE_APP_BASE_API,
	//       pathRewrite: {
	//         "^/Login": "/Login"
	//       }
	//     },
	//     "/GetUserInfo": {
	//       target: process.env.VUE_APP_BASE_API,
	//       pathRewrite: {
	//         "^/GetUserInfo": "/GetUserInfo"
	//       }
	//     },
	//     "/api": {
	//       target: process.env.VUE_APP_BASE_API,
	//       pathRewrite: {
	//         "^/api": "/api"
	//       }
	//     }
	//   }
	// },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(svg)(\?.*)?$/,
          use: [
            {
              loader: "svg-sprite-loader",
              options: {
                symbolId: "icon-[name]"
              }
            }
          ]
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("svg")
      .test(() => false)
      .use("file-loader");
  }
};
