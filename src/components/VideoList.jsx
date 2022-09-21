const VideoList = ({ title, children }) => (
	<div>
		<h1>{title}</h1>
		{children || 'No hay videos'}
	</div>
);

export default VideoList;
