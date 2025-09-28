1. On Monday, the **userController** was shorter because the error-handling logic was defined in `userSchema.statics` within the **userModel**. On Wednesday, however, the error handling was moved into the **userController**, which made it longer.  

2.  
   - **2.1** `userSchema.statics.login` in *userModel.js* defines the login function logic within the schema.  
   - **2.2** Inside the model, `"this"` refers to the schema itself, whereas in the controller, `"User"` is used.  
   - **2.3** When encryption/validation is handled in the controller, modules like **bcrypt** or **validator** must be imported there.  

3. I plan to continue using the **controller-based logic approach**, since I’ve already implemented the functionality in the controllers.  
