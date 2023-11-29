export default class BasicManager{
    constructor(model,populateProps){
        this.model = model;
        this.populateProps= populateProps

    }
    async findAll() {
        try {
            const response = await this.model.find().lean().populate(this.populateProps);
        return response;
        } catch (error) {
            throw error;
        }
        
    }
    async findById(id){
        try {
            const response = await this.model.findById(id).populate(this.populateProps);;
     return response
        } catch (error) {
            throw error;
        }
        
      
    }
    async createOne(obj){
        try {
            const response = await this.model.create(obj);
        return response
        } 
        catch (error) {
            throw error;
        }
    }
    async updateOne(id,obj){
        try {
            const response = await this.model.findByIdAndUpdate(id,obj);
        return response
        }
        
        catch (error) {
            throw error;
        }
    }
    async deleteOne(id) {
        try {
            const response = await this.model.deleteOne({ _id: id });
            return response;
        } catch (error) {
            throw error;
        }
    }
}
/* despues importar usermodel y basic y usar como class UsersManager  extends BasicManager{
    constructor(){
        super(usersModel)
    }
    const users = neW usersManager()
    si necesito un  metodo mas especifico simplemente lo agrego en el manager que necesito  igual que si necesito pasarle un populate
} */