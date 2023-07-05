import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// export default mongoose.models.User | mongoose.model('User', userSchema);

// /If the Post collection does not exist create a new one.
export default mongoose.models.User || mongoose.model('User', userSchema);
