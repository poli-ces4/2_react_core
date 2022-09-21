import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';

const App = () => (
	<>
		<VideoList title='Videos de Programacion'>
			<VideoItem
				title='Video de React'
				duration='20:10'
				date='20/09/2022'
				description='Conceptos basicos de react'
			/>
			<VideoItem
				title='Video de NodeJs'
				duration='10:00'
				date='20/09/2022'
				description='Conceptos basicos de Nodejs'
			/>
		</VideoList>
		<VideoList title='Videos de Musica'>
			<VideoItem
				title='Video de Musica'
				duration='20:10'
				date='20/09/2022'
				description='Salsa'
			/>
		</VideoList>
		<VideoList title='Videos de Backend'></VideoList>
	</>
);

export default App;
