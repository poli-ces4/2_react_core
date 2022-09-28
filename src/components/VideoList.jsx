import styles from './VideoList.module.css';
const VideoList = ({ title, children }) => (
	<div className={styles.wrapper}>
		<h1>{title}</h1>
		{children || 'No hay videos'}
	</div>
);

export default VideoList;
