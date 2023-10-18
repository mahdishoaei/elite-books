import { applicationPath } from "@/services/applicationPath"

export const SingleProduct = async (id: number) => {
  try{
    const response = await fetch(`${applicationPath.BASE_URL}${applicationPath.BOOKS.GET}/${id}`)
    console.log(response)
    return response
  }
  catch(error) {
    return error
  }
}