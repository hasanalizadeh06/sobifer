import { redirect } from 'next/navigation'

function page() {
    redirect('/admin/login')
}

export default page