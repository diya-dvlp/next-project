

class productservices{
    static async getproducts(){
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );
        if (!response.ok){
            throw new Error("failed to fetch products")
        }
        return response.json
    }
}
 
export default productservices;

