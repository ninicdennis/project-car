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
import { posts, user_data } from '@prisma/client';
export type Posts = posts & { Author: user_data };
