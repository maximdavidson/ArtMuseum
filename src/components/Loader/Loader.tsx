import { useState } from 'react';

interface LoaderProps {
	src: string;
	alt: string;
}

function Loader({ src, alt }: LoaderProps) {
	const [loading, setLoading] = useState(true);

	return (
		<div>
			{loading && <div>Загрузка...</div>}
			<img
				src={src}
				alt={alt}
				onLoad={() => {
					setTimeout(() => setLoading(false), 2000);
				}}
				style={loading ? { display: 'none' } : {}}
			/>
		</div>
	);
}

export default Loader;
