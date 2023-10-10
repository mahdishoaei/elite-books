import { applicationPath } from "../../../services/applicationPath"

export default defineEventHandler(async (event) => {
   try {
    const response = await $fetch(`${applicationPath.BASE_URL}${applicationPath.BOOKS.GET}`)
    return response
   }
   catch(error) {
    return error
   }
})