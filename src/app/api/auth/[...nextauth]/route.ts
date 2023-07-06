import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connect from '@/utils/db';
import User from '@/models/User';

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			id: 'credentials',
			name: 'Credentials',
			credentials: {},
			//next line will throw an ts error until I return the user
			async authorize(credentials) {
				await connect();
				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				try {
					const user = await User.findOne({
						email: email,
					});
					if (user) {
						//check password
						const isPasswordCorrect = await bcrypt.compare(
							password,
							user.password
						);
						if (!isPasswordCorrect) {
							throw new Error('Incorrect password');
						}
						return user;
					} else {
						throw new Error('User not found');
					}
				} catch (err: any) {
					throw new Error(err);
				}
			},
		}),
	],
	pages: {
		error: '/dashboard/login',
	},
});

export { handler as GET, handler as POST };
