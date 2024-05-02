import c from './Topics.module.css';
import shape from '@assets/shape.png';

interface PaginationProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

function PaginationComponent({
	page,
	totalPages,
	onPageChange,
}: PaginationProps) {
	return (
		<div className={c.pagination}>
			{Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
				<button
					key={pageNum}
					onClick={() => onPageChange(pageNum)}
					className={`${c.button} ${pageNum === page ? c.activePage : ''}`}
				>
					{pageNum}
				</button>
			))}
			<button
				className={c.button}
				onClick={() => onPageChange(page + 1)}
				disabled={page === totalPages}
			>
				<img src={shape} alt="shape" />
			</button>
		</div>
	);
}

export default PaginationComponent;
