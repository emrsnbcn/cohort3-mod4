import { useState } from "react";

function LikeButton() {
	const [isLiked, setIsLiked] = useState(false);

	// conditional rendering

	return (
		<button onClick={() => setIsLiked(!isLiked)}>
			{isLiked ? "♥️ Liked" : "🤍 Like"}
		</button>
	);
}

export default LikeButton;
