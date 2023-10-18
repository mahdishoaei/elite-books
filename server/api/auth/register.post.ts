import { applicationPath } from "../../../services/applicationPath"
import { errorToast, successToast } from '@/utils/toasMessage'
import { useRouter } from 'vue-router'

const Router = useRouter()

export default defineEventHandler(async (event) => {
   try {
        const response = await $fetch(`${applicationPath.BASE_URL}${applicationPath.AUTH.REGISTER}`)
        successToast('bottom-right', 'The registration operation was completed successfully')
        Router.push('/auth/login')
        return response
   }
   catch(error) {
        errorToast('bottom-right', 'Reaquest has been error and your network is slow please try again!!!')
        return error
   }
})