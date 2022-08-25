// export interface Posts {
// 	Author: {
// 		user_id: string;
// 		username: string;
// 	};
// 	id: string;
// 	title: string;
// 	message: string;
// 	image_url?: string;
// 	created_at: string;
// }
import { posts, post_like_dislike, user_data } from '@prisma/client';
export type Posts = posts & {
	Author: user_data;
	post_data: { liked: number; disliked: number };
	post_like_dislike: post_like_dislike[];
};
