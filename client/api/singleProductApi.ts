import { applicationPath } from "@/services/applicationPath"

export const singleProduct = async (id : number) => {
  try {
    const response = await fetch(`${applicationPath.BASE_URL}${applicationPath.BOOKS.GET}/${id}`)
    return response.json();
  }
  catch(error){
    return error
  }
}
