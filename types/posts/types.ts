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
export type Posts = {
	id: string;
	title: string;
	message: string;
	image_url: string | null;
	user_id: string;
	created_at: Date;
	updated_at: Date;
	username: string;
	liked: number | null;
	disliked: number | null;
	post_id: string;
	post_data: { liked: boolean; disliked: boolean; id: string } | null;
};
