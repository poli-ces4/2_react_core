const VideoItem = ({ title, duration, date, description }) => {
	return (
		<div>
			<h2>{title}</h2>
			<div>
				<span>{duration}</span>
				<span>{date}</span>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default VideoItem;
