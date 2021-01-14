// import withRedux from 'next-redux-wrapper';
// import { Provider } from 'react-redux';
import initStore from '../store';
import React from 'react';
import { wrapper } from "../store/index.js";


const MyApp = ({ Component, pageProps }) => (
	<Component (...pageProps) />
)

// function MyApp({ Component, pageProps, store, ...rest }) {
// 	return (
// 		<Provider store={store}>
// 			<Component {...pageProps} />
// 		</Provider>
// 	);
// }

// const initStore = () => store;

export default wrapper.withRedux(MyApp);
