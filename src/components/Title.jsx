const Title = ({ views, setViews }) => {
	console.log('Render-Title');
	return (
		<button
			onClick={() => {
				const newViews = { ...views };
				newViews.value++;
				setViews(newViews);
			}}
		>
			Views : {views.value}
		</button>
	);
};

export default Title;
