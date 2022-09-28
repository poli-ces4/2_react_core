import { useState } from 'react';
import Title from './Title';

const Counter = () => {
	const [views, setViews] = useState({ value: 0, counter: 10 });
	console.log('Render-Counter');
	return <Title views={views} setViews={setViews} />;
};
export default Counter;
