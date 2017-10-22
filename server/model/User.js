import mongoose from 'mongoose';
mongoose.set('debug',true);

/*=======================  Defining the schema  =============================================*/
let UserSchema=new mongoose.Schema({
/*=======================  schema for register user =============================================*/
	fullName:{type:String,required:true},
	email:{type:String,unique:true,required:true},
	password:{type:String,required:true},
	contact:{type:Number,required:true},
	dob:{type: Date,required:true},
	gender:{type:String,required:true},
	profilePhoto:{type:String},
	status:{type:String},
	isActive:{type:Boolean},
/*=======================  schema for chats =============================================*/
	chats:[{
		from:{type:String},
		to:{type:String},
		time:{type:Date},
		message:{type:String},
		flag:{type:Boolean}
	}],
	uploads:[]
},{collection:"chat", versionKey:false});

module.exports=mongoose.model('chat',UserSchema);
