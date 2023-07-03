import Content from './components/Content/Content';
import Layout from './components/Layout/Layout';
import Scene from './components/Scene/Scene';

function App() {
	return (
		<>
			<Scene />
			<Layout>
				<Content />
			</Layout>
		</>
	);
}

export default App;
