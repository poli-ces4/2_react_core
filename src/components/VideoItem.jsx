import Counter from './Counter';
import styles from './VideoItem.module.css';
const VideoItem = ({ title, duration, date, description }) => {
	return (
		<div className={styles.videoItem}>
			<h2>{title}</h2>
			<div>
				<span className={styles.duration}>{duration}</span>
				<span>{date}</span>
				<Counter />
			</div>
			<p>{description}</p>
		</div>
	);
};

export default VideoItem;
